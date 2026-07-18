const D=document,R=D.documentElement,B=D.getElementById('lang'),V=[...D.querySelectorAll('.hero-video')];
B?.addEventListener('click',()=>{let a=R.lang!='ar';R.lang=a?'ar':'en';R.dir=a?'rtl':'ltr';D.body.classList.toggle('ar',a);D.querySelectorAll('[data-en]').forEach(e=>e.textContent=a?e.dataset.ar:e.dataset.en);D.querySelectorAll('[data-ph-en]').forEach(e=>e.placeholder=a?e.dataset.phAr:e.dataset.phEn);B.textContent=a?'EN':'AR'});
if(V[0]){let q=V[0].querySelector('source');q.src='https://www.pexels.com/download/video/31352808/';V[0].load();V[0].muted=V[0].loop=V[0].playsInline=true;V[0].classList.add('active');V[0].play().catch(()=>{})}if(V[1])V[1].remove();
let O=new IntersectionObserver(x=>x.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');O.unobserve(e.target)}}),{threshold:.12});D.querySelectorAll('.reveal').forEach(e=>O.observe(e));
D.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{D.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');D.querySelectorAll('.equipment-card').forEach(c=>c.classList.toggle('hide',b.dataset.filter!='all'&&c.dataset.cat!=b.dataset.filter))});
let f=D.querySelector('footer .wrap');if(f){let a=D.createElement('a');a.href='admin.html';a.textContent='Admin';a.style.cssText='color:#fff;text-decoration:none;border:1px solid #ffffff55;padding:8px 14px;font-size:12px;font-weight:700;border-radius:8px';f.appendChild(a)}
let l=D.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&display=swap';D.head.appendChild(l);
let mark=D.querySelector('.brand-mark');if(mark){mark.classList.add('sac-logo-mark');mark.innerHTML=`<svg viewBox="0 0 420 320" role="img" aria-label="SAC Logistics"><defs><linearGradient id="sacThemeGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--b,#13c4e2)"/><stop offset="1" stop-color="var(--a,#c5df31)"/></linearGradient></defs><g class="sac-logo-piece sac-logo-top"><path fill="url(#sacThemeGradient)" d="M24 103 132 12h264l-75 58H158l-33 31 119 27-71 61z"/></g><g class="sac-logo-piece sac-logo-bottom"><path fill="url(#sacThemeGradient)" d="m296 126 82 18-194 164-41-45z"/></g></svg>`}
let s=D.createElement('style');s.textContent=`
.ar{font-family:Alexandria,Arial,sans-serif}.ar h1,.ar h2,.ar h3{font-family:Alexandria,Arial,sans-serif;font-weight:700;line-height:1.22;letter-spacing:-.8px!important}.ar p,.ar a,.ar button,.ar input,.ar textarea,.ar select,.ar span{font-family:Alexandria,Arial,sans-serif}
.video-stack,.hero-video{position:absolute!important;inset:0!important;width:100%!important;height:100%!important}.hero-video{object-fit:cover!important;opacity:.72!important}
#services,#partners{background:#fff!important;max-width:none!important;width:100%!important;padding-left:max(20px,calc((100% - 1220px)/2))!important;padding-right:max(20px,calc((100% - 1220px)/2))!important}
#services .equipment-grid,#partners .equipment-grid{background:#fff!important;gap:16px!important}
#services .equipment-card,#partners .equipment-card{border:1px solid #e3e9ed!important}
.hero-content{padding-top:10vh!important;transform:translateY(-22px)}
.hero h1{font-size:clamp(46px,6.2vw,88px)!important;line-height:.98!important;max-width:940px!important;margin:18px 0 18px!important}
.hero-content p{font-size:16px!important;line-height:1.6!important;max-width:720px!important}
.hero-actions{margin-top:22px!important}
.ar .hero-content{padding-top:10vh!important;transform:translateY(-18px)}
.ar .hero h1{font-size:clamp(44px,5.8vw,82px)!important;line-height:1.18!important;max-width:980px!important;margin:18px 0 18px!important}
.ar .hero-content p{font-size:17px!important;line-height:1.65!important;max-width:780px!important}
.ar .hero-actions{margin-top:24px!important}
.sac-logo-mark{width:62px!important;height:54px!important;background:none!important;box-shadow:none!important;transform:none!important;display:grid!important;place-items:center!important;overflow:visible!important}
.sac-logo-mark svg{width:100%;height:100%;overflow:visible;filter:drop-shadow(0 10px 18px rgba(0,0,0,.22))}
.sac-logo-piece{transform-box:fill-box;transform-origin:center;transition:transform .45s cubic-bezier(.2,.8,.2,1),filter .45s ease}
.brand:hover .sac-logo-top{transform:translate(-4px,-3px) rotate(-2deg)}
.brand:hover .sac-logo-bottom{transform:translate(5px,4px) rotate(2deg)}
.brand:hover .sac-logo-piece{filter:brightness(1.12) saturate(1.08)}
.sac-logo-mark svg{animation:sacLogoIn .8s cubic-bezier(.2,.8,.2,1) both}
@keyframes sacLogoIn{from{opacity:0;transform:scale(.82) rotate(-5deg)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){.sac-logo-mark svg{animation:none}.sac-logo-piece{transition:none}.brand:hover .sac-logo-piece{transform:none}}
@media(max-width:960px){.hero-content{padding-top:9vh!important;transform:translateY(-14px)}.hero h1{font-size:54px!important;line-height:1.02!important}.hero-content p{font-size:15px!important}.ar .hero-content{padding-top:10vh!important;transform:translateY(-10px)}.ar .hero h1{font-size:54px!important}}
@media(max-width:600px){.sac-logo-mark{width:54px!important;height:46px!important}.hero{min-height:900px!important}.hero-content{padding-top:8vh!important;transform:none}.hero h1{font-size:38px!important;line-height:1.06!important;margin:12px 0!important;letter-spacing:-2px!important}.hero-content p{font-size:14px!important;line-height:1.55!important}.hero-actions{margin-top:16px!important}.ar .hero{min-height:920px!important}.ar .hero-content{padding-top:9vh!important;transform:none}.ar .hero h1{font-size:39px!important;line-height:1.25!important;margin:14px 0!important}.ar .hero-content p{font-size:15px!important;line-height:1.65!important}.ar .hero-actions{margin-top:18px!important}}
`;D.head.appendChild(s);