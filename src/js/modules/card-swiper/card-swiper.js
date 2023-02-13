import Swiper, {Pagination} from 'swiper';

export const initCardSwiper = () => {
    new Swiper('.swiper-card', {
        modules: [Pagination],
        loop: true,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
}