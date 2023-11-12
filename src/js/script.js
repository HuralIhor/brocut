const swiper = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  speed: 1300,
  effect: 'flip',
  slideToClickedSlide: true,
  autoplay: {
    delay: 2300,
  },
  breakpoints: {
    1024: {
      limitRotation: false,
      speed: 2300,
    },
  }
});

let allreadyCalled = false;

function init() {
  if (document.documentElement.clientWidth >= 1024) {
    allreadyCalled = true;
    if (allreadyCalled) {
      const swiper2 = new Swiper('.swiper1', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        effect: 'cube',
        speed: 2300,
        pagination: {
          el: '.swiper1 .swiper-pagination',
          clickable: true,
        },

      });
      swiper2.controller.control = swiper;
      swiper.controller.control = swiper2;

    }
  }
}
init()


let scrollpos = window.scrollY;
const promo = document.querySelector(".promo");
const header = document.querySelector("header");
const baner = document.querySelector(".baner");
const servicescroll = document.querySelector(".services .container .content");

const scrollChange = header.clientHeight / 2;
const scrollToscroll = promo.clientHeight + baner.clientHeight + scrollChange;

const add_class_on_scroll = (el, className) => el.classList.add(className);
const remove_class_on_scroll = (el, className) => el.classList.remove(className);

window.addEventListener('scroll', function () {
  if (document.documentElement.clientWidth >= 1024) {

    scrollpos = window.scrollY;
    if (scrollpos >= scrollChange) {
      add_class_on_scroll(header, 'fix')
    } else {
      remove_class_on_scroll(header, 'fix')
    }
  }
})

// const burger= document.querySelector('#durgerMenu');
// const menuItems = document.querySelectorAll('.ul.menu li');

// menuItem.forEach(item => {
//   item.addEventListener('click', () => {
//     burger.setAttribute('aria-expanded', this.getAttribute('aria-expanded') !== 'true')
//   })
// })


