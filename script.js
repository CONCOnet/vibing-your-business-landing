(function () {
  // Hero entrance: trigger immediately
  document.querySelectorAll(".hero .reveal-up").forEach(function (el) {
    requestAnimationFrame(function () {
      el.classList.add("is-visible");
    });
  });

  // Scroll-triggered reveal for the rest (mimics framer-motion whileInView)
  var targets = document.querySelectorAll(".reveal-up:not(.is-visible)");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    targets.forEach(function (el) {
      io.observe(el);
    });
  } else {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Iubenda loader (matches the original useEffect behaviour)
  function loadIubenda() {
    var s = document.createElement("script");
    var tag = document.getElementsByTagName("script")[0];
    s.src = "https://cdn.iubenda.com/iubenda.js";
    if (tag && tag.parentNode) {
      tag.parentNode.insertBefore(s, tag);
    } else {
      document.head.appendChild(s);
    }
  }

  if (document.readyState === "complete") {
    loadIubenda();
  } else {
    window.addEventListener("load", loadIubenda, { once: true });
  }
})();
