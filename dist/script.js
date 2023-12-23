const menuBtn = document.getElementById('menuBtn');
const leftSlide = document.getElementById('leftSlide');
const rightSlide = document.getElementById('rightSlide');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        leftSlide.classList.add('show');
        rightSlide.classList.add('show');

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        leftSlide.classList.remove('show');
        rightSlide.classList.remove('show');

        showMenu = false;
    }
}