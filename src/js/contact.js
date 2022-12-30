const navList = document.querySelector('.nav__list')
const hamburgerBtn = document.querySelector('.hamburger')
const hamburgerIcon = document.querySelector('.hamburger__icon--main')
const hamburgerIconCross = document.querySelector('.hamburger__icon--cross')
const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const msg = document.querySelector('#msg')
const sendBtn = document.querySelector('.contact__form-send')
const closeBtn = document.querySelector('.contact__form-close')
const popup = document.querySelector('.contact__form-popup')
const footerYear = document.querySelector('.footer__year')

const showMenu = () => {
	navList.classList.toggle('show')
	hamburgerIcon.classList.toggle('hide')
	hamburgerIconCross.classList.toggle('hide')
}


const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}


const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków`)
	}
}

const checkPhone = phone => {
	const re = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/

	if (re.test(phone.value)) {
		clearError(phone)
	} else {
		showError(phone, `${phone.previousElementSibling.innerText.slice(0, -1)} jest niepoprawny`)
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, `${email.previousElementSibling.innerText.slice(0, -1)} jest niepoprawny`)
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add('show-popup')
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([firstName, lastName, phone, email, msg])
	checkLength(firstName, 3)
	checkLength(lastName, 3)
	checkLength(msg, 3)
    checkPhone(phone)
	checkMail(email)
	checkErrors()
})

closeBtn.addEventListener('click', e => {
    e.preventDefault
    popup.classList.remove('show-popup')
    ;[firstName, lastName, phone, email, msg].forEach(element => {
		element.value = ''
		clearError(element)
	})

})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

hamburgerBtn.addEventListener('click', showMenu)
handleCurrentYear()