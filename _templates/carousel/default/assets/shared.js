/* xFinance Carousel — shared runtime
   - Auto-scales the .slide to fit any viewport, letterbox style.
   - Reads slide dimensions from CSS vars --slide-w / --slide-h
     (default 1:1 = 1080×1080; override per-slide for other ratios).
   - Arrow keys / click left/right / tap halves go to prev/next slide.
   - Slide files are slide-01.html ... slide-NN.html.

   TOTAL SLIDES — đọc từ <meta name="total-slides" content="N"> trong mỗi slide HTML.
   Claude phải đặt đúng giá trị này khi generate. Fallback mặc định: 10.
   Ví dụ: <meta name="total-slides" content="12">  (cho 6 mục + các slide khung)
*/
(function(){
  // Đọc tổng số slide từ meta tag — không cần sửa file này khi thay đổi số slide
  const TOTAL = parseInt(
    document.querySelector('meta[name="total-slides"]')?.content
  ) || 10;
  function pad(n){return String(n).padStart(2,'0')}

  // Detect current slide from filename: slide-NN.html
  function currentIndex(){
    const m = location.pathname.match(/slide-(\d{2})\.html$/i);
    return m ? parseInt(m[1],10) : 0;
  }
  function go(n){
    if(n < 1 || n > TOTAL) return;
    location.href = 'slide-' + pad(n) + '.html';
  }
  // Expose TOTAL cho các script khác nếu cần
  window._carouselTotal = TOTAL;

  // ----- Scaling -----
  // Đọc kích thước từ CSS custom properties để hỗ trợ nhiều tỷ lệ
  function fit(){
    const slide = document.querySelector('.slide');
    if(!slide) return;
    const cs = getComputedStyle(document.documentElement);
    const sw = parseFloat(cs.getPropertyValue('--slide-w')) || 1080;
    const sh = parseFloat(cs.getPropertyValue('--slide-h')) || 1080;
    const vw = window.innerWidth, vh = window.innerHeight;
    const s = Math.min(vw / sw, vh / sh);
    slide.style.transform = 'scale(' + s + ')';
  }

  // Dùng requestAnimationFrame để đảm bảo browser đã tính xong viewport dimensions
  // trước khi áp scale — tránh flash unscaled và tránh scale sai ở một số trường hợp
  requestAnimationFrame(fit);

  // Re-fit sau khi font + ảnh load xong
  window.addEventListener('load', fit);

  // Re-fit mỗi khi resize hoặc zoom browser
  window.addEventListener('resize', fit);

  // ----- Navigation -----
  const idx = currentIndex();
  document.addEventListener('keydown', e => {
    if(e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); go(idx+1); }
    else if(e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(idx-1); }
    else if(e.key === 'Home') go(1);
    else if(e.key === 'End') go(TOTAL);
    else if(e.key === 'Escape') location.href = 'index.html';
  });
  // Click halves to navigate
  document.addEventListener('click', e => {
    if(e.target.closest('a,button,.no-nav')) return;
    const x = e.clientX, w = window.innerWidth;
    if(x < w*0.35) go(idx-1);
    else if(x > w*0.65) go(idx+1);
  });

  // ----- Inject progress bar width + counter -----
  // Dùng DOMContentLoaded chỉ cho progress/counter (không cần gọi fit() ở đây nữa)
  document.addEventListener('DOMContentLoaded', () => {
    const prog = document.querySelector('.s-foot .progress');
    if(prog) prog.style.setProperty('--p', (idx/TOTAL*100) + '%');
    const cnt = document.querySelector('.s-foot .count');
    if(cnt && !cnt.dataset.manual){
      cnt.innerHTML = '<b>' + pad(idx) + '</b> / ' + pad(TOTAL);
    }
  });
})();
