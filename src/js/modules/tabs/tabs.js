export const initTabs = () => {
    const tabButtons = document.querySelectorAll('.tab-buttons__link');
    const tabContent = document.querySelectorAll('.tabs');

    tabButtons.forEach(item => {
        item.addEventListener('click', (evt) => {
            evt.preventDefault();
            const id = evt.target.getAttribute('href').replace('#', '');

            tabButtons.forEach(tabButton => {
                tabButton.classList.remove('tab-buttons__link--current');
            })

            tabContent.forEach(tab => {
                tab.classList.remove('tabs--active');
            })

            item.classList.add('tab-buttons__link--current');
            document.getElementById(id).classList.add('tabs--active');
        })
    })
}
