import {initCardSwiper} from './modules/card-swiper/card-swiper';
import {initCardsSwiper} from './modules/cards-swiper/cards-swiper';
import {initTabs} from './modules/tabs/tabs';
import {initCounters} from './modules/counter/counter';

window.addEventListener('load', () => {
    //Modules
    initCardSwiper();
    initCardsSwiper();
    initTabs();
    initCounters()

});
