/* ==========================================================================
   Custom JS: Dark Mode, Progress Bar, Scroll-to-Top, Copy Code
   ========================================================================== */

(function () {
  'use strict';

  var html = document.documentElement;

  /* -------------------------------------------------------------------------
     1. DARK MODE — apply saved/system theme immediately (FOUC prevention
        already handled by inline script in <head>, but double-check here)
     ---------------------------------------------------------------------- */
  function getPreferredTheme() {
    var stored = localStorage.getItem('wz-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

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

    /* --- Masthead nav fix: keep site title visible on small screens --- */
    if (window.jQuery) {
      (function installGreedyNavFix($) {
        var $nav = (window.$nav && window.$nav.length) ? window.$nav : $('#site-nav');
        var $btn = (window.$btn && window.$btn.length) ? window.$btn : $('#site-nav button');
        var $vlinks = (window.$vlinks && window.$vlinks.length) ? window.$vlinks : $('#site-nav .visible-links');
        var $hlinks = (window.$hlinks && window.$hlinks.length) ? window.$hlinks : $('#site-nav .hidden-links');

        if (!$nav.length || !$btn.length || !$vlinks.length || !$hlinks.length) {
          return;
        }

        if (!Array.isArray(window.breaks)) {
          window.breaks = [];
        }

        function keepTitleVisible() {
          var $hiddenTitle = $hlinks.children('.masthead__menu-item--lg').first();
          if ($hiddenTitle.length) {
            $hiddenTitle.prependTo($vlinks);
          }
        }

        function moveLastNonTitleToHidden() {
          var $movable = $vlinks.children().not('.masthead__menu-item--lg');
          if (!$movable.length) {
            return false;
          }

          window.breaks.push($vlinks.width());
          $movable.last().prependTo($hlinks);
          return true;
        }

        function updateNavKeepingTitle() {
          // Reserve room for both right controls: dark-mode button + burger button.
          var controlsReserve = 88;
          var availableSpace = $btn.hasClass('hidden')
            ? $nav.width() - controlsReserve
            : $nav.width() - $btn.outerWidth(true) - controlsReserve;

          keepTitleVisible();

          while ($vlinks.width() > availableSpace && $vlinks.children().length > 1) {
            if (!moveLastNonTitleToHidden()) {
              break;
            }

            if ($btn.hasClass('hidden')) {
              $btn.removeClass('hidden');
            }
          }

          while (window.breaks.length > 0 && availableSpace > window.breaks[window.breaks.length - 1]) {
            var $nextVisible = $hlinks.children().not('.masthead__menu-item--lg').first();
            if (!$nextVisible.length) {
              break;
            }

            $nextVisible.appendTo($vlinks);
            window.breaks.pop();
          }

          keepTitleVisible();

          if ($hlinks.children().length < 1) {
            $btn.addClass('hidden');
            $hlinks.addClass('hidden');
          } else {
            $btn.removeClass('hidden');
          }

          $btn.attr('count', $hlinks.children().length);

          if ($vlinks.width() > availableSpace && $vlinks.children().length > 1) {
            updateNavKeepingTitle();
          }
        }

        window.updateNav = updateNavKeepingTitle;
        updateNavKeepingTitle();
      })(window.jQuery);
    }

    /* --- Dark mode toggle button --- */
    var toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        var current = html.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });

      // Keyboard: Space / Enter already fire click on <button>, no extra handling needed
      toggleBtn.setAttribute('aria-pressed', html.getAttribute('data-theme') === 'dark' ? 'true' : 'false');

      // Keep aria-pressed in sync
      var observer = new MutationObserver(function () {
        toggleBtn.setAttribute('aria-pressed', html.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
      });
      observer.observe(html, { attributes: true, attributeFilter: ['data-theme'] });
    }

    /* --- Reading progress bar --- */
    var progressBar = document.getElementById('reading-progress');
    if (progressBar) {
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            var docH  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var pct   = docH > 0 ? (window.scrollY / docH) * 100 : 0;
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
        if (window.scrollY > 320) {
          scrollBtn.classList.add('visible');
        } else {
          scrollBtn.classList.remove('visible');
        }
      }, { passive: true });

      scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* --- Copy-code buttons (auto-inject onto every <pre> block) --- */
    var preBlocks = document.querySelectorAll('pre');
    preBlocks.forEach(function (pre) {
      // Wrap pre in a relative container
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
