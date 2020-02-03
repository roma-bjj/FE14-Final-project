// Gallery

const galeryItems = document.querySelector('.gallery-items').children;
const galeryItemsSecond = document.querySelector('.gallery-items-second').children;
const galeryItemsThird = document.querySelector('.gallery-items-third').children;
const lightBoxContainer = document.querySelector('.lightbox');
const lightBoxImage = document.querySelector('.lightbox-img');
const lCounter = document.querySelector('.lightbox-counter');
const lText = document.querySelector('.lightbox-text');
let index; 
let imgSrc;

document.querySelector('#card-h1').onclick = function () {
	document.querySelector('.gallery-items-first').classList.toggle('gallery-items-active');
	document.querySelector('#card-h1').classList.toggle('h2-accordeon-active');
} 

document.querySelector('#card-h2').onclick = function () {
	document.querySelector('.gallery-items-second').classList.toggle('gallery-items-active');
	document.querySelector('#card-h2').classList.toggle('h2-accordeon-active');
} 

document.querySelector('#card-h3').onclick = function () {
	document.querySelector('.gallery-items-third').classList.toggle('gallery-items-active');
	document.querySelector('#card-h3').classList.toggle('h2-accordeon-active');
} 

function lightBoxShow() {
	lightBoxContainer.classList.toggle('open');
}

lightBoxContainer.addEventListener('click', function(event) {
	if (event.target!==lightBoxImage) {
		lightBoxShow();
	}
})

for (let i=0; i<galeryItems.length; i++) {
	galeryItems[i].querySelector('.fas').addEventListener('click', function () {
		index = i;
		changeImage();
		lightBoxShow();
	})
}
for (let i=0; i<galeryItemsSecond.length; i++) {
	galeryItemsSecond[i].querySelector('.fas').addEventListener('click', function () {
		index = i;
		changeImageTwo();
		lightBoxShow();
	})
}
for (let i=0; i<galeryItemsThird.length; i++) {
	galeryItemsThird[i].querySelector('.fas').addEventListener('click', function () {
		index = i;
		changeImageThree();
		lightBoxShow();
	})
}

function changeImage() {
	imgSrc=galeryItems[index].querySelector('.g-img').getAttribute('src');
	lightBoxImage.src = imgSrc;
	lCounter.innerHTML=(index+1) + " of " + galeryItems.length;
	lText.innerHTML=galeryItems[index].querySelector('h3').innerHTML;
}
function changeImageTwo() {
	imgSrc=galeryItemsSecond[index].querySelector('.g-img-two').getAttribute('src');
	lightBoxImage.src = imgSrc;
	lCounter.innerHTML=(index+1) + " of " + galeryItemsSecond.length;
	lText.innerHTML=galeryItemsSecond[index].querySelector('h3').innerHTML;
}
function changeImageThree() {
	imgSrc=galeryItemsThird[index].querySelector('.g-img').getAttribute('src');
	lightBoxImage.src = imgSrc;
	lCounter.innerHTML=(index+1) + " of " + galeryItemsThird.length;
	lText.innerHTML=galeryItemsThird[index].querySelector('h3').innerHTML;
}
