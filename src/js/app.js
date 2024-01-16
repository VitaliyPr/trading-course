import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
// flsFunctions.pageWidth();

//* Меню
/*
$(".openbtn").click(function () {
  if ($(window).width() < 767.98) {
    document.getElementById('menu').style.width = '100%';
  } else {
    document.getElementById('menu').style.width = '100vw';
  };
});

$(".closebtn").click(function () {
  document.getElementById('menu').style.width = '0';
});
*/

//* Locomotive Scroll (Розкоментувати якщо потрбібно)
/*
import LocomotiveScroll from 'locomotive-scroll';
import { LocomotiveScroll } from "./modules/locomotivescroll.js";
LocomotiveScroll();
*/

//* Swiper slider (Розкоментувати якщо потрбібно)
/*
import Swiper from 'swiper/bundle';
import { Sliders } from "./modules/sliders.js";
Sliders();
*/

//* Fancybox (Розкоментувати якщо потрбібно)
/*
import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {});
*/

//* Таби (Розкоментувати якщо потрбібно)
/*
import { Tabs } from "./modules/tabs.js";
Tabs();
*/


//* Marquee
/*
$('.marquee').marquee({
  startVisible: true
});
*/


//* Аккордеон
/*
if ($('.accordion').length) {
  $('.accordion').accordion({
    onChanging: function onChanging() {
      $(this).closest('.accordion').toggleClass('is-active');
    }
  });
  $('[data-accordion-close]').on('click', function (evt) {
    evt.preventDefault();
    $('.accordion').accordion('close', 0);
  });
};
*/

//* Form validator
/*
$( "#login_form" ).validate({
  errorElement: "span",
  rules: {
    login_email: {
      required: true,
      email: true,
    },
    login_password: {
      required: true,
      minlength: 6,
    }
  },
  messages: {
    login_email: {
      required: "Error text",
      email: "Error text",
    },
    login_password: {
      required: "Error text",
      minlength: "Error text",
    }
  }
});
*/

//* Маска телефону
/*
$("input[type=phone]").inputmask({"mask": "+38 (999) 999-99-99"});
*/