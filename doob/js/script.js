const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu')
menuBtn.addEventListener("click", function (e) {
	e.preventDefault();
	mobileMenu.classList.toggle("toggle")
})

$('.slider').slick();