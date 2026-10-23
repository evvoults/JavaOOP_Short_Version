'use strict';
(() => {
  if (window.JavaOOPPageState) return;

  // Embedded lessons share the lifetime of their open parent page.
  // A separate tab or a fresh document gets its own empty state.
  try {
    if (window.parent !== window && window.parent.JavaOOPPageState) {
      window.JavaOOPPageState = window.parent.JavaOOPPageState;
      return;
    }
  } catch { /* A different-origin parent cannot share this page's state. */ }

  const values = new Map();
  window.JavaOOPPageState = Object.freeze({
    get(key, fallback) {
      return values.has(key) ? values.get(key) : fallback;
    },
    set(key, value) {
      values.set(key, value);
      return true;
    }
  });

  // History may restore a closed document from the browser's back/forward cache.
  // Treat that return as a new visit, while keeping hash navigation intact.
  window.addEventListener('pageshow', event => {
    if (event.persisted) window.location.reload();
  });
})();
