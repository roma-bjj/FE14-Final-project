// Burger
document.querySelector('.menu-burger-wrapper').onclick = function() {
	document.querySelector('.menu-burger').classList.toggle('menu-burger-active');
	document.querySelector('.main-menu').classList.toggle('mobile-nav-active');
}

// Pagination 

const athlet = document.querySelector('.athlet').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const maxItem = 3;
let index = 1;
const allPages = Math.floor(athlet.length/maxItem);

prev.addEventListener ("click", function() {
	index--
	showItems ();
	showButton();
});

next.addEventListener ("click", function() {
	index++
	showItems ();
	showButton();
});

function showButton () {

	if (index==allPages) {
		next.classList.add('disabled');
	}
	else {
		next.classList.remove('disabled');
	}
	if (index==1) {
		prev.classList.add('disabled');
	}
	else {
		prev.classList.remove('disabled');
	}
}

function showItems () {

	for (let i=0; i<athlet.length; i++) {
		athlet[i].classList.remove('show');
		athlet[i].classList.add('hide');

		if(i>=index*maxItem-maxItem && i<index*maxItem) {
			athlet[i].classList.remove('hide');
			athlet[i].classList.add('show');
		}
	}
}

window.onload = function () {
	showItems();
	showButton();
}
