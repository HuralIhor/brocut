const swiper = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  speed: 500,
  effect: 'cube',
  // observe: true,
  // observeParents: true,

  breakpoints: {
    1024: {
      direction: 'horizontal',
      effect: 'flip',
      crossFade: true,
      limitRotation: false,
      speed: 300,

    
      // pagination: {
      //   el: '.swiper1 .swiper-pagination',
      //   clickable: true,
      // },

    },
  }

});





window.addEventListener('resize', function () {
  const promo = document.querySelector(".promo");
  const rswiper = document.querySelector('.swiper1');
  if (document.documentElement.clientWidth >= 1024) {
    if (!rswiper) {
      promo.insertAdjacentHTML('beforeend',
        ` <div class="swiper swiper1">
              
          <div class="swiper-wrapper">
  
              <div class="swiper-slide slide-fon">
                  <img src="img/slider2/1.jpeg" alt="">
              </div>
  
              <div class="swiper-slide slide-fon">
                  <img src="img/slider2/2.jpg" alt="">
              </div>
  
              <div class="swiper-slide slide-fon">
                  <img src="img/slider2/3.jpg" alt="">
              </div>
  
          </div>
   
        <div class="swiper-pagination"></div>
  
      </div> `
      )
    } else if (rswiper) {
      rswiper.remove
    }

  }

})

if (document.documentElement.clientWidth >= 1024) {
  const promo = document.querySelector(".promo");
  promo.insertAdjacentHTML('beforeend',
    ` <div class="swiper swiper1">
        
    <div class="swiper-wrapper">

        <div class="swiper-slide slide-fon">
            <img src="img/slider2/1.jpeg" alt="">
        </div>

        <div class="swiper-slide slide-fon">
            <img src="img/slider2/2.jpg" alt="">
        </div>

        <div class="swiper-slide slide-fon">
            <img src="img/slider2/3.jpg" alt="">
        </div>

    </div>

  <div class="swiper-pagination"></div>

</div> `)
}
const rswiper = document.querySelector('.swiper1');

if (rswiper) {
  const swiper2 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
  effect: 'cube',

    speed: 1200,
    reverseDirection: true,
    pagination: {
      el: '.swiper1 .swiper-pagination',
      clickable: true,
    },

  });
  swiper2.controller.control = swiper;
  swiper.controller.control = swiper2;

}








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
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll(header, 'fix')
  } else {
    remove_class_on_scroll(header, 'fix')
  }

  // if (scrollpos >= scrollToscroll) {
  //   add_class_on_scroll(servicescroll, 'scroll')
  // } else {
  //   remove_class_on_scroll(servicescroll, 'scroll')
  // }

})