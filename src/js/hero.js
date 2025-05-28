import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css';

const swiper = new Swiper('#heroSlider', {
  speed: 400,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl: '#heroSwiperNext',
    prevEl: '#heroSwiperPrev',
  },
  on: {
    activeIndexChange: (swiper) => {
      const numbers = document.querySelectorAll(".slider__number");
      numbers.forEach((number, index) => {
        if (index === swiper.activeIndex) {
          number.classList.add("slider__number--active");
        } else {
          number.classList.remove("slider__number--active");
        }
      });
      const button = document.querySelector("#heroSwiperNext");
      if (!button) return;
      if (swiper.previousIndex < swiper.activeIndex)
        button.classList.remove(`slider__button--${swiper.activeIndex}`);
      else
        button.classList.remove(`slider__button--${swiper.activeIndex + 2}`);

      button.classList.add(`slider__button--${swiper.activeIndex + 1}`);

    },

  }
});