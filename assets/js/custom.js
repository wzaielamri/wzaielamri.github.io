/* ==========================================================================
   Custom JS: Dark Mode, Progress Bar, Scroll-to-Top, Copy Code,
              Active Nav, Scroll Reveal, Topic Badges
   ========================================================================== */

(function () {
  'use strict';

  var html = document.documentElement;

  /* -------------------------------------------------------------------------
     1. DARK MODE
     ---------------------------------------------------------------------- */
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('wz-theme', theme);
  }

  // Sync with system preference changes (e.g. OS switches at sunset)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('wz-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* -------------------------------------------------------------------------
     2. DOM-READY SETUP
     ---------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {

    /* --- Dark mode toggle button --- */
    var toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        var current = html.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });

      toggleBtn.setAttribute('aria-pressed', html.getAttribute('data-theme') === 'dark' ? 'true' : 'false');

      var dmObserver = new MutationObserver(function () {
        toggleBtn.setAttribute('aria-pressed', html.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
      });
      dmObserver.observe(html, { attributes: true, attributeFilter: ['data-theme'] });
    }

    /* --- Reading progress bar --- */
    var progressBar = document.getElementById('reading-progress');
    if (progressBar) {
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            var docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var pct  = docH > 0 ? (window.scrollY / docH) * 100 : 0;
            progressBar.style.width = Math.min(pct, 100) + '%';
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }

    /* --- Scroll-to-top button --- */
    var scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
      window.addEventListener('scroll', function () {
        scrollBtn.classList.toggle('visible', window.scrollY > 320);
      }, { passive: true });

      scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* --- Active nav link --- */
    var navLinks = document.querySelectorAll('.greedy-nav .visible-links .masthead__menu-item a');
    var currentPath = window.location.pathname.replace(/\/$/, '');
    navLinks.forEach(function (link) {
      var linkPath = (link.getAttribute('href') || '').replace(/\/$/, '');
      if (linkPath && linkPath !== '' && currentPath === linkPath) {
        link.classList.add('nav-active');
      }
    });

    /* --- Scroll-reveal animations (IntersectionObserver) --- */
    if ('IntersectionObserver' in window) {
      var revealTargets = document.querySelectorAll(
        '.list__item, .page__content > h2, .page__content > p, .page__content > ul, .page__content > hr'
      );

      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('wz-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

      revealTargets.forEach(function (el, i) {
        el.classList.add('wz-reveal');
        // Stagger: cap at 5 items × 80 ms each
        el.style.transitionDelay = Math.min(i * 0.06, 0.3) + 's';
        revealObserver.observe(el);
      });
    }

    /* --- Publication topic badges --- */
    var topicEls = document.querySelectorAll('.pub__topics');
    topicEls.forEach(function (el) {
      var raw = el.textContent.trim();
      if (!raw) return;
      var topics = raw.split(',').map(function (t) {
        return t.trim().replace(/\.$/, '');
      }).filter(Boolean);
      el.innerHTML = topics.map(function (t) {
        return '<span class="topic-badge">' + t + '</span>';
      }).join('');
    });

    /* --- Copy-code buttons (auto-inject onto every <pre> block) --- */
    var preBlocks = document.querySelectorAll('pre');
    preBlocks.forEach(function (pre) {
      var wrapper = document.createElement('div');
      wrapper.className = 'code-copy-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      var btn = document.createElement('button');
      btn.className = 'copy-code-btn';
      btn.setAttribute('aria-label', 'Copy code to clipboard');
      btn.textContent = 'Copy';
      wrapper.appendChild(btn);

      btn.addEventListener('click', function () {
        var code = pre.querySelector('code');
        var text = code ? code.textContent : pre.textContent;

        var doFeedback = function () {
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        };

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(doFeedback).catch(function () {
            fallbackCopy(text, doFeedback);
          });
        } else {
          fallbackCopy(text, doFeedback);
        }
      });
    });

  }); // end DOMContentLoaded

  /* -------------------------------------------------------------------------
     3. HELPERS
     ---------------------------------------------------------------------- */
  function fallbackCopy(text, cb) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* silent */ }
    document.body.removeChild(ta);
    if (cb) cb();
  }

})();

