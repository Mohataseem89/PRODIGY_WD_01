
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // Elements with custom origins and delays
  const revealElements = [
    { selector: ".section__container h3", options: {} },
    { selector: ".section__container h1", options: { origin: "left", delay: 500 } },
    { selector: ".section__container h2", options: { origin: "right", delay: 1000 } },
    { selector: ".section__container button", options: { delay: 1500 } },
    { selector: ".nav__links li", options: { origin: "top", interval: 300, delay: 2000 } },
  ];
  
  // Apply ScrollReveal to each element
  revealElements.forEach(({ selector, options }) => {
    ScrollReveal().reveal(selector, { ...scrollRevealOption, ...options });
  });
  
  // Separate reveal for socials
  ScrollReveal().reveal(".socials a", {
    duration: 1000,
    interval: 500,
    delay: 2000,
  });
  