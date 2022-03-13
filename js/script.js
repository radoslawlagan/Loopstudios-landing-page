const burgerBtn = document.querySelector('.burger-btn')
const closeBtn = document.querySelector('.close-btn')
const navMobile = document.querySelector('.nav-mobile')
const navMobileLinks = document.querySelectorAll('.nav-mobile__link')

const handleNav = () => {
	navMobile.classList.toggle('active')
}

burgerBtn.addEventListener('click', handleNav)
closeBtn.addEventListener('click', handleNav)
navMobileLinks.forEach((link) => link.addEventListener('click', handleNav))
