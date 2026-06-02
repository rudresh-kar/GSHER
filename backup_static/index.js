document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // Mobile Navigation Toggle
  // ==========================================
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navbar.classList.toggle('menu-open');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('menu-open');
        navLinks.classList.remove('active');
      });
    });
  }

  // ==========================================
  // Hero Slideshow
  // ==========================================
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  let slideInterval;
  const slideDuration = 6000; // 6 seconds per slide

  function showSlide(index) {
    // Reset active states
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Set new active slide and dot with safety check
    if (slides[index]) {
      slides[index].classList.add('active');
    }
    if (dots[index]) {
      dots[index].classList.add('active');
    }
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startSlideshow() {
    stopSlideshow();
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopSlideshow() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
  }

  // Arrow navigation click handlers
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startSlideshow(); // Reset auto-slideshow timer
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startSlideshow(); // Reset auto-slideshow timer
    });
  }

  // Dot manual navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startSlideshow(); // Reset timer on manual click
    });
  });

  // Mobile Touch Swipe Gestures
  const heroSection = document.getElementById('home');
  if (heroSection) {
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50; // min distance in px
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swiped left -> next slide
          nextSlide();
        } else {
          // Swiped right -> prev slide
          prevSlide();
        }
        startSlideshow(); // Reset timer
      }
    }
  }

  // Initialize Slideshow
  if (slides.length > 0) {
    startSlideshow();
  }

  // ==========================================
  // Stats Animation & Progress Bar
  // ==========================================
  const statsSection = document.getElementById('crisis');
  const animatedStat = document.getElementById('animated-stat');
  const gaugeFill = document.getElementById('gauge-fill');
  let animated = false;

  function animateStats() {
    if (animated) return;
    animated = true;

    // Animate percentage text count-up (e.g. 0.000% to 0.001%)
    let currentPct = 0;
    const targetPct = 0.001;
    const duration = 2000; // 2 seconds
    const steps = 100;
    const stepTime = duration / steps;
    const increment = targetPct / steps;

    const counterInterval = setInterval(() => {
      currentPct += increment;
      if (currentPct >= targetPct) {
        currentPct = targetPct;
        clearInterval(counterInterval);
      }
      // Format to 3 decimal places
      animatedStat.textContent = currentPct.toFixed(3) + '%';
    }, stepTime);

    // Animate progress bar fill
    // 10 hours out of 8760 is ~0.11%, but we render a small sliver (e.g. 1.5%) for visual visibility
    setTimeout(() => {
      if (gaugeFill) {
        gaugeFill.style.width = '2.5%';
      }
    }, 100);
  }
  // Use Intersection Observer for stats scroll trigger
  if (statsSection && animatedStat) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of section is visible
    });

    observer.observe(statsSection);
  }

  // ==========================================
  // Section 4: Venn Diagram Circle Selection
  // ==========================================
  const circleNodes = document.querySelectorAll('.circle-node');
  const detailsPanels = document.querySelectorAll('.details-panel');

  if (circleNodes.length > 0 && detailsPanels.length > 0) {
    function activatePanel(targetName) {
      // Deactivate all circles and panels
      circleNodes.forEach(node => node.classList.remove('active-focus'));
      detailsPanels.forEach(panel => panel.classList.remove('active'));

      // Activate selected circle and matching panel
      const targetCircle = document.querySelector(`.circle-${targetName}`);
      const targetPanel = document.getElementById(`details-${targetName}`);
      
      if (targetCircle) targetCircle.classList.add('active-focus');
      if (targetPanel) targetPanel.classList.add('active');
    }

    circleNodes.forEach(node => {
      // Work on hover for desktop
      node.addEventListener('mouseenter', () => {
        const targetName = node.getAttribute('data-target');
        activatePanel(targetName);
      });

      // Also support click for mobile/touch devices
      node.addEventListener('click', () => {
        const targetName = node.getAttribute('data-target');
        activatePanel(targetName);
      });
    });
  }

  // ==========================================
  // Section 6: Dialogue Interview Modal Toggle
  // ==========================================
  const openModalBtn = document.getElementById('open-interview');
  const closeModalBtn = document.getElementById('close-interview');
  const interviewModal = document.getElementById('interview-modal');

  if (openModalBtn && closeModalBtn && interviewModal) {
    // Open Modal
    openModalBtn.addEventListener('click', () => {
      interviewModal.classList.add('show');
      interviewModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Disable background scrolling
    });

    // Close Modal
    function closeModal() {
      interviewModal.classList.remove('show');
      interviewModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Restore background scrolling
    }

    closeModalBtn.addEventListener('click', closeModal);

    // Close on clicking the dark overlay
    interviewModal.addEventListener('click', (event) => {
      if (event.target === interviewModal) {
        closeModal();
      }
    });

    // Close on ESC key press
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && interviewModal.classList.contains('show')) {
        closeModal();
      }
    });
  }

  // ==========================================
  // Section 9: Video Grid Thumbnail Trigger
  // ==========================================
  const videoContainers = document.querySelectorAll('.video-thumbnail-container');
  videoContainers.forEach(container => {
    container.addEventListener('click', () => {
      const videoId = container.getAttribute('data-video-id');
      if (videoId) {
        container.innerHTML = `
          <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0" 
            title="Perfect Health Secrets Video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;">
          </iframe>
        `;
      }
    });
  });
});
