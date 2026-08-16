let activeTabId = 'profile';
let isAnimating = false;

// 1. Logika Pergerakan Spotlight/Kursor
window.addEventListener('mousemove', (e) => {
  const glow = document.getElementById('glow-bg');
  if (glow) {
    glow.style.background = `radial-gradient(650px at ${e.clientX}px ${e.clientY}px, rgba(245, 158, 11, 0.2), transparent 70%)`;
  }
});

// 2. Animasi Masuk GSAP (In)
function animateIn(element) {
  const cards = element.querySelectorAll('.bento-card');
  return gsap.fromTo(cards, 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
  );
}

// 3. Tab Switching System
function switchTab(targetId, btnElement) {
  if (isAnimating || activeTabId === targetId) return;
  isAnimating = true;

  document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  const currentSlide = document.getElementById(activeTabId);
  const nextSlide = document.getElementById(targetId);

  // Animasi Keluar GSAP (Out)
  gsap.to(currentSlide.querySelectorAll('.bento-card'), {
    y: -30,
    opacity: 0,
    duration: 0.3,
    stagger: 0.04,
    ease: "power2.in",
    onComplete: () => {
      currentSlide.classList.remove('active');
      nextSlide.classList.add('active');

      // Animasi Masuk GSAP (In)
      const anim = animateIn(nextSlide);
      anim.eventCallback("onComplete", () => {
        activeTabId = targetId;
        isAnimating = false;
      });
    }
  });
}

// 4. Modal Sertifikat Preview
function openCert(imagePath, title) {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('cert-img');
  const modalTitle = document.getElementById('modal-title');

  modalImg.src = imagePath;
  modalTitle.textContent = title;
  modal.style.display = 'flex';

  gsap.fromTo('.modal-content', 
    { scale: 0.85, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.5)" }
  );
}

function closeCert() {
  gsap.to('.modal-content', {
    scale: 0.85,
    opacity: 0,
    duration: 0.2,
    onComplete: () => {
      document.getElementById('cert-modal').style.display = 'none';
    }
  });
}

// Inisialisasi Pertama Kali Load
window.addEventListener('DOMContentLoaded', () => {
  animateIn(document.getElementById('profile'));
});
