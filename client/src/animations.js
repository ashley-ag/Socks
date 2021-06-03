export const pageAnimation = {
  //hidden is the initial start of the animation
  hidden: {
    opacity: 0,
  },
  //Show is what the end of the animation will be
  show: {
    opacity: 1,

    transition: {
      duration: 1,
      //Adding then when will cause this to animate before any children elements, then those children elements will animate
      when: "beforeChildren",
      // the duration between each delayed children
      staggerChildren: 0.25,
    },
  },
  //Exit settings activate when leaving a component, such as going to a new page
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const slide = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: { duration: 1 },
  },
};
