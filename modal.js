// Modal
// Author: Rohit Mehta

const modalOverlay = document.querySelector('.modal__overlay');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.modal__close');

openModalBtn.addEventListener('click', () => {
    // console.log('Open Modal');
    modalOverlay.classList.add('modal-active');
});

closeModalBtn.addEventListener('click', () => {
    // console.log('Close Modal');
    modalOverlay.classList.remove('modal-active');
});