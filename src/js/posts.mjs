export class Lesson {
	static create(lesson) {
		return fetch ('https://intelligent-team-ukraine.firebaseio.com/lessons.json', {
			method: 'POST',
			body: JSON.stringify(lesson),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(response => {
			lesson.id = response.name
			return lesson
		})
		//.then (Lesson.renderList)
		.then (Lesson.listToHTML)
	}
}


	export function Fetch(token) {
		if (!token) {
			return Promise.resolve('<p class="error">No token</p>')
		}
		return fetch (`https://intelligent-team-ukraine.firebaseio.com/lessons.json=${token}`)
					.then(response => response.json())
					.then(response => {
						if (response && response.error) {
							return `<p> class="error">${response.error}</p>`
						}
						return response ? Object.keys(response).map(key => ({
							...response[key],
							id: key
						})) : []
					})
			}

	export function listToHTML (lessons) {
		return lessons.length 
		? `<ol>${lessons.map(l => `
			<li>${l.name}</li>
			<li>${l.insta}</li>
			<li>${l.number}</li>
			<li>${l.date}</li>
			`).join('')}</ol>`
		: '<p> not have </p>'
	}

// -------------------------------------------------------

export class Post {
	static create(post) {
		return fetch ('https://intelligent-team-ukraine.firebaseio.com/post.json', {
			method: 'POST',
			body: JSON.stringify(post),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(response => {
			post.id = response.name
			return post
		})
		.then (addToLocalStorage)
		.then (renderList)
	}
}

function addToLocalStorage(post) {
	const allposts = getLessonsFromLocalStorage()
	allposts.push(post)
	localStorage.setItem('post', JSON.stringify(allposts))
}

function getLessonsFromLocalStorage() {
	return JSON.parse(localStorage.getItem('post') || '[]')	
}

export function renderList() {
		const posts = getLessonsFromLocalStorage()
		const htmlp =  posts.map(toCard).join('') 
		//: `<div class="no-post"> not have <div/>` //posts.length
		document.querySelector('.div-post-opens').innerHTML = htmlp
}

function toCard(post) {
	return `
	<div>
	${new Date(post.date).toLocaleDateString()}
	${new Date(post.date).toLocaleTimeString()}
	</div>
	<div>${post.text}</div>
	<div>${post.date}</div>
	`
}
