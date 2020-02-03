// Rendering History

const ALLCONTAINER = document.querySelector('.all-container');
const aClickHistory = document.querySelector('#a-history');

aClickHistory.addEventListener ('click', event => {
	event.preventDefault();

	let historyRequest = new XMLHttpRequest();
	historyRequest.open('GET', '../json/histor.json');
	historyRequest.setRequestHeader("Content-type", "application/json");
	historyRequest.onload = () => {
	let historyData = JSON.parse(historyRequest.responseText);
	renderHistoryHtml(historyData);
}
	historyRequest.send();
})

function renderHistoryHtml(data) {

	const h2IdHistory = Object.values(data[0].h2["@id"]).join('')
	const h2aNameHistory = Object.values(data[0].h2.a["@name"]).join('')
	const h2aTextHistory = Object.values(data[0].h2.a["#text"]).join('')

	const aHistory = document.createElement('a')
	const aTextHistory = document.createTextNode(h2aTextHistory)
	aHistory.setAttribute('name', h2aNameHistory)
	aHistory.appendChild(aTextHistory)


	const h2History = document.createElement("h2")
	h2History.setAttribute('id', h2IdHistory)
	h2History.appendChild(aHistory)

	// -------------------------

	const articleIdHistory = Object.values(data[1].article['@id']).join('')
	const articleHistoryImgSrc = Object.values(data[1].article.img["@src"]).join('')

	const articleHistory = document.createElement('article')
	const imgHistory = document.createElement('img')
	articleHistory.setAttribute('id', articleIdHistory)
	imgHistory.setAttribute('src', articleHistoryImgSrc)
	articleHistory.appendChild(imgHistory)

	// -------------------------

	const sectionIdHistory = Object.values(data[1].article.section["@id"]).join('')
	const sectionHistoryP = Object.values(data[1].article.section.p).join('')

	const sectionHistory = document.createElement('section')
	const pHistory = document.createElement('p')
	const pTextHistory = document.createTextNode(sectionHistoryP)

	sectionHistory.setAttribute('id', sectionIdHistory)
	pHistory.appendChild(pTextHistory)
	sectionHistory.appendChild(pHistory)

	ALLCONTAINER.innerHTML = h2History.outerHTML + articleHistory.outerHTML + sectionHistory.outerHTML

	const urlH = new URL('http://localhost:9000/history')
	//urlH.searchParams.set('page', 'history')
	urlH.searchParams.toString()
	let state = {'page_id': 1}
	let title = 'History'
	history.pushState(state, title, urlH);
	//document.location.replace('http://localhost:9000/?page=history')
	console.log(history)
	console.log(urlH)
}

// Rendering Athlethes 

const aClickAthletes = document.querySelector('#a-athletes');

aClickAthletes.addEventListener ('click', event => {
	event.preventDefault();

	let athletesRequest = new XMLHttpRequest();
	athletesRequest.open('GET', '../json/athletes.json');
	athletesRequest.setRequestHeader("Content-type", "application/json");
	athletesRequest.onload = () => {
	let athletesData = JSON.parse(athletesRequest.responseText);
	renderAthletesHtml(athletesData);
}
	athletesRequest.send();
})

function renderAthletesHtml(data) {

	const ArticleIdAthletes = Object.values(data.article["@id"]).join('')
	const h2atextAthletes = Object.values(data.article.h2.a["#text"]).join('')

	const CLASSsectionAthletes = Object.values(data.article.section["@class"]).join('')
	const CLASSdivAthletes = Object.values(data.article.section.div[0]["@class"]).join('')
	const CLASSdivInfoAthletes = Object.values(data.article.section.div[0].div["@class"]).join('')
	const CLASSimgAthletes = Object.values(data.article.section.div[0].img["@class"]).join('')
	const CLASSspanAthletes = Object.values(data.article.section.div[0].div.span["@class"]).join('')
	
		const ArrayAthlets = Object.values(data.article.section.div)
	 	let athlesDataArray = [];

		 for (athletObject of ArrayAthlets) { 
		  let athlet = [];      
		        athlet.push(Object.values(athletObject.img["@src"]).join(''));
		        athlet.push(Object.values(athletObject.div.h3).join(''));
		        athlet.push(Object.values(athletObject.div.span["#text"]));
		  athlesDataArray.push(athlet);
		 }

	const $articleAthletes = document.createElement('article')
	$articleAthletes.setAttribute('id', ArticleIdAthletes)

	const $h2Athletes = document.createElement('h2')
	const $aAthletes = document.createElement ('a')
	const $aTextAthletes = document.createTextNode (h2atextAthletes)
	$aAthletes.appendChild($aTextAthletes)
	$h2Athletes.appendChild($aAthletes)

	const $sectionAthletes = document.createElement('section')
	$sectionAthletes.classList.add(CLASSsectionAthletes)

		function createDivAthletes() {
		let $divAthletes = document.createElement('div')
		$divAthletes.classList.add(CLASSdivAthletes)
		return $divAthletes
		}

		function createImg(src) {
		let $imgAthletes = document.createElement("img")
		$imgAthletes.classList.add(CLASSimgAthletes)
		$imgAthletes.setAttribute('src', src)
		return $imgAthletes
		}

		function createDivInfo() {
		let $divInfoAthletes = document.createElement('div')
		$divInfoAthletes.classList.add(CLASSdivInfoAthletes)
		return $divInfoAthletes
		}

		function createH3(texto) {
		let $h3Athletes = document.createElement('h3')
		let $h3TextAthletes = document.createTextNode(texto)
		$h3Athletes.appendChild($h3TextAthletes)
		return $h3Athletes
		}

		function createSpan(desc) {
		let $spanAthletes = document.createElement('span')
		let $spanTextAthletes = document.createTextNode(desc)
		$spanAthletes.appendChild($spanTextAthletes)
		return $spanAthletes
		}

		let ArrDivAthletes = []
		ArrDivAthletes.push(createDivAthletes())
		ArrDivAthletes.push(createDivAthletes())
		ArrDivAthletes.push(createDivAthletes())
		ArrDivAthletes.push(createDivAthletes())
		ArrDivAthletes.push(createDivAthletes())
		ArrDivAthletes.push(createDivAthletes())
		ArrDivAthletes.push(createDivAthletes())
		ArrDivAthletes.push(createDivAthletes())
		ArrDivAthletes.push(createDivAthletes())

		let ArrSrcImgAthletes = []
		ArrSrcImgAthletes.push(createImg(athlesDataArray[0][0]))
		ArrSrcImgAthletes.push(createImg(athlesDataArray[1][0]))
		ArrSrcImgAthletes.push(createImg(athlesDataArray[2][0]))
		ArrSrcImgAthletes.push(createImg(athlesDataArray[3][0]))
		ArrSrcImgAthletes.push(createImg(athlesDataArray[4][0]))
		ArrSrcImgAthletes.push(createImg(athlesDataArray[5][0]))
		ArrSrcImgAthletes.push(createImg(athlesDataArray[6][0]))
		ArrSrcImgAthletes.push(createImg(athlesDataArray[7][0]))
		ArrSrcImgAthletes.push(createImg(athlesDataArray[8][0]))

		let ArrDivInfoAthletes = []
		ArrDivInfoAthletes.push(createDivInfo())
		ArrDivInfoAthletes.push(createDivInfo())
		ArrDivInfoAthletes.push(createDivInfo())
		ArrDivInfoAthletes.push(createDivInfo())
		ArrDivInfoAthletes.push(createDivInfo())
		ArrDivInfoAthletes.push(createDivInfo())
		ArrDivInfoAthletes.push(createDivInfo())
		ArrDivInfoAthletes.push(createDivInfo())
		ArrDivInfoAthletes.push(createDivInfo())

		let ArrH3Athletes = []
		ArrH3Athletes.push(createH3(athlesDataArray[0][1]))
		ArrH3Athletes.push(createH3(athlesDataArray[1][1]))
		ArrH3Athletes.push(createH3(athlesDataArray[2][1]))
		ArrH3Athletes.push(createH3(athlesDataArray[3][1]))
		ArrH3Athletes.push(createH3(athlesDataArray[4][1]))
		ArrH3Athletes.push(createH3(athlesDataArray[5][1]))
		ArrH3Athletes.push(createH3(athlesDataArray[6][1]))
		ArrH3Athletes.push(createH3(athlesDataArray[7][1]))
		ArrH3Athletes.push(createH3(athlesDataArray[8][1]))

		let ArrSpanAthletes = []
		ArrSpanAthletes.push(createSpan(athlesDataArray[0][2]))
		ArrSpanAthletes.push(createSpan(athlesDataArray[1][2]))
		ArrSpanAthletes.push(createSpan(athlesDataArray[2][2]))
		ArrSpanAthletes.push(createSpan(athlesDataArray[3][2]))
		ArrSpanAthletes.push(createSpan(athlesDataArray[4][2]))
		ArrSpanAthletes.push(createSpan(athlesDataArray[5][2]))
		ArrSpanAthletes.push(createSpan(athlesDataArray[6][2]))
		ArrSpanAthletes.push(createSpan(athlesDataArray[7][2]))
		ArrSpanAthletes.push(createSpan(athlesDataArray[8][2]))
		
		ArrDivAthletes[0].appendChild(ArrSrcImgAthletes[0])
		ArrDivAthletes[1].appendChild(ArrSrcImgAthletes[1])
		ArrDivAthletes[2].appendChild(ArrSrcImgAthletes[2])
		ArrDivAthletes[3].appendChild(ArrSrcImgAthletes[3])
		ArrDivAthletes[4].appendChild(ArrSrcImgAthletes[4])
		ArrDivAthletes[5].appendChild(ArrSrcImgAthletes[5])
		ArrDivAthletes[6].appendChild(ArrSrcImgAthletes[6])
		ArrDivAthletes[7].appendChild(ArrSrcImgAthletes[7])
		ArrDivAthletes[8].appendChild(ArrSrcImgAthletes[8])

		ArrDivAthletes[0].appendChild(ArrDivInfoAthletes[0])
		ArrDivAthletes[1].appendChild(ArrDivInfoAthletes[1])
		ArrDivAthletes[2].appendChild(ArrDivInfoAthletes[2])
		ArrDivAthletes[3].appendChild(ArrDivInfoAthletes[3])
		ArrDivAthletes[4].appendChild(ArrDivInfoAthletes[4])
		ArrDivAthletes[5].appendChild(ArrDivInfoAthletes[5])
		ArrDivAthletes[6].appendChild(ArrDivInfoAthletes[6])
		ArrDivAthletes[7].appendChild(ArrDivInfoAthletes[7])
		ArrDivAthletes[8].appendChild(ArrDivInfoAthletes[8])

		ArrDivInfoAthletes[0].appendChild(ArrH3Athletes[0])
		ArrDivInfoAthletes[1].appendChild(ArrH3Athletes[1])
		ArrDivInfoAthletes[2].appendChild(ArrH3Athletes[2])
		ArrDivInfoAthletes[3].appendChild(ArrH3Athletes[3])
		ArrDivInfoAthletes[4].appendChild(ArrH3Athletes[4])
		ArrDivInfoAthletes[5].appendChild(ArrH3Athletes[5])
		ArrDivInfoAthletes[6].appendChild(ArrH3Athletes[6])
		ArrDivInfoAthletes[7].appendChild(ArrH3Athletes[7])
		ArrDivInfoAthletes[8].appendChild(ArrH3Athletes[8])

		ArrDivInfoAthletes[0].appendChild(ArrSpanAthletes[0])
		ArrDivInfoAthletes[1].appendChild(ArrSpanAthletes[1])
		ArrDivInfoAthletes[2].appendChild(ArrSpanAthletes[2])
		ArrDivInfoAthletes[3].appendChild(ArrSpanAthletes[3])
		ArrDivInfoAthletes[4].appendChild(ArrSpanAthletes[4])
		ArrDivInfoAthletes[5].appendChild(ArrSpanAthletes[5])
		ArrDivInfoAthletes[6].appendChild(ArrSpanAthletes[6])
		ArrDivInfoAthletes[7].appendChild(ArrSpanAthletes[7])
		ArrDivInfoAthletes[8].appendChild(ArrSpanAthletes[8])

// Pagination Buttons

const divPagination = Object.values(data.article.div["@class"]).join('')
const divButtonPrev = Object.values(data.article.div.div[0]["@class"]).join('')
const divButtonNext = Object.values(data.article.div.div[1]["@class"]).join('')
const divButtonPrevb = Object.values(data.article.div.div[0].b).join('')
const divButtonNextb = Object.values(data.article.div.div[1].b).join('')

const $divPagination = document.createElement('div')
$divPagination.classList.add(divPagination)
const $divButtonPrev = document.createElement('div')
$divButtonPrev.classList.add(divButtonPrev)
const $divButtonNext = document.createElement('div')
$divButtonNext.classList.add(divButtonNext)
const $divButtonPrevb = document.createTextNode(divButtonPrevb)
const $divButtonNextb = document.createTextNode(divButtonNextb)
$divButtonPrev.appendChild($divButtonPrevb)
$divButtonNext.appendChild($divButtonNextb)
$divPagination.appendChild($divButtonPrev)
$divPagination.appendChild($divButtonNext)

for (DivA of ArrDivAthletes) {
	if (ArrDivAthletes.length <= 9) {
	$sectionAthletes.appendChild(DivA)
	}
}

$articleAthletes.appendChild($h2Athletes)
$articleAthletes.appendChild($sectionAthletes)
$articleAthletes.appendChild($divPagination)

ALLCONTAINER.innerHTML = $articleAthletes.outerHTML
Pagination ()
}

function Pagination () {

const ATHLET = document.querySelector('.athlet').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const maxItem = 3;
let index = 1;
const allPages = Math.ceil(ATHLET.length/maxItem);

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

	for (let i=0; i<ATHLET.length; i++) {
		ATHLET[i].classList.remove('show');
		ATHLET[i].classList.add('hide');

		if(i>=index*maxItem-maxItem && i<index*maxItem) {
			ATHLET[i].classList.remove('hide');
			ATHLET[i].classList.add('show');
		}
	}
}
	showItems();
	showButton();

	const urlA = new URL('http://localhost:9000/athletes')
	urlA.searchParams.set('page', 'athletes')
	urlA.searchParams.toString()
	let state = {'page_id': 1}
	let title = 'Athletes'
	console.log(123);
	history.pushState(state, title, urlA);
	//document.location.replace('http://localhost:9000/?page=history')
	console.log(history)
	console.log(urlA)
	//console.log()
}
