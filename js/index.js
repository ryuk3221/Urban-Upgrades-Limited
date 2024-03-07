const tl = gsap.timeline();


//header and navbar-items
tl.fromTo('.navbar', 
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  },
  0
).from('.navbar-item', {
  y: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15
});




//header content
tl.fromTo('.mi-text', 
  {
    x: -200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 0.3
  },
  0
);

tl.fromTo('.top-btn1',
  {
    delay: 1.3,
    duration: 5,
    y: 70,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1
  }
);

tl.fromTo('.top-btn2',
  {
    delay: 1.8,
    duration: 5,
    y: 70,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1
  }
);


//scroll animations

//header-content
gsap.to('.mi-text', 
  {
    scrollTrigger: {
      trigger: '.main-info',
      start: 'top top',
      scrub: true,
    },
    y: 250,
    scale: 0.7,  
  }
);


//services
gsap.from('.ms-text', 
  {
    scrollTrigger: {
      trigger: '.main-services',
      start: '-30% center',
      end: '20% center',
      scrub: true,
    },
    y: 100,
    opacity: 0,
  }
);

//services-items
gsap.from('.ms-item1', 
  {
    scrollTrigger: {
      trigger: '.main-services',
      start: 'top center',
      end: '60% center',
      scrub: true
    },
    y: 200,
    opacity: 0,
    stagger: 0.06
  }
);


//list
gsap.from('.msn-list1', 
  {
    scrollTrigger: {
      trigger: '.main-services',
      start: '40% center',
      end: '90% center',
      scrub: true,
    },
    y: 200,
    opacity: 0,
    stagger: 0.1
  }
);

//about1
gsap.from('.ma-text1', 
  {
    scrollTrigger: {
      trigger: '.main-about',
      start: '-30% center',
      end: '80% center',
      scrub: true,
    },
    x: -200,
    opacity: 0,

  }
);

//promo
gsap.from('.promo-text', 
  {
    scrollTrigger: {
      trigger: '.promo',
      start: '-30% center',
      end: '60% center',
      scrub: true,
    },
    y: 200,
    opacity: 0,

  }
);

//about2
gsap.from('.ma-text2', 
  {
    scrollTrigger: {
      trigger: '.ab1',
      start: '-15% center',
      end: '60% center',
      scrub: true,
    },
    x: 300,
    opacity: 0,
  }
);

//about-items
gsap.from('.inf-item1', 
  {
    scrollTrigger: {
      trigger: '.ab1',
      start: '50% center',
      scrub: true,
    },
    y: 250,
    opacity: 0,
    stagger: 0.05
  }
);

//info-item1
gsap.from('.info-item1', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '-15% center',
      end: "+=500px",
      scrub: true,
    },
    y: 200,
    opacity: 0,
  }
);

//info-items2
gsap.from('.info-item2', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '0% center',
      end: "+=500px",
      scrub: true,
    },
    y: 200,
    opacity: 0,
  }
);

//msn-list2
gsap.from('.msn-list2', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '20% center',
      end: '+=300px',
      scrub: true 
    },
    y: 250,
    opacity: 0,
  }
);

//info subtitle
gsap.from('.info__subtitle', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '37% center',
      end: '+=200px',
      scrub: true,
    },
    y: 250,
    opacity: 0,
  }
);

//info itle
gsap.from('.info__title', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '41% center',
      end: '+=200px',
      scrub: true,
    },
    y: 250,
    opacity: 0,
  }
);

//info text
gsap.from('.info__text', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '45% center',
      end: '+=200px',
      scrub: true,
    },
    y: 250,
    opacity: 0,
  }
);

//info list
gsap.from('.inf-item2', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '40% center',
      end: '+=500px',
      scrub: true,
    },
    y: 100,
    opacity: 0,
    stagger: 0.25
  }
);


//ms-text__subtitle
gsap.from('.ms-text__subtitle', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '70% center',
      end: '+=200px',
      scrub: true
    },
    y: 150,
    opacity: 0,
  }
);

//ms-text__title
gsap.from('.ms-text__title', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '72% center',
      end: '+=300px',
      scrub: true
    },
    y: 150,
    opacity: 0,
  }
);

//
gsap.from('.ms-item3', 
  {
    scrollTrigger: {
      trigger: '.info',
      start: '60% center',
      end: '+=400px',
      scrub: true
    },
    y: 100,
    opacity: 0,
    stagger: 0.3
  }
);

//
gsap.from('.s-text__text-item', 
  {
    scrollTrigger: {
      trigger: '.serv',
      start: '-20% center',
      end: '+=500px',
      scrub: true
    },
    y: 100,
    opacity: 0,
    stagger: 0.3
  }
);

//
gsap.from('.inf-item-one', 
  {
    scrollTrigger: {
      trigger: '.serv',
      start: '30% center',
      end: '+=700px',
      scrub: true
    },
    y: 100,
    opacity: 0,
    stagger: 0.3
  }
);

//
gsap.from('.msit1', 
  {
    scrollTrigger: {
      trigger: '.ms-list1',
      start: '-10% center',
      end: '+=400px',
      scrub: true
    },
    y: 150,
    opacity: 0,
    stagger: 0.3
  }
);

//
gsap.from('.sk-text__item', 
  {
    scrollTrigger: {
      trigger: '.skills',
      start: '-40% center',
      end: '+=400px',
      scrub: true
    },
    x: -150,
    opacity: 0,
    stagger: 0.3
  }
);


gsap.from('.sk-item', 
  {
    scrollTrigger: {
      trigger: '.skills',
      start: '-40% center',
      end: '+=400px',
      scrub: true
    },
    x: 150,
    opacity: 0,
    stagger: 0.15
  }
);