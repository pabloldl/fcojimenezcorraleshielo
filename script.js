"use strict";

(() => {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reveals = [
    ...document.querySelectorAll("[data-reveal], [data-type-reveal]"),
  ];
  const photos = [...document.querySelectorAll("[data-drift]")];
  const hero = document.querySelector(".hero");
  let observer;
  let frame = 0;
  let running = false;
  const inView = new Set();

  function updatePhotos() {
    frame = 0;
    if (motion.matches || document.hidden) return;
    inView.forEach((photo) => {
      const bounds = photo.parentElement.getBoundingClientRect();
      const progress =
        (bounds.top + bounds.height / 2 - window.innerHeight / 2) /
        (window.innerHeight + bounds.height);
      // The image's overscan covers the frame throughout the 14 px of travel.
      photo.style.transform = `translate3d(0, ${Math.max(-14, Math.min(14, progress * -36))}px, 0) scale(1.09)`;
    });
  }

  function requestUpdate() {
    if (!frame && running) frame = window.requestAnimationFrame(updatePhotos);
  }

  function configureMotion() {
    if (observer) observer.disconnect();
    inView.clear();
    window.cancelAnimationFrame(frame);
    frame = 0;
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
    hero.classList.remove("is-intro");
    reveals.forEach((element) => element.classList.remove("is-waiting"));
    photos.forEach((photo) => photo.style.removeProperty("transform"));
    running = !motion.matches && "IntersectionObserver" in window;
    if (!running) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.matches("[data-drift]")) {
            if (entry.isIntersecting) inView.add(entry.target);
            else inView.delete(entry.target);
            requestUpdate();
          } else if (entry.isIntersecting) {
            entry.target.classList.remove("is-waiting");
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    reveals.forEach((element) => {
      // Restored scroll positions and already visible content remain readable.
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("is-waiting");
        observer.observe(element);
      }
    });
    photos.forEach((photo) => observer.observe(photo));
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    if (window.scrollY < 100) hero.classList.add("is-intro");
    requestUpdate();
  }

  configureMotion();
  if (motion.addEventListener)
    motion.addEventListener("change", configureMotion);
  else motion.addListener(configureMotion);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) requestUpdate();
  });
})();
