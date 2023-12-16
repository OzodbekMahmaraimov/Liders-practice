let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener('DOMContentLoaded', function () {
    let counterElement = document.getElementById('.count');
    let currentNumber = 0;

    function updateCounter() {
        counterElement.textContent = currentNumber;
        currentNumber++;

        if (currentNumber > 70) {
            clearInterval(intervalId);
        }
    }

    let intervalId = setInterval(updateCounter, 100); // Adjust the interval as needed

});

let navItem = document.querySelectorAll('.nav-link');
const navAnimation = () => {
    navItem.forEach((item) => {
        item.style.cssText = 'animation: nav-animation 2s ease-in-out'
    })
}

let textElement = document.getElementById('changingText');
let texts = ['Style', 'Method', 'Way'];
let currentIndex = 0;

function changeText() {
    textElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 2000); 