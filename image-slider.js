// Image Slider (carousel)

// Author: Rohit Mehta

const leftSlideBtn = document.querySelector('.image-slider__left');
const rightSlideBtn = document.querySelector('.image-slider__right');
const images = Array.from(document.querySelectorAll('.carousel_img'));

const numberOfImages = images.length;

let currentImage = 0;

const slideRight = () => {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % numberOfImages;
    images[currentImage].classList.add('active');

    // console.log(currentImage);
}

const slideLeft = () => {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage - 1 + numberOfImages) % numberOfImages;
    images[currentImage].classList.add('active');

    // console.log(currentImage);
}

rightSlideBtn.addEventListener('click', slideRight);

leftSlideBtn.addEventListener('click', slideLeft);

setInterval(slideRight, 5000);