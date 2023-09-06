import gsap from "gsap";

export const animations = {
  fadeOut: (element) => {
    gsap.to(element, {
      background: "red",
      scale: 0,
      opacity: "0",
      stagger: 1
    });
  },

  fadeIn: (element) => {
    gsap.to(element, {
      background: "blue",
      scale: 1,
      opacity: 0.5,
      stagger: 1.5,
      duration: 1
    });
  },

  scaleIn: (element) => {
    gsap.to(element, {
      scale: 1,
      stagger: 1,
      duration: 2
    });
  },

  scaleOut: (element) => {
    gsap.to(element, {
      scale: 0,
      stagger: 1,
      duration: 2
    });
  }
};
