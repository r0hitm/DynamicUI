// Mobile Tabbed Menu
// Author: Rohit Mehta

const mobileMenuTabs = Array.from(document.querySelectorAll('.mobile-menu__header__item'));
const mobileMenuTabContents = Array.from(document.querySelectorAll('.mobile-menu__body__item'));

mobileMenuTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        mobileMenuTabs.forEach(tab => tab.classList.remove('selected_tab'));
        mobileMenuTabContents.forEach(tabContent => tabContent.classList.remove('selected_item'));
        tab.classList.add('selected_tab');
        mobileMenuTabContents[index].classList.add('selected_item');
    });
});