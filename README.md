# VulnShop — Cinematic 3D Premium E-Commerce Website & Ethical Hacking Practical 7

VulnShop is a production-grade, cinematic technology commerce application built for **3CS204ME24 Ethical Hacking and Vulnerability Assessment, Practical 7**.

The application is architected to look and feel like a high-end luxury technology company (inspired by Apple, Linear, Stripe, Arc, and Awwwards-winning websites) while embedding 10 genuine OWASP-style security vulnerabilities inside legitimate business logic for authorized local Burp Suite testing.

---

## ⚡ Quick Start

### 1. Installation
```bash
# Install root dependencies
npm install

# Install client frontend dependencies
npm --prefix client install
```

### 2. Build Frontend (React + TypeScript + Three.js + Tailwind)
```bash
npm run build
```

### 3. Start Application Server
```bash
npm start
```

Open your browser at:
```text
http://localhost:3000
```
*(The server binds to `0.0.0.0:3000`, accessible from local host or isolated virtual machine environments).*

---

## 💎 Experience & Features

* **Cinematic 3D Centerpiece**: Interactive WebGL procedural titanium laptop with realistic metallic materials, mouse tilt/rotation physics, emissive accent strip, and scroll depth.
* **Full E-Commerce Journey**:
  * `/` — Cinematic Landing Page (Hero, Product Story, Product Signals, Commerce Journey, Curated Collection, System Proof).
  * `/products` — Complete Hardware Catalog with live search, category pills, and price sorting.
  * `/search` — Live search console with reflected query telemetry.
  * `/product/:id` — Hardware detail showcase with specifications, quantity selector, add to bag, and live reviews.
  * `/login` & `/register` — Split-screen authentication portal with demo account switchers and secure companion mode.
  * `/profile` & `/profile/upload` — Account dashboard with telemetry metrics, email settings, and drag-and-drop avatar uploader.
  * `/orders` & `/order/:id` — Order history and 5-step fulfillment timeline tracking (Order Placed → Paid → Processing → Shipped → Delivered).
  * `/checkout` — 3-step checkout flow (Delivery → Review → Confirm).
  * `/admin` — Operations console with gross revenue analytics, category spread charts, and user registry.
  * `/security` — Comprehensive OWASP Practical 7 matrix with reproduction steps and mitigations.
* **Global Systems**:
  * **Command Palette** (`⌘ / Ctrl + K` or Search button): Global live hardware and command search.
  * **Slide-out Mini Cart**: Animated shopping bag drawer with quantity controls and instant checkout.
  * **Custom Desktop Cursor**: Interactive trailing dot with contextual expand and labels (`VIEW`, `EXPLORE`).
  * **Lenis Smooth Scroll**: Frictionless viewport momentum.

---

## 🛡️ Seed Accounts & Credentials

| Username | Password | Role | Description |
|---|---|---|---|
| `student` | `student123` | `user` | Standard student account |
| `alice` | `alice123` | `user` | Demo customer account (Owns Order #1001) |
| `bob` | `bob123` | `user` | Demo customer account (Owns Order #1002) |
| `admin` | `admin123` | `admin` | Store administrator |

---

## 🎯 OWASP Vulnerability Matrix (Practical 7)

| No. | Vulnerability Area | Vulnerable Endpoint | Demonstration & Payload | Companion Secure Endpoint |
|---|---|---|---|---|
| 1 | **SQL Injection** | `POST /login` | Submit `' or 1=1--` in username field to bypass authentication. | `POST /login-secure` |
| 2 | **Reflected XSS** | `GET /search?q=` | Submit `<img src=x onerror=alert('Reflected-XSS')>` in search query. | Escaped DOM rendering |
| 3 | **Stored XSS** | `POST /product/:id/review` | Post a review containing formatted HTML/JS tags; rendered unescaped to all viewers. | Sanitized output encoding |
| 4 | **IDOR** | `GET /order/:id` | Logged in as `student`, change order ID in URL/request to `1001` or `1002` to inspect confidential invoices. | `GET /order-secure/:id` |
| 5 | **Broken Access Control** | `GET /admin` | Access `/admin` while authenticated as a normal user without admin authorization. | `GET /admin-secure` |
| 6 | **CSRF** | `POST /profile/email` | Trigger state-changing email updates without an anti-CSRF token. | `POST /profile/email-secure` |
| 7 | **Unrestricted File Upload** | `POST /profile/upload` | Upload non-image files or scripts via avatar multipart upload without extension check. | Type allow-list validation |
| 8 | **Parameter Tampering** | `POST /checkout` | Capture checkout request in Burp Suite and modify quantity or `customTotal`. | Server-calculated total |
| 9 | **Weak Authentication** | `POST /login` | No rate limiting or brute force lockout applied to failed logins. | Throttling / Rate-limiting |
| 10 | **Session Security** | `vulnshop_session` | Insecure cookie flags without strict SameSite/Secure in local HTTP mode. | SameSite=Strict & Secure |

---

## 🔍 Burp Suite Interception Setup

1. Open **Burp Suite** and verify the proxy listener is active on `127.0.0.1:8080`.
2. Configure your browser proxy or use Burp's embedded Chromium browser to navigate to `http://localhost:3000`.
3. Enable **Intercept is on** in Burp Proxy.
4. Trigger actions in the UI (e.g. login, checkout, search, review, profile update) to inspect and modify parameters.

---

## 🏛️ Academic Submission Details

* **University**: Nirma University
* **Course**: 3CS204ME24 — Ethical Hacking and Vulnerability Assessment
* **Practical**: 7 (Develop a Web Application and Perform OWASP Attacks)
* **Scope**: Authorized local/isolated lab environment only.
