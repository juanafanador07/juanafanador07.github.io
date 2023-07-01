export default function loadAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const toggle = (elem) => {
          if (entry.isIntersecting) {
            elem.classList.replace("animation-hidden", "animation-show");
          }
        };

        if (entry.target.classList.contains("animation-delayed")) {
          for (const child of entry.target.children) {
            toggle(child);
          }
        } else {
          toggle(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const elements = document.querySelectorAll(".animation");
  elements.forEach((elem) => {
    if (!elem.classList.contains("animation-delayed")) {
      elem.classList.add("animation-hidden");
    } else {
      for (const child of elem.children) {
        child.classList.add("animation-hidden");
      }
    }
    observer.observe(elem);
  });

  const elementsDelay = document.querySelectorAll(".animation-delayed");

  elementsDelay.forEach((elem) => {
    let delay = 0;
    const classes = [];

    elem.classList.forEach((c) => {
      if (/^animation(?!-delayed)/.test(c)) {
        classes.push(c);
      }
    });

    for (const child of elem.children) {
      child.style.transitionDelay = delay + "ms";
      child.style.animationDelay = delay + "ms";
      delay += 200;
      child.classList.add(...classes);
    }

    elem.classList.remove(...classes);
  });
}
