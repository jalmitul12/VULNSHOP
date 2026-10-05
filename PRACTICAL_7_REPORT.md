# Practical 7 — Develop an E-Commerce Application and Perform OWASP Security Assessment

**University:** Nirma University  
**Department:** Computer Science & Engineering  
**Course:** 3CS204ME24 — Ethical Hacking and Vulnerability Assessment  
**Practical:** 7  
**Application:** VulnShop — Cinematic 3D Intentionally Vulnerable E-Commerce Application  

---

## 1. Aim
To architect and implement a production-quality, modern web application and systematically demonstrate and mitigate 10 OWASP-style vulnerabilities within an authorized local testing environment.

---

## 2. Architecture & Design
VulnShop is built with a decoupled modern architecture:
- **Frontend**: React 18, TypeScript, Three.js (interactive 3D WebGL device), Tailwind CSS, Framer Motion, Lenis smooth scrolling, and Lucide icons.
- **Backend**: Node.js & Express REST API / form-handling server.
- **Database**: Local JSON persistence layer (`data/users.json`, `products.json`, `orders.json`, `reviews.json`).
- **Proxy Compatibility**: Full support for Burp Suite request interception, Repeater, and Intruder modules.

---

## 3. Detailed Vulnerability Assessment

### Attack 1: SQL Injection (Authentication Bypass)
- **Target Endpoint**: `POST /login`
- **Methodology**: The application concatenates credentials into authentication evaluation logic without parameterized typing.
- **Demonstration**: Submitting `' or 1=1--` into the username field satisfies truth condition and logs in as `student`.
- **Mitigation**: Use parameterized queries (`SELECT * FROM users WHERE username = ? AND password = ?`) or ORM query builders. Compare with `/login-secure`.

### Attack 2: Reflected Cross-Site Scripting (XSS)
- **Target Endpoint**: `GET /search?q=`
- **Methodology**: Search terms are echoed directly into the output response without context-aware HTML entity encoding.
- **Demonstration**: Visiting `/search?q=<img src=x onerror=alert('Reflected-XSS')>` executes the script payload in the browser context.
- **Mitigation**: Context-aware output encoding (HTML character escaping) and Content Security Policy (CSP).

### Attack 3: Stored Cross-Site Scripting (XSS)
- **Target Endpoint**: `POST /product/:id/review`
- **Methodology**: Product review text is saved directly into the database without tag stripping or sanitization.
- **Demonstration**: Submitting `<b style='color:#b7ff6a'>[XSS Verified]</b>` stores and renders the payload to every customer viewing that product.
- **Mitigation**: Sanitize user HTML with DOMPurify on the server before storage or encode entities on output.

### Attack 4: Insecure Direct Object References (IDOR)
- **Target Endpoint**: `GET /order/:id` / `GET /api/orders/:id`
- **Methodology**: Order identification is taken directly from the client request without checking `req.user.id === order.userId`.
- **Demonstration**: Authenticate as `student` and request `/order/1001` (belonging to Alice) or `/order/1002` (belonging to Bob) to view private invoices.
- **Mitigation**: Implement server-side object authorization checks on every state read/write. Compare with `/order-secure/:id`.

### Attack 5: Broken Access Control
- **Target Endpoint**: `GET /admin` / `GET /api/admin`
- **Methodology**: The administration endpoint contains no server-side role check middleware.
- **Demonstration**: Any unauthenticated user or normal user (`role: "user"`) can access `/admin` and read the user database.
- **Mitigation**: Enforce server-side role middleware `requireAdmin` (`req.user.role === 'admin'`). Compare with `/admin-secure`.

### Attack 6: Cross-Site Request Forgery (CSRF)
- **Target Endpoint**: `POST /profile/email`
- **Methodology**: State-changing email updates require only valid session cookies without anti-CSRF synchronizer tokens.
- **Demonstration**: A malicious cross-origin form POST to `/profile/email` modifies the victim's email address automatically.
- **Mitigation**: Anti-CSRF synchronizer tokens, `SameSite=Lax` / `Strict` cookies, and Origin/Referer verification. Compare with `/profile/email-secure`.

### Attack 7: Unrestricted File Upload
- **Target Endpoint**: `POST /profile/upload`
- **Methodology**: Avatar upload handler accepts arbitrary MIME types and file extensions without validation.
- **Demonstration**: Upload a non-image payload (e.g. `.html`, `.js`, `.php`) and observe file persistence on the server.
- **Mitigation**: Enforce allow-list extension validation (e.g. `.png`, `.jpg`), MIME sniffing, and random filename hashing.

### Attack 8: Parameter Tampering
- **Target Endpoint**: `POST /checkout`
- **Methodology**: The server accepts the client's submitted financial total or quantity directly instead of looking up official catalog prices.
- **Demonstration**: Intercept the checkout request in Burp Suite and change `customTotal` or quantity to buy hardware at a modified price.
- **Mitigation**: Financial sums and price calculations must be performed strictly on the server from authoritative product records.

### Attack 9: Weak Authentication & Rate Limiting
- **Target Endpoint**: `POST /login`
- **Methodology**: Absence of throttling or account lockout allows unlimited consecutive failed authentication attempts.
- **Demonstration**: Launch Burp Suite Intruder with a dictionary attack against demo accounts.
- **Mitigation**: Implement rate limiting (`express-rate-limit`), account lockouts, exponential backoffs, and Multi-Factor Authentication (MFA).

### Attack 10: Insecure Session Cookie Attributes
- **Target Cookie**: `vulnshop_session`
- **Methodology**: Cookies lack `Secure` and `SameSite` flags in plain HTTP mode.
- **Demonstration**: Inspect response headers for `Set-Cookie: vulnshop_session=...` in Burp Suite Proxy.
- **Mitigation**: Deploy `Secure`, `HttpOnly`, and `SameSite=Strict` attributes over HTTPS with session renewal.

---

## 4. Conclusion
VulnShop illustrates that security vulnerabilities are properties of backend application logic and authorization boundaries rather than visual indicators. Even a premium, modern 3D interface is vulnerable if server controls are absent. Robust security requires defense-in-depth: parameterized queries, contextual encoding, object-level authorization, anti-CSRF tokens, and strict input validation.
