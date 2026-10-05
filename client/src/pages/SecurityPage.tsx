import React from 'react';
import { Shield, Lock, Terminal, ArrowRight, CheckCircle2, AlertTriangle, ExternalLink, Cpu } from 'lucide-react';

interface SecurityPageProps {
  onNavigate: (path: string) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate }) => {
  const vulnerabilities = [
    {
      id: '01',
      title: 'SQL Injection (SQLi)',
      route: 'POST /login',
      uiPath: '/login',
      desc: 'Unsanitized user credentials are used in authentication logic. An authentication bypass payload triggers unconditional truth.',
      payload: "' or 1=1--",
      mitigation: 'Implement parameterized SQL queries / prepared statements with strict input type checking.',
    },
    {
      id: '02',
      title: 'Reflected Cross-Site Scripting (XSS)',
      route: 'GET /search?q=',
      uiPath: '/search',
      desc: 'Search query parameter is reflected back into the DOM response without contextual HTML character encoding.',
      payload: "<img src=x onerror=alert('Reflected-XSS')>",
      mitigation: 'Context-aware output encoding (e.g. DOM textContent or HTML escaping) and Content Security Policy (CSP).',
    },
    {
      id: '03',
      title: 'Stored Cross-Site Scripting (XSS)',
      route: 'POST /product/:id/review',
      uiPath: '/product/101',
      desc: 'Product evaluations submitted by users are persisted in the reviews store and rendered unescaped to other viewers.',
      payload: "<b style='color:#b7ff6a'>[Verified Tester]</b> <i>Stored Review</i>",
      mitigation: 'HTML sanitization with DOMPurify, server-side entity encoding, and strict CSP.',
    },
    {
      id: '04',
      title: 'Insecure Direct Object References (IDOR)',
      route: 'GET /order/:id',
      uiPath: '/order/1001',
      desc: 'The server retrieves order invoices based solely on the client-supplied ID without verifying ownership against session context.',
      payload: 'Modify order ID to #1001 or #1002 in URL or Burp Suite',
      mitigation: 'Enforce object-level access control: check req.user.id === order.userId on every request.',
    },
    {
      id: '05',
      title: 'Broken Access Control',
      route: 'GET /admin',
      uiPath: '/admin',
      desc: 'Administrative operations console is accessible without server-side role validation, disclosing full user records.',
      payload: 'Access /admin while signed in as student or unauthenticated',
      mitigation: 'Server-side RBAC middleware ensuring req.user.role === "admin".',
    },
    {
      id: '06',
      title: 'Cross-Site Request Forgery (CSRF)',
      route: 'POST /profile/email',
      uiPath: '/profile',
      desc: 'State-changing profile updates lack anti-CSRF synchronizer tokens, enabling unauthorized cross-origin requests.',
      payload: 'HTML form submission from external domain to /profile/email',
      mitigation: 'Anti-CSRF synchronizer tokens, SameSite=Lax/Strict cookie attributes, and Origin header verification.',
    },
    {
      id: '07',
      title: 'Unrestricted File Upload',
      route: 'POST /profile/upload',
      uiPath: '/profile/upload',
      desc: 'Avatar endpoint accepts arbitrary MIME types and file extensions without validation or quarantine.',
      payload: 'Upload non-image scripts or executables via multipart form',
      mitigation: 'Allow-list file extension verification, MIME inspection, random filename hashing, and dedicated storage CDN.',
    },
    {
      id: '08',
      title: 'Parameter Tampering (Client Trust)',
      route: 'POST /checkout',
      uiPath: '/checkout',
      desc: 'Order total and product quantities are trusted directly from client request payload instead of server catalog pricing.',
      payload: 'Modify quantity or customTotal in POST request body',
      mitigation: 'Derive financial totals and inventory availability exclusively on the server.',
    },
    {
      id: '09',
      title: 'Weak Authentication / Lack of Rate Limiting',
      route: 'POST /login',
      uiPath: '/login',
      desc: 'Login endpoint applies no throttling, lockouts, or rate limits for consecutive failed authentication attempts.',
      payload: 'Burp Suite Intruder credential brute-forcing',
      mitigation: 'IP and username rate-limiting (e.g. express-rate-limit), exponential backoff, and MFA.',
    },
    {
      id: '10',
      title: 'Insecure Session Cookie Configuration',
      route: 'Set-Cookie: vulnshop_session',
      uiPath: '/login',
      desc: 'Session identifier token uses short entropy and lacks strict Secure/SameSite flags in HTTP lab demo mode.',
      payload: 'Inspect Cookie headers in browser devtools or proxy',
      mitigation: 'Issue cryptographically secure tokens with Secure, HttpOnly, SameSite=Strict, and server expiration.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-violet-cool font-bold">ETHICAL HACKING / PRACTICAL 7</span>
            <span className="h-px w-12 bg-surface-border" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary">
            VULNERABILITY MATRIX.
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
            VulnShop embeds 10 authentic OWASP vulnerabilities inside a legitimate technology commerce experience. All targets are designed for local security assessment and proxy interception with Burp Suite.
          </p>
        </div>
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-surface-border bg-surface-elevated shadow-2xl">
          <img
            src="/images/security-lab.svg"
            alt="Cybersecurity lab shield illustration"
            className="w-full h-56 sm:h-64 object-cover"
          />
        </div>
      </div>

      {/* Burp Suite Setup Instructions Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-4">
        <div className="flex items-center gap-3 text-lime-primary">
          <Terminal className="w-5 h-5" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest">
            BURP SUITE ASSESSMENT WORKFLOW
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-text-secondary">
          <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-1">
            <span className="text-text-primary font-bold">01. Proxy Setup</span>
            <p className="text-[11px] text-text-muted">Configure browser proxy to <code>127.0.0.1:8080</code> to capture traffic.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-1">
            <span className="text-text-primary font-bold">02. Intercept &amp; Modify</span>
            <p className="text-[11px] text-text-muted">Capture normal commerce requests, modify parameters, and observe response.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-1">
            <span className="text-text-primary font-bold">03. Dual Endpoints</span>
            <p className="text-[11px] text-text-muted">Compare vulnerable routes with secure <code>-secure</code> companion routes.</p>
          </div>
        </div>
      </div>

      {/* Vulnerabilities Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vulnerabilities.map(v => (
          <div
            key={v.id}
            className="p-6 rounded-3xl bg-surface border border-surface-border hover:border-surface-borderHover transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-lime-primary font-bold">
                  VECTOR / {v.id}
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-[10px] font-mono text-text-muted border border-surface-border">
                  {v.route}
                </span>
              </div>

              <h3 className="text-lg font-bold text-text-primary">{v.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{v.desc}</p>

              <div className="p-3 rounded-xl bg-surface-elevated border border-surface-border space-y-1 font-mono text-xs">
                <span className="text-amber-400 text-[10px] font-bold block">TEST DEMONSTRATION PAYLOAD:</span>
                <code className="text-text-primary text-[11px] break-all">{v.payload}</code>
              </div>

              <div className="pt-2 text-xs font-mono text-text-muted">
                <span className="text-emerald-400 font-bold block mb-0.5">REMEDIATION / FIX:</span>
                <span className="text-[11px] text-text-secondary leading-relaxed">{v.mitigation}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-border flex items-center justify-between">
              <button
                onClick={() => onNavigate(v.uiPath)}
                className="px-4 py-2 rounded-xl bg-lime-primary text-bg font-bold text-xs flex items-center gap-1.5 hover:bg-lime-secondary transition-all"
              >
                <span>Test in UI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[10px] font-mono text-text-muted">
                Route: {v.uiPath}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
