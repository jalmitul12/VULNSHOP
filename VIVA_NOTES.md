# VulnShop Practical 7 — Viva Examination Notes

### Q1: What makes VulnShop realistic compared to a standard security lab?
**Ans:** VulnShop is designed as a legitimate, high-performance technology hardware storefront with real e-commerce functionality (catalog browsing, live search, 3D interactive hardware models, cart calculations, checkout, order tracking, profile management, and review submission). The vulnerabilities exist inside normal business logic rather than artificial "Click to Hack" exercise buttons.

### Q2: How does the SQL Injection work in this application?
**Ans:** The login handler concatenates the `username` parameter directly into authentication evaluation. Supplying `' or 1=1--` forces the expression to evaluate to `true`, bypassing password validation and authenticating as the default user (`student`). The fix is parameterized queries (`?` placeholders).

### Q3: What is the difference between Reflected and Stored XSS in VulnShop?
**Ans:**
- **Reflected XSS (`GET /search?q=`)**: The search payload is reflected immediately in the current HTTP response. It is not stored in the database and only affects users who click the crafted link.
- **Stored XSS (`POST /product/:id/review`)**: The payload is stored permanently in `data/reviews.json` and executed whenever any user navigates to that product page.

### Q4: Explain IDOR in the context of VulnShop.
**Ans:** Insecure Direct Object Reference occurs at `GET /order/:id`. When user `student` accesses `/order/1001` or `/order/1002`, the server returns the requested order record without validating whether `order.userId === req.user.id`.

### Q5: How do you demonstrate CSRF against VulnShop?
**Ans:** The endpoint `POST /profile/email` modifies the user's email address using only the session cookie without requiring an anti-CSRF token or validating the `Origin` header. An attacker hosting a malicious site can trigger this request via an auto-submitting hidden HTML form when the victim is logged in.

### Q6: How does Parameter Tampering affect the checkout flow?
**Ans:** The client submits the order total and quantities in the POST body to `/checkout`. If the server trusts this client-supplied `customTotal` or quantity without recalculating based on the database price, an attacker can purchase expensive items for arbitrary low prices.

### Q7: What are the key frontend and backend technologies used?
**Ans:**
- **Frontend**: React 18, TypeScript, Three.js (interactive WebGL 3D laptop), Tailwind CSS, Framer Motion, Lenis smooth scrolling, Lucide icons.
- **Backend**: Node.js & Express REST API, Multer (multipart upload handling), JSON persistence.
