import Swiper from 'swiper'
import {Mousewheel} from 'swiper/modules'
import 'swiper/css';

const swiper = new Swiper('#gipoSlider', {
  speed: 400,
  modules: [Mousewheel],
  spaceBetween: 40,
  direction: 'vertical',
  height: 640,
  mousewheel: {
    enabled: true,
    releaseOnEdges: true,
    sensitivity: 0.01,
    forceToAxis: true,
    thresholdDelta: 10,
    thresholdTime: 1000,
  }
});