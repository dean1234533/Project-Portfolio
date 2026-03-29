 // ── Nav scroll effect ──
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
 
    // ── Burger menu ──
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    function closeMobile() {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
 
    // ── Scroll reveal ──
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
 
    // ── Image slider ──
    const sliderState = {};
    function slide(id, dir) {
      const container = document.getElementById(id);
      const track = container.querySelector('.img-slider-track');
      const imgs = track.querySelectorAll('img');
      if (!sliderState[id]) sliderState[id] = 0;
      sliderState[id] = (sliderState[id] + dir + imgs.length) % imgs.length;
      track.style.transform = `translateX(-${sliderState[id] * 100}%)`;
    }