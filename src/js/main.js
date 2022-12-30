const navList = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.nav__item')
const hamburgerBtn = document.querySelector('.hamburger')
const hamburgerIcon = document.querySelector('.hamburger__icon--main')
const hamburgerIconCross = document.querySelector('.hamburger__icon--cross')
const allBoxes = document.querySelectorAll('.products__slider-box')
const prevBtn = document.querySelector('.products__btn--left')
const nextBtn = document.querySelector('.products__btn--right')
const footerYear = document.querySelector('.footer__year')

let currentImage = 1

const showMenu = () => {
	navList.classList.toggle('show')
	hamburgerIcon.classList.toggle('hide')
	hamburgerIconCross.classList.toggle('hide')
}

const handleNextBtn = () => {
	currentImage++

	if (currentImage > allBoxes.length) {
		currentImage = 1
	}

	handleShowBox()
	console.log(currentImage)
}

const handlePrevBtn = () => {
	currentImage--

	if (currentImage < 1) {
		currentImage = allBoxes.length
	}

	handleShowBox()
	console.log(currentImage)
}

const handleShowBox = () => {
	allBoxes.forEach(box => {
		if (currentImage == box.dataset.number) {
			box.classList.add('active-box')
		} else {
			box.classList.remove('active-box')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navItems.forEach(item => item.addEventListener('click', () => {
	navList.classList.remove('show')
	hamburgerIcon.classList.toggle('hide')
	hamburgerIconCross.classList.toggle('hide')
}))

nextBtn.addEventListener('click', handleNextBtn)
prevBtn.addEventListener('click', handlePrevBtn)
hamburgerBtn.addEventListener('click', showMenu)
handleCurrentYear()
