//import '@babel/polyfill'
import '../css/intelligent.css'
import '../css/int-media.css'

import {Post} from './posts.mjs'
import {isValid} from './utils.js'



const formNews = document.getElementById('write-news')
const inputNews = formNews.querySelector('.w-news')
const submitNews = formNews.querySelector('.sub-news')

window.addEventListener('load', Post.renderList)
formNews.addEventListener('submit', submitFormHandler)
inputNews.addEventListener('input', () => {
	submitNews.disabled = !isValid(inputNews.value) 
})

function submitFormHandler (event) {
	event.preventDefault()

	if (isValid(inputNews.value)) {
		const post = {
			text: inputNews.value.trim(),
			date: new Date().toJSON()
		}
		submitNews.disabled = true

		Post.create(post).then( () => {
			inputNews.value = ''
			//inputNews.className = ''
			submitNews.disabled = false
		})
		
	}
} 




// ---------------------------------------
import * as data from '../json/history.json'
const dataHistory = data;
const ALLCONTAINER = document.querySelector('#all-container');
const aHistory = document.querySelector('#a-history');

aHistory.addEventListener ('click', event => {
	event.preventDefault();

	let historyRequest = new XMLHttpRequest();
	historyRequest.open('GET', '../json/history.json');
	historyRequest.setRequestHeader("Content-type", "application/json");
	historyRequest.onload = () => {
	let historyData = JSON.parse(historyRequest.responseText);
	renderHistoryHtml(historyData);
}

historyRequest.send();

})

function renderHistoryHtml(data) {
	const newHistor = Object.values(data)
	newHistor.map(hist => {
		return `${hist}`
	})
	console.log (newHistor)
	ALLCONTAINER.innerHTML = `<div> ${newHistor.join('')} </div>`;
}
console.log (data.h2)
