// Burger
	document.querySelector('.menu-burger-wrapper').onclick = function() {
	document.querySelector('.menu-burger').classList.toggle('menu-burger-active');
	document.querySelector('.main-menu').classList.toggle('mobile-nav-active');
}

// Bread
const liBreadOne = document.querySelector('.bread-li-one');
const liBreadTwo = document.querySelector('.bread-li-two');
const liBreadThree = document.querySelector('.bread-li-three');

liBreadOne.addEventListener('click', () => {ChooseBreadOne ()});
liBreadTwo.addEventListener('click', () => {ChooseBreadTwo ()});
liBreadThree.addEventListener('click', () => {ChooseBreadThree ()});


function ChooseBreadOne () {
	liBreadOne.classList.add('bread-active');
	document.querySelector('.hb-second-one').style.display = 'flex';
		if (liBreadOne.classList.contains('bread-active')) {
			liBreadTwo.classList.remove('bread-active');
			liBreadThree.classList.remove('bread-active');
			document.querySelector('.hb-second-two').style.display = 'none';
			document.querySelector('.hb-second-three').style.display = 'none';
		} 	
}
function ChooseBreadTwo () {
	liBreadTwo.classList.add('bread-active');
	document.querySelector('.hb-second-two').style.display = 'flex';
		if (liBreadTwo.classList.contains('bread-active')) {
			liBreadOne.classList.remove('bread-active');
			liBreadThree.classList.remove('bread-active');
			document.querySelector('.hb-second-one').style.display = 'none';
			document.querySelector('.hb-second-three').style.display = 'none';
		} 
}
function ChooseBreadThree () {
	liBreadThree.classList.add('bread-active');
	document.querySelector('.hb-second-three').style.display = 'flex';
		if (liBreadThree.classList.contains('bread-active')) {
			liBreadOne.classList.remove('bread-active');
			liBreadTwo.classList.remove('bread-active');
			document.querySelector('.hb-second-one').style.display = 'none';
			document.querySelector('.hb-second-two').style.display = 'none';
		} 
}

// up 
document.querySelector('.up').addEventListener('click', () => {
	window.scrollTo(0,0);
})

//modal window free lesson 

const freeButton = document.querySelector('#get-free-button');
const boxForm = document.querySelector('.boxform');
const boxFormClose = document.querySelector('.boxform-close');

freeButton.addEventListener('click', event => {
	event.preventDefault();
	freeBoxShow();
});

function freeBoxShow() {
	boxForm.classList.toggle('opens');
}

boxForm.addEventListener('click', () => {
	if (event.target == boxFormClose) {
		freeBoxShow();
	}
})

