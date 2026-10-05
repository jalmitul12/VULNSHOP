const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const HOST = "0.0.0.0";

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, "public");
const DIST = path.join(ROOT, "dist");
const DATA = path.join(ROOT, "data");
const UPLOADS = path.join(ROOT, "uploads");

fs.mkdirSync(DATA, { recursive: true });
fs.mkdirSync(UPLOADS, { recursive: true });

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    fs.writeFileSync(file, JSON.stringify(fallback, null, 2));
    return fallback;
  }
}

function writeJson(file, value) {
  fs.writeFileSync(file, JSON.stringify(value, null, 2));
}

const SEED_USERS = [
  { id: 1, username: "student", password: "student123", email: "student@vulnshop.local", role: "user" },
  { id: 2, username: "alice", password: "alice123", email: "alice@vulnshop.local", role: "user" },
  { id: 3, username: "bob", password: "bob123", email: "bob@vulnshop.local", role: "user" },
  { id: 4, username: "admin", password: "admin123", email: "admin@vulnshop.local", role: "admin" }
];

const SEED_PRODUCTS = [
  {
    id: 101,
    name: "AeroBook 14",
    category: "Laptops",
    price: 69999,
    stock: 12,
    accent: "AB",
    description: "14-inch performance laptop with precision titanium unibody, high-refresh display, and silent active thermal dispersion.",
    rating: 4.9,
    ratingCount: 28
  },
  {
    id: 102,
    name: "Pulse X1",
    category: "Smartphones",
    price: 34999,
    stock: 24,
    accent: "PX",
    description: "Premium 5G smartphone with AMOLED 120Hz display and neural computational photography.",
    rating: 4.8,
    ratingCount: 42
  },
  {
    id: 103,
    name: "Nimbus Headphones",
    category: "Audio",
    price: 4999,
    stock: 40,
    accent: "NH",
    description: "Wireless active noise-cancelling studio headphones with spatial audio and ultra-low latency.",
    rating: 4.7,
    ratingCount: 35
  },
  {
    id: 104,
    name: "KeyWave Mechanical",
    category: "Accessories",
    price: 3999,
    stock: 31,
    accent: "KW",
    description: "Compact 75% mechanical keyboard with hot-swappable tactile switches and sound dampening.",
    rating: 4.9,
    ratingCount: 19
  },
  {
    id: 105,
    name: "Vision 27",
    category: "Monitors",
    price: 21999,
    stock: 8,
    accent: "V27",
    description: "27-inch 4K HDR productivity monitor with ultra-thin bezels and 99% DCI-P3 color accuracy.",
    rating: 4.6,
    ratingCount: 14
  },
  {
    id: 106,
    name: "Orbit Mouse Pro",
    category: "Accessories",
    price: 2499,
    stock: 64,
    accent: "OM",
    description: "Ergonomic precision wireless mouse with 26K DPI optical sensor and PTFE glide feet.",
    rating: 4.8,
    ratingCount: 56
  }
];

const SEED_ORDERS = [
  {
    id: 1001,
    userId: 2,
    items: [{ productId: 102, quantity: 1 }],
    total: 34999,
    status: "Delivered",
    address: "Alice · Lab Block A, Nirma Campus",
    date: "16 Aug 2026"
  },
  {
    id: 1002,
    userId: 3,
    items: [{ productId: 103, quantity: 2 }],
    total: 9998,
    status: "Shipped",
    address: "Bob · Research Lab 3, Department of CS",
    date: "15 Aug 2026"
  },
  {
    id: 1003,
    userId: 1,
    items: [{ productId: 104, quantity: 1 }],
    total: 3999,
    status: "Processing",
    address: "Student · Main Lab, Nirma Campus",
    date: "17 Aug 2026"
  }
];

const SEED_REVIEWS = [
  {
    id: 1,
    productId: 103,
    userId: 2,
    username: "alice",
    body: "Great sound fidelity, active noise cancellation, and all-day battery life.",
    rating: 5,
    date: "16 Aug 2026"
  },
  {
    id: 2,
    productId: 101,
    userId: 3,
    username: "bob",
    body: "Fast compilation times, great thermal performance, and solid battery life.",
    rating: 5,
    date: "15 Aug 2026"
  }
];

const usersFile = path.join(DATA, "users.json");
const productsFile = path.join(DATA, "products.json");
const ordersFile = path.join(DATA, "orders.json");
const reviewsFile = path.join(DATA, "reviews.json");

const users = readJson(usersFile, SEED_USERS);
const products = readJson(productsFile, SEED_PRODUCTS);
const orders = readJson(ordersFile, SEED_ORDERS);
const reviews = readJson(reviewsFile, SEED_REVIEWS);

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from client dist and public folders
if (fs.existsSync(DIST)) {
  app.use(express.static(DIST));
}
app.use(express.static(PUBLIC));
app.use("/uploads", express.static(UPLOADS));

// Session Store
const sessions = new Map();

function getCookie(req, name) {
  const raw = req.headers.cookie || "";
  const re = new RegExp("(?:^|;\\s*)" + name + "=([^;]+)");
  const m = raw.match(re);
  return m ? m[1] : null;
}

function currentUser(req) {
  const token = getCookie(req, "vulnshop_session");
  const s = token ? sessions.get(token) : null;
  return s ? users.find(u => u.id === s.userId) || null : null;
}

function setSession(res, userId, secure = false) {
  const token = crypto.randomBytes(secure ? 32 : 16).toString("hex");
  sessions.set(token, { userId, created: Date.now(), secure });
  // Intentionally omits Secure/SameSite in vulnerable path for HTTP assessment
  const flags = "Path=/; HttpOnly" + (secure ? "; SameSite=Lax" : "");
  res.setHeader("Set-Cookie", `vulnshop_session=${token}; ${flags}`);
}

function requireLogin(req, res, next) {
  const user = currentUser(req);
  if (!user) {
    if (req.path.startsWith("/api/")) {
      return res.status(401).json({ error: "Authentication required" });
    }
    return res.redirect("/login?error=Please+sign+in+first");
  }
  req.user = user;
  next();
}

function requireAdmin(req, res, next) {
  const user = currentUser(req);
  if (!user || user.role !== "admin") {
    if (req.path.startsWith("/api/")) {
      return res.status(403).json({ error: "Administrator authorization required" });
    }
    return res.status(403).send("403 Forbidden: Administrator authorization required.");
  }
  req.user = user;
  next();
}

function productById(id) {
  return products.find(p => p.id === Number(id));
}

// ---------------------------------------------------------------------------
// 1. AUTHENTICATION (SQL Injection & Secure comparison)
// ---------------------------------------------------------------------------
app.get("/api/me", (req, res) => {
  const user = currentUser(req);
  if (!user) return res.json({ user: null });
  res.json({
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  });
});

// INTENTIONALLY VULNERABLE: SQL Injection evaluation
app.post(["/login", "/api/login"], (req, res) => {
  const username = req.body.username || "";
  const password = req.body.password || "";

  let user = null;
  try {
    // Demonstrates classic SQL injection semantics: ' OR '1'='1 or ' or 1=1--
    if (username.includes("'") && (/or\s*'?\s*1\s*'?\s*=\s*'?\s*1/i.test(username) || /or\s+1\s*=\s*1/i.test(username))) {
      user = users[0]; // Bypasses auth to student account
    } else {
      user = users.find(u => u.username === username && u.password === password) || null;
    }
  } catch {}

  if (!user) {
    if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    return res.redirect("/login?error=Invalid+credentials");
  }

  // Set insecure session token
  setSession(res, user.id, false);

  if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
    return res.json({
      success: true,
      user: { id: user.id, username: user.username, email: user.email, role: user.role }
    });
  }
  res.redirect("/profile");
});

// SECURE AUTHENTICATION COMPANION ENDPOINT
app.post(["/login-secure", "/api/login-secure"], (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
      return res.status(401).json({ error: "Secure login rejected: Invalid credentials" });
    }
    return res.redirect("/login?error=Secure+login+rejected");
  }

  setSession(res, user.id, true);

  if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
    return res.json({
      success: true,
      user: { id: user.id, username: user.username, email: user.email, role: user.role }
    });
  }
  res.redirect("/profile");
});

app.post(["/register", "/api/register"], (req, res) => {
  const username = (req.body.username || "").trim();
  const email = (req.body.email || "").trim();
  const password = req.body.password || "";

  if (!username || !email || !password) {
    if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
      return res.status(400).json({ error: "All fields are required" });
    }
    return res.redirect("/register?error=All+fields+required");
  }

  if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
    if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
      return res.status(409).json({ error: "Username already taken" });
    }
    return res.redirect("/register?error=Username+already+taken");
  }

  const newUser = {
    id: Math.max(...users.map(u => u.id), 0) + 1,
    username,
    password,
    email,
    role: "user"
  };

  users.push(newUser);
  writeJson(usersFile, users);
  setSession(res, newUser.id, true);

  if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
    return res.json({
      success: true,
      user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role }
    });
  }
  res.redirect("/profile");
});

app.post(["/logout", "/api/logout"], (req, res) => {
  const token = getCookie(req, "vulnshop_session");
  if (token) sessions.delete(token);
  res.setHeader("Set-Cookie", "vulnshop_session=; Path=/; Max-Age=0; HttpOnly");

  if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
    return res.json({ success: true });
  }
  res.redirect("/");
});

// ---------------------------------------------------------------------------
// 2. PRODUCTS & SEARCH (Reflected XSS)
// ---------------------------------------------------------------------------
app.get("/api/products", (req, res) => {
  res.json({ products });
});

app.get("/api/products/:id", (req, res) => {
  const p = productById(req.params.id);
  if (!p) return res.status(404).json({ error: "Product not found" });
  const productReviews = reviews.filter(r => r.productId === p.id);
  res.json({ product: p, reviews: productReviews });
});

// INTENTIONALLY VULNERABLE: Reflected XSS query reflection
app.get(["/api/search"], (req, res) => {
  const q = req.query.q || "";
  const ql = q.toLowerCase();
  const matched = q
    ? products.filter(p => (p.name + " " + p.category + " " + p.description).toLowerCase().includes(ql))
    : products;

  res.json({
    query: q,
    rawQuery: q, // Reflected without escaping
    products: matched
  });
});

// ---------------------------------------------------------------------------
// 3. PRODUCT REVIEWS (Stored XSS)
// ---------------------------------------------------------------------------
app.post(["/product/:id/review", "/api/products/:id/review"], (req, res) => {
  const user = currentUser(req);
  const p = productById(req.params.id);
  if (!p) return res.status(404).json({ error: "Product not found" });

  const body = req.body.body || "";
  const rating = Number(req.body.rating || 5);
  const username = user ? user.username : (req.body.username || "Anonymous");

  if (!body.trim()) {
    return res.status(400).json({ error: "Review text cannot be empty" });
  }

  // INTENTIONALLY VULNERABLE: Stored XSS — HTML tags preserved without sanitization
  const newReview = {
    id: Math.max(...reviews.map(r => r.id), 0) + 1,
    productId: p.id,
    userId: user ? user.id : undefined,
    username,
    body,
    rating,
    date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
  };

  reviews.unshift(newReview);
  writeJson(reviewsFile, reviews);

  if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
    return res.json({ success: true, review: newReview });
  }
  res.redirect(`/product/${p.id}`);
});

// ---------------------------------------------------------------------------
// 4. ORDERS & IDOR
// ---------------------------------------------------------------------------
app.get("/api/orders", requireLogin, (req, res) => {
  const userOrders = orders.filter(o => o.userId === req.user.id);
  res.json({ orders: userOrders });
});

// INTENTIONALLY VULNERABLE: IDOR — Order ownership is not verified
app.get(["/order/:id", "/api/orders/:id"], (req, res) => {
  const orderId = Number(req.params.id);
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    if (req.path.startsWith("/api/")) return res.status(404).json({ error: "Order not found" });
    return res.status(404).send("Order not found");
  }

  if (req.path.startsWith("/api/")) {
    return res.json({ order });
  }

  // For direct browser navigation, fallback to SPA
  if (fs.existsSync(path.join(DIST, "index.html"))) {
    return res.sendFile(path.join(DIST, "index.html"));
  }
  res.send(`Order #${order.id} for user ${order.userId}`);
});

// SECURE OBJECT OWNERSHIP CHECK COMPANION ENDPOINT
app.get(["/order-secure/:id", "/api/orders-secure/:id"], requireLogin, (req, res) => {
  const orderId = Number(req.params.id);
  const order = orders.find(o => o.id === orderId && o.userId === req.user.id);

  if (!order) {
    return res.status(403).json({ error: "Access denied: You do not own this order record." });
  }
  res.json({ order });
});

// ---------------------------------------------------------------------------
// 5. CHECKOUT & PARAMETER TAMPERING
// ---------------------------------------------------------------------------
app.post(["/checkout", "/api/checkout"], requireLogin, (req, res) => {
  const { items, address, customTotal } = req.body;

  if (!items || !items.length) {
    return res.status(400).json({ error: "No items in order" });
  }

  // INTENTIONALLY VULNERABLE: Parameter Tampering — Client-supplied total/quantities trusted
  let total = 0;
  if (customTotal !== undefined && customTotal !== null && customTotal !== "") {
    total = Number(customTotal); // Trusts client override
  } else {
    for (const item of items) {
      const p = productById(item.productId);
      const qty = Number(item.quantity || 1);
      if (p) {
        total += p.price * qty;
      }
    }
  }

  const newOrder = {
    id: Math.max(...orders.map(o => o.id), 1000) + 1,
    userId: req.user.id,
    items: items.map(i => ({ productId: Number(i.productId), quantity: Number(i.quantity || 1) })),
    total,
    status: "Processing",
    address: address || `${req.user.username} · Lab address`,
    date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
  };

  orders.unshift(newOrder);
  writeJson(ordersFile, orders);

  if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
    return res.json({ success: true, orderId: newOrder.id, order: newOrder });
  }
  res.redirect(`/order/${newOrder.id}`);
});

// ---------------------------------------------------------------------------
// 6. PROFILE & CSRF
// ---------------------------------------------------------------------------
// INTENTIONALLY VULNERABLE: No CSRF token verified on state-changing POST
app.post(["/profile/email", "/api/profile/email"], requireLogin, (req, res) => {
  const newEmail = (req.body.email || "").trim();
  if (!newEmail) return res.status(400).json({ error: "Email cannot be empty" });

  req.user.email = newEmail;
  const idx = users.findIndex(u => u.id === req.user.id);
  if (idx !== -1) {
    users[idx].email = newEmail;
    writeJson(usersFile, users);
  }

  if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
    return res.json({ success: true, user: req.user });
  }
  res.redirect("/profile");
});

// SECURE CSRF TOKEN COMPANION ENDPOINT
app.post(["/profile/email-secure", "/api/profile/email-secure"], requireLogin, (req, res) => {
  if (req.body.csrfToken !== "SECURE-DEMO-TOKEN") {
    return res.status(403).json({ error: "CSRF token missing or invalid" });
  }

  const newEmail = (req.body.email || "").trim();
  if (!newEmail) return res.status(400).json({ error: "Email cannot be empty" });

  req.user.email = newEmail;
  const idx = users.findIndex(u => u.id === req.user.id);
  if (idx !== -1) {
    users[idx].email = newEmail;
    writeJson(usersFile, users);
  }

  if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
    return res.json({ success: true, user: req.user });
  }
  res.redirect("/profile");
});

// ---------------------------------------------------------------------------
// 7. FILE UPLOAD (Unrestricted File Upload)
// ---------------------------------------------------------------------------
const upload = multer({
  dest: UPLOADS,
  limits: { fileSize: 10 * 1024 * 1024 }
});

// INTENTIONALLY VULNERABLE: Accepts arbitrary file types without allow-list or extension check
app.post(["/profile/upload", "/api/profile/upload"], requireLogin, upload.single("avatar"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file was uploaded" });
  }

  const safeFilename = `${Date.now()}-${req.file.originalname}`;
  const targetPath = path.join(UPLOADS, safeFilename);

  try {
    fs.renameSync(req.file.path, targetPath);
  } catch {
    // Keep original if rename fails
  }

  if (req.headers.accept?.includes("application/json") || req.path.startsWith("/api/")) {
    return res.json({
      success: true,
      filename: req.file.originalname,
      url: `/uploads/${safeFilename}`
    });
  }
  res.redirect("/profile");
});

// ---------------------------------------------------------------------------
// 8. ADMIN DASHBOARD & BROKEN ACCESS CONTROL
// ---------------------------------------------------------------------------
// INTENTIONALLY VULNERABLE: Broken Access Control — No role enforcement on /admin
app.get(["/admin", "/api/admin"], (req, res) => {
  if (req.path.startsWith("/api/")) {
    return res.json({
      users: users.map(u => ({ id: u.id, username: u.username, email: u.email, role: u.role })),
      orders,
      products
    });
  }

  // For direct browser requests, serve SPA
  if (fs.existsSync(path.join(DIST, "index.html"))) {
    return res.sendFile(path.join(DIST, "index.html"));
  }
  res.json({ users, orders, products });
});

// SECURE ROLE CHECK COMPANION ENDPOINT
app.get(["/admin-secure", "/api/admin-secure"], requireAdmin, (req, res) => {
  res.json({
    success: true,
    users: users.map(u => ({ id: u.id, username: u.username, email: u.email, role: u.role })),
    orders,
    products
  });
});

app.get("/api/stats", (req, res) => {
  res.json({
    totalUsers: users.length,
    totalProducts: products.length,
    totalOrders: orders.length,
    totalRevenue: orders.reduce((s, o) => s + (o.total || 0), 0)
  });
});

// ---------------------------------------------------------------------------
// 9. CLIENT SPA FALLBACK ROUTE
// ---------------------------------------------------------------------------
app.use((req, res) => {
  const indexPath = path.join(DIST, "index.html");
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  res.status(404).send("VulnShop build not found. Run npm run build in client directory.");
});

app.listen(PORT, HOST, () => {
  console.log(`\n=============================================================`);
  console.log(`  VULNSHOP — CINEMATIC 3D PREMIUM STOREFRONT & PRACTICAL 7`);
  console.log(`  Server online at: http://localhost:${PORT}`);
  console.log(`  Assessment target: 0.0.0.0:${PORT} (Burp Suite Proxy Ready)`);
  console.log(`=============================================================\n`);
});
