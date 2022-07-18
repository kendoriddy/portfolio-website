const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon-btn');

const mobileMenu = document.getElementById('mobile-menu');
const mobileList = document.getElementById('mobile-menu-list');

hamburger.addEventListener("click", function() {
    mobileMenu.style.display = 'block';
})

closeIcon.addEventListener("click", function() {
    mobileMenu.style.display = 'none';
})

mobileList.addEventListener("click", function() {
    mobileMenu.style.display = 'none'
})