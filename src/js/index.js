import '@babel/polyfill'
import '../css/intelligent.css'
import '../css/int-media.css'

import '../js/intelligent.js'
import '../js/history.js'
import './news.js'

//	-------------------------

import {Lesson} from './posts.mjs'
import {Post} from './posts.mjs'
import {isValid} from './utils.js'

//	--------------------------

const formFree = document.getElementById('form-free')
const userName = formFree.querySelector('.user-name')
const userInsta = formFree.querySelector('.user-insta')
const userNumber = formFree.querySelector('.user-number')
const submitFree = formFree.querySelector('#submit')

//window.addEventListener('load', Post.renderList())

userName.addEventListener('input', () => {
	submitFree.disabled = !isValid(userName.value) 
	submitFree.disabled = !isValid(userInsta.value)
})

formFree.addEventListener('submit', submitFormHandler)
function submitFormHandler (event) {
	event.preventDefault()

	if (isValid(userName.value, userInsta.value)) {
		const lesson = {
			name: userName.value.trim(),
			insta: userInsta.value.trim(),
			number: userNumber.value.trim(),
			date: new Date().toJSON()
		}
	submitFree.disabled = true
		console.log(lesson)

	Lesson.create(lesson).then( () => {
		userName.value = ''
		userInsta.value = ''
		userNumber.value = ''
		submitFree.disabled = false
		})	
	}
} 

//modal window autorization 

import {authWithEmailAndPassword}  from './auth.js'
import {Fetch} from './posts.mjs'
import {renderList} from './posts.mjs'
import {listToHTML} from './posts.mjs'

const ALLCONTAINER = document.querySelector('.all-container')
const menuAdmin = document.querySelector('.menu-admin')
const aCkickPost = document.querySelector('#posts')

const autorizeButton = document.querySelector('.i-admin')
const adminForm = document.querySelector('.adminform')
const adminClose = document.querySelector('.adminform-close')
const formAdmin = document.querySelector('#form-admin')
const sendAutorize = document.querySelector('#send-autorize')

aCkickPost.addEventListener('click', event => {
	event.preventDefault()
	autorizeButton.classList.add('visible')
	const divPost = document.querySelector('.div-post')
	divPost.classList.add('div-post-opens')
	ALLCONTAINER.classList.add('all-container-none')

})



autorizeButton.addEventListener('click', () => {
	adminBoxShow()
});

function adminBoxShow() {
	adminForm.classList.toggle('opens')
}

adminForm.addEventListener('click', () => {
	if (event.target == adminClose) {
		adminBoxShow()
	}
})


//-------------------------
sendAutorize.addEventListener('click', (event) => {
	event.preventDefault()
	getEmailPassword()
})

function getEmailPassword() {
	const email = formAdmin.querySelector('.admin-field-email').value
	const password = formAdmin.querySelector('.admin-field-password').value
	sendAutorize.disabled = true
	authWithEmailAndPassword (email, password)
	.then( token => {
		return Lesson.Fetch})
	.then(renderModalAfterAuth)
	.then(() => sendAutorize.disabled = false)
}

function renderModalAfterAuth (content) {

		
		
		getFormPostAfterAuth()
		//renderList()
		//document.querySelector('.lesson').innerHTML = Lesson.listToHTML(content)
		
	}
 
function getFormPostAfterAuth () {
	menuAdmin.classList.add('opens')
}

// make posts -----------------------

const formPost = document.querySelector('.form-post')
const postText = formPost.querySelector('.post-text')
const postImg = formPost.querySelector('.post-img')
const postSubmit = formPost.querySelector('.post-submit')

window.addEventListener('load', Post.renderList)

userName.addEventListener('input', () => {
	postSubmit.disabled = !isValid(postText.value) 
})

formPost.addEventListener('submit', submitFormHandl)

function submitFormHandl (event) {
	event.preventDefault()

	if (isValid(postText.value)) {
		const post = {
			text: postText.value.trim(),
			date: new Date().toJSON()
		}

	postSubmit.disabled = true
		console.log(post)

	Post.create(post).then( () => {
		postText.value = ''
		postSubmit.disabled = false
		})	
	}
} 
















// show gallery
const aGallery = document.querySelector('#a-gallery')
aGallery.addEventListener('click', event => {
	event.preventDefault()
	addPageGallery()

})

function addPageGallery () {
	const mainSlader = document.querySelector('#main-slider')
	const galleryContainer = document.querySelector('.gallery-container')
	galleryContainer.classList.add('opens')
	mainSlader.style.display = 'none'
	ALLCONTAINER.classList.add('all-container-none')
}
