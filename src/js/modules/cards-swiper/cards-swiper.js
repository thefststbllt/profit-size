import {MAX_DEVICE_WIDTH} from '../../utils/platforms';
import Swiper, {Navigation, Pagination} from 'swiper';

export const initCardsSwiper = () => {
    const cardSwipers = document.querySelectorAll('.swiper-cards');

    if (window.matchMedia(`(min-width: ${MAX_DEVICE_WIDTH.mobile + 1}px)`).matches) {
        Array.from(cardSwipers).forEach((item) => {
            new Swiper(item, {
                modules: [Navigation, Pagination],
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                spaceBetween: 20,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                },
                breakpoints: {
                    860: {
                        slidesPerView: 2
                    },
                    1221: {
                        slidesPerView: 3,
                    },
                    1570: {
                        slidesPerView: 4
                    },
                },
            });
        })
    }
}