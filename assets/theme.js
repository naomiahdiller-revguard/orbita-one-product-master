document.documentElement.classList.remove('no-js');
document.addEventListener('DOMContentLoaded',()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduced&&'IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));}else{document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));}
  document.querySelectorAll('[data-gallery-thumb]').forEach(btn=>btn.addEventListener('click',()=>{const gallery=btn.closest('[data-gallery]'),main=gallery?.querySelector('[data-gallery-main]');if(!main)return;main.src=btn.dataset.src;main.srcset='';gallery.querySelectorAll('[data-gallery-thumb]').forEach(x=>x.classList.remove('is-active'));btn.classList.add('is-active');}));
  document.querySelectorAll('[data-video-sound]').forEach(btn=>btn.addEventListener('click',()=>{const v=btn.closest('.media-frame')?.querySelector('video');if(!v)return;v.muted=!v.muted;btn.textContent=v.muted?'Turn sound on':'Turn sound off';}));
  document.querySelectorAll('[data-scroll-buy]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector('[data-buy-box]')?.scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'})));
  const atc=document.querySelector('[data-main-atc]'),sticky=document.querySelector('[data-sticky-atc]');if(atc&&sticky){new IntersectionObserver(([e])=>sticky.classList.toggle('is-active',!e.isIntersecting),{threshold:0}).observe(atc);sticky.querySelector('button')?.addEventListener('click',()=>atc.click());}
  document.querySelector('[data-menu-toggle]')?.addEventListener('click',()=>document.querySelector('[data-mobile-nav]')?.classList.toggle('is-open'));
});
