// Password gate for the management edition (Vercel Routing Middleware).
// Shows a password-only page; the right password sets a cookie and opens the packet.
// No matcher: it runs on every request, so the page and every other file need the password.
// To change the password, edit PASSWORD and redeploy (changing it also signs everyone out).

const PASSWORD = 'OjosLocos2026';
const COOKIE = 'ol_mgmt_access';
const TOKEN = 'ol44m-' + '5e2a90c7f13d4b8e9a6c27d1f0b4e831' + '-' + PASSWORD.length; // value stored in the cookie, never the password
const MAX_AGE = 60 * 60 * 24 * 7; // stay signed in for 7 days
const LOGIN_PATH = '/__access';

function hasAccess(request) {
  const c = request.headers.get('cookie') || '';
  return c.split(';').some(p => p.trim() === COOKIE + '=' + TOKEN);
}

function safeNext(v) {
  return typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && !v.startsWith('/\\') && !v.startsWith(LOGIN_PATH) ? v : '/';
}

function page(error) {
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">
<title>Ojos Locos · CreditSwan</title>
<style>
*{box-sizing:border-box}html,body{height:100%}body{margin:0;background:#F4EFE6;color:#16211F;font-family:Manrope,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;display:flex;align-items:center;justify-content:center;padding:24px}
.box{width:100%;max-width:380px;border-top:3px solid #A98543;background:#fff;padding:34px 32px 30px;border-radius:0 0 6px 6px;box-shadow:0 1px 2px rgba(22,33,31,.06),0 12px 32px rgba(22,33,31,.08)}
.brand{display:flex;align-items:center;gap:10px;font-family:"Cormorant Garamond",Georgia,serif;font-size:24px;color:#1C4A45;margin-bottom:22px}
.brand svg{width:26px;height:24px}
.k{font-family:"IBM Plex Mono",ui-monospace,Menlo,monospace;font-size:10.5px;letter-spacing:1.5px;text-transform:uppercase;color:#1C4A45;margin:0 0 6px}
h1{font-family:"Cormorant Garamond",Georgia,serif;font-weight:500;font-size:26px;line-height:1.2;margin:0 0 22px}
label{display:block;font-size:13px;color:rgba(22,33,31,.78);margin-bottom:8px}
input{width:100%;font:inherit;font-size:16px;padding:12px 14px;border:1px solid rgba(22,33,31,.30);border-radius:4px;background:#fff;color:#16211F}
input:focus{outline:2px solid #A98543;outline-offset:1px;border-color:#A98543}
button{margin-top:16px;width:100%;font:inherit;font-size:15px;font-weight:600;padding:12px;border:0;border-radius:4px;background:#1C4A45;color:#F4EFE6;cursor:pointer}
button:hover{background:#163c38}
.err{margin:12px 0 0;font-size:13px;color:#5C2B2E}
.foot{margin-top:22px;font-family:"IBM Plex Mono",ui-monospace,Menlo,monospace;font-size:10.5px;letter-spacing:.8px;color:rgba(22,33,31,.55);text-transform:uppercase}
</style></head><body>
<form class="box" method="post" action="${LOGIN_PATH}" autocomplete="off">
<div class="brand"><svg viewBox="7 12.6 26 23" fill="none" aria-hidden="true"><path d="M8 30c0-9 6-16 15-16 4 0 7 1 9 4-2-1-4-1-6 0 3 0 5 2 6 5-4-2-8-1-11 2-3 3-8 4-13 5z" fill="currentColor"/><circle cx="30.5" cy="15.5" r="1.4" fill="#A98543"/></svg>CreditSwan</div>
<p class="k">Confidential · Management edition</p>
<h1>Ojos Locos: growing sales and EBITDA</h1>
<label for="pw">Password</label>
<input id="pw" name="password" type="password" required autofocus>
<input type="hidden" name="next" id="next" value="/">
<button type="submit">Open the packet</button>
${error ? '<p class="err" role="alert">That password is not right. Please try again.</p>' : ''}
<p class="foot">Draft · not for further distribution</p>
</form>
<script>document.getElementById('next').value=location.pathname.indexOf('${LOGIN_PATH}')===0?'/'+location.hash:location.pathname+location.search+location.hash;</script>
</body></html>`;
  return new Response(html, {
    status: 401,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

export default async function middleware(request) {
  const url = new URL(request.url);

  if (url.pathname === LOGIN_PATH && request.method === 'POST') {
    let pw = '', next = '/';
    try {
      const form = await request.formData();
      pw = String(form.get('password') || '');
      next = String(form.get('next') || '/');
    } catch (e) { /* fall through to the error page */ }
    if (pw === PASSWORD) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: safeNext(next),
          'Set-Cookie': `${COOKIE}=${TOKEN}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
          'Cache-Control': 'no-store',
        },
      });
    }
    return page(true);
  }

  if (hasAccess(request)) {
    if (url.pathname === LOGIN_PATH) return Response.redirect(new URL('/', request.url), 303);
    return; // continue to the packet
  }
  return page(false);
}
