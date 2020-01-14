// Burger
document.querySelector('.menu-burger-wrapper').onclick = function() {
	document.querySelector('.menu-burger').classList.toggle('menu-burger-active');
	document.querySelector('.main-menu').classList.toggle('mobile-nav-active');
}

// Bread
const liBreadOne = document.querySelector('.bread-li-one');
const liBreadTwo = document.querySelector('.bread-li-two');
const liBreadThree = document.querySelector('.bread-li-three');

liBreadOne.onclick = function ChooseBreadOne () {
	liBreadOne.classList.add('bread-active');
	document.querySelector('.hb-second-one').style.display = 'flex';
		if (liBreadOne.classList.contains('bread-active')) {
			liBreadTwo.classList.remove('bread-active');
			liBreadThree.classList.remove('bread-active');
			document.querySelector('.hb-second-two').style.display = 'none';
			document.querySelector('.hb-second-three').style.display = 'none';
		} 	
}
liBreadTwo.onclick = function ChooseBreadTwo () {
	liBreadTwo.classList.add('bread-active');
	document.querySelector('.hb-second-two').style.display = 'flex';
		if (liBreadTwo.classList.contains('bread-active')) {
			liBreadOne.classList.remove('bread-active');
			liBreadThree.classList.remove('bread-active');
			document.querySelector('.hb-second-one').style.display = 'none';
			document.querySelector('.hb-second-three').style.display = 'none';
		} 
}
liBreadThree.onclick = function ChooseBreadThree () {
	liBreadThree.classList.add('bread-active');
	document.querySelector('.hb-second-three').style.display = 'flex';
		if (liBreadThree.classList.contains('bread-active')) {
			liBreadOne.classList.remove('bread-active');
			liBreadTwo.classList.remove('bread-active');
			document.querySelector('.hb-second-one').style.display = 'none';
			document.querySelector('.hb-second-two').style.display = 'none';
		} 
}

