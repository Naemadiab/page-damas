let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const titles = [
    'الغرفة تنظم لقاء "الفرص الاستثمارية 2026"',
    "اجتماع لبحث تطوير بيئة الأعمال",
    "ورشة عمل حول التحول الرقمي في التجارة"
];

const descriptions = [
    "لقاء متخصص لعرض أبرز الفرص الاستثمارية لعام 2026 بحضور نخبة من رجال الأعمال.",
    "اجتماع موسع لمناقشة سبل تحسين بيئة الأعمال ودعم المستثمرين.",
    "ورشة عمل تهدف لتعزيز التحول الرقمي وتطوير الخدمات التجارية."
];

function updateText(index) {
    document.getElementById("newsTitle").textContent = titles[index];
    document.getElementById("newsDesc").textContent = descriptions[index];
}

function changeSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    updateText(currentSlide);
}

// تشغيل تلقائي كل 4 ثوانٍ
setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    changeSlide(next);
}, 4000);







/* ============================================================
   PAGINATION
   ============================================================ */
document.querySelectorAll('.page-btn:not(.page-btn--nav):not(.page-btn--ellipsis)').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.page-btn--active').forEach(b => b.classList.remove('page-btn--active'));
    this.classList.add('page-btn--active');
  });
});

/* ============================================================
   CTA BUTTON
   ============================================================ */
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    ctaBtn.textContent = 'جارٍ التسجيل...';
    setTimeout(() => { ctaBtn.textContent = 'انضم إلى العضوية'; }, 2000);
  });
}












/* ============================================================
   COUNTER ANIMATION (Statistics)
   ============================================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const steps = 60;
  const inc = target / steps;
  let step = 0;

  el.textContent = '0';
  const timer = setInterval(() => {
    step++;
    const val = Math.min(Math.round(inc * step), target);
    el.textContent = val.toLocaleString('ar-EG');
    if (val >= target) clearInterval(timer);
  }, duration / steps);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => {
  statsObserver.observe(el);
});



 // Keyboard support
  document.addEventListener('keydown', e => {
    if (currentPage !== 'home') return;
    if (e.key === 'ArrowLeft')  { current = (current + 1) % cards.length; updateCarousel(); }
    if (e.key === 'ArrowRight') { current = (current - 1 + cards.length) % cards.length; updateCarousel(); }
  });

  window.addEventListener('resize', updateCarousel);

  // Auto advance every 5s
  setInterval(() => {
    if (currentPage !== 'home') return;
    current = (current + 1) % cards.length;
    updateCarousel();
  }, 5000);



  /* ============================================================
   NAVBAR SCROLL SHADOW
   ============================================================ */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 60
    ? '0 4px 20px rgba(0,0,0,.35)'
    : '';
});




let currentPage = 'home';

function showPage(name) {
  if (!pages[name]) return;
  Object.values(pages).forEach(p => p.classList.add('page--hidden'));
  pages[name].classList.remove('page--hidden');
  currentPage = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateNavActive(name);
}

function updateNavActive(name) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('nav-link--active');
    if (link.dataset.page === name) link.classList.add('nav-link--active');
  });
}

// Wire up nav links
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const pg = this.dataset.page;
    if (pg) showPage(pg);
  });
});

// Wire up page-link data attributes (news rows → article, etc.)
document.querySelectorAll('[data-page-link]').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const pg = this.dataset.pageLink;
    if (pg) showPage(pg);
  });
});

/* ============================================================
   HAMBURGER NAV TOGGLE
   ============================================================ */
const navToggler = document.getElementById('navToggler');
const navLinks   = document.getElementById('navLinks');

navToggler.addEventListener('click', () => {
  navLinks.classList.toggle('nav-links--open');
});




// Wire up page-link data attributes (news rows → article, etc.)
document.querySelectorAll('[data-page-link]').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const pg = this.dataset.pageLink;
    if (pg) showPage(pg);
  });
});
