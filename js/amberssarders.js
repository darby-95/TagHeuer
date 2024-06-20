let list = document.querySelectorAll(".gallery .gallery__item")

gsap.to(list, {
    xPercent: -100 * (list.length),
    ease: "none",
    scrollTrigger: {
      trigger: ".maison-ambassadors",
      start: "top top",
      scrub: 1,
      end: "+=300%",
      pin: true
    }
})

gsap.to("[data-scroll]", {
    rotateY: (i, el) => (el.getAttribute("data-scroll") - 1) * 230,
    ease: "none",
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 20",
      end: "max",
      duration: 2,
      scrub: 2
    }
})