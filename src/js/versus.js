import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

// Получаем кнопку для обновления прогресса
const nextButton = document.querySelector('#versusNext');

let userInteracted = false; // Флаг взаимодействия пользователя

const swiper = new Swiper('#versusSlider', {
  speed: 400,
  spaceBetween: 30,
  modules: [Navigation, Autoplay],
  loop: true,
  height: 360,
  direction: 'vertical',
  loopAdditionalSlides: 3,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '#versusNext',
    prevEl: '#versusPrev',
  },
  on: {
    autoplayStart() {
      if (nextButton && !userInteracted) {
        nextButton.style.setProperty('--progress', '0');
      }
    },
    autoplayStop() {
      if (nextButton) {
        nextButton.style.setProperty('--progress', '0');
      }
    },
    autoplayTimeLeft(swiper, time, progress) {
      const percent = 100 - Math.round(progress * 100);
      if (nextButton) {
        nextButton.style.setProperty('--progress', percent);
      }
    },
  }
});