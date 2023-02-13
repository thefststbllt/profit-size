import {MAX_DEVICE_WIDTH} from '../../utils/platforms';

const productCards = document.querySelectorAll('.card');

export const initCounters = () => {
    if (!productCards) {
        return
    }
    if (window.matchMedia(`(min-width: ${MAX_DEVICE_WIDTH.mobile + 1}px)`).matches) {
        productCards.forEach(card => {
            const counter = card.querySelector('.counter');
            const counterDecrement = counter.querySelector('.counter__button--minus');
            const counterIncrement = counter.querySelector('.counter__button--plus');

            counterIncrement.addEventListener('click', () => {
                counter.querySelector('input').value++;
            });

            counterDecrement.addEventListener('click', () => {
                if (counter.querySelector('input').value > 1) {
                    counter.querySelector('input').value--;
                }
            });
        })
    }
}