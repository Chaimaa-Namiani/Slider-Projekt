const swiper = new Swiper('.slider-wrapper', {
  slidesPerView: 5,
  loop: true,
  grabCursor: false,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    1024: { 
     slidesPerView: 6
    },
    768: { 
     slidesPerView: 3
    },
    480: { 
     slidesPerView: 2
    },
    320: { 
      slidesPerView: 1
     }
}
});