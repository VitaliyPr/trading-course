export function Sliders() {
  // Звичайний слайдер
  if (document.querySelector('[data-]')) {
    const _sl = new Swiper('[data-]', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 25,
        }
      }
    });
  };

  // Слайдер з цифрами на початку 0
  if (document.querySelector("[data-]")) {
    const _sl = new Swiper("[data-]", {
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: "[data-] .slider-nav__arrow--next",
        prevEl: "[data-gallery] .slider-nav__arrow--prev",
      },
      pagination: {
        el: "[data-] .slider-nav__pag",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return ("0" + number).slice(-2);
        },
        formatFractionTotal: function (number) {
          return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + " / " + '<span class="' + totalClass + '"></span>';
        },
      },
    });
  }
}