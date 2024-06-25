$('.related-projects-slider').owlCarousel({
  center: true,
  margin: 30,
  dots: true,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1.5,
    },
  }
});