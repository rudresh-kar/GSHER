/**
 * CelluReva™ Site Interactions
 * ============================
 * - Navbar scroll effect (transparent → solid)
 * - Mobile menu toggle
 * - Smooth scroll to anchors
 * - IntersectionObserver for scroll-reveal animations
 * - Active nav link highlighting
 */

// ── Wait for DOM ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar Scroll Effect ──────────────────────
  const navbar = document.getElementById('navbar');

  const handleNavScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // Run on load

  // ── Mobile Menu Toggle ────────────────────────
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');

  const toggleMobileMenu = () => {
    if (!hamburger || !mobileMenu || !mobileOverlay) return;
    const isOpen = mobileMenu.classList.contains('open');

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  const closeMobileMenu = () => {
    if (!hamburger || !mobileMenu || !mobileOverlay) return;
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // ── Smooth Scroll to Anchors ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 10;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });

  // Also handle links with base path + hash (e.g., /GSHER/#protocol)
  document.querySelectorAll('a[href*="/#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href) return;

      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const hash = href.substring(hashIndex);
      const targetEl = document.querySelector(hash);

      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 10;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        closeMobileMenu();
      }
    });
  });

  // ── Scroll Reveal Animations ──────────────────
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show everything immediately
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // ── Active Nav Link Highlighting ──────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

  const highlightActiveLink = () => {
    const scrollY = window.scrollY;
    const navHeight = navbar ? navbar.offsetHeight : 0;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href') || '';
          if (href.includes(`#${sectionId}`)) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightActiveLink, { passive: true });

  // ── Marquee Duplicate for Seamless Loop ───────
  const marqueeTrack = document.getElementById('marquee-track');
  if (marqueeTrack) {
    // The content is already duplicated in the template via Astro
    // Just ensure animation runs smoothly
    marqueeTrack.addEventListener('mouseenter', () => {
      marqueeTrack.style.animationPlayState = 'paused';
    });
    marqueeTrack.addEventListener('mouseleave', () => {
      marqueeTrack.style.animationPlayState = 'running';
    });
  }

  // ── Protocol Tab Filtering ────────────────────
  const protocolTabs = document.querySelectorAll('.protocol-tab');
  const protocolCards = document.querySelectorAll('.protocol-card');

  if (protocolTabs.length > 0 && protocolCards.length > 0) {
    protocolTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.getAttribute('data-filter');

        // Update active tab
        protocolTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Filter cards
        protocolCards.forEach(card => {
          const category = card.getAttribute('data-category');
          const shouldShow = filter === 'all' || category === filter;

          if (shouldShow) {
            card.classList.remove('filtering-out');
            card.classList.add('filtering-in');
            card.style.position = '';
            card.style.visibility = '';
            card.style.display = '';
          } else {
            card.classList.remove('filtering-in');
            card.classList.add('filtering-out');
            // After transition, hide fully
            setTimeout(() => {
              if (card.classList.contains('filtering-out')) {
                card.style.display = 'none';
              }
            }, 350);
          }
        });
      });
    });
  }

  // ── Keyboard Accessibility ────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

});
