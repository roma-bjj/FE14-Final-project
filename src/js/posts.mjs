export class Post {
	static create(post) {
		return fetch ('https://intelligent-jj.firebaseio.com/posts.json', {
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
		.then (Post.renderList)
	}
	static renderList() {
		const posts = getPostsFromLocalStorage()

		const html = posts.length 
		? posts.map(toCard).join('') 
		: `<div class="no-post"> no post <div/>`

		const list = document.getElementById('list')
		list.innerHTML = html
	}
}

function addToLocalStorage(post) {
	const all = getPostsFromLocalStorage()
	all.push(post)
	localStorage.setItem('posts', JSON.stringify(all))
}

function getPostsFromLocalStorage() {
	return JSON.parse(localStorage.getItem ('posts') || '[]')	
}

function toCard(post) {
	return `
	<div>
	${new Date(post.date).toLocaleDateString()}
	${new Date(post.date).toLocaleTimeString()}
	</div>
	<div>
	${post.text}
	</div>`
}