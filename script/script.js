var user = [
	{
		id: 0,
		email: 1,
		password: 1,
		name: "Олександр Коваленко",
		balance: 123, //сумма всех моих оферов финансы-вся зелень сумма
		img: "img/user/user1.png",
	},
	{
		id: 1,
		email: 2,
		password: 2,
		name: "Олександр Верстуков",
		balance: 2000, //сумма всех моих оферов финансы-вся зелень сумма
		img: "img/user/user2.png",
	}
]
var idUser

var offers = [
	{
		id: 0,
		name: "Tesla",
		cost: 100,
		goal: "Депозит",
		country: "UA ",
		language: "GER POL USA",
		info: "Мобільний застосунок для інвестицій в акції компаній та стартапів."
	},
	{
		id: 1,
		name: "FIT",
		cost: 600,
		goal: "Бюджет",
		country: "UA",
		language: "UA",
		info: "Мобільний застосунок."
	},
	{
		id: 2,
		name: "ZSU",
		cost: 1200,
		goal: "Депозит",
		country: "UA POL USA",
		language: "GER",
		info: "Мобільний застосунок для інвестицій в акції компаній та стартапів."
	},
	{
		id: 3,
		name: "Kiev",
		cost: 1600,
		goal: "Бюджет",
		country: "GER",
		language: "ENG",
		info: "Мобільний застосунок."
	},
	{
		id: 4,
		name: "Love",
		cost: 400,
		goal: "Финанс",
		country: "POL",
		language: "POL",
		info: "Мобільний застосунок."
	},

]

var myOffers = []

//Проверка логина с паролем
function login() {
	const email = document.querySelector(".email").value
	const password = document.querySelector("#password").value

	for (let i = 0; i < user.length; i++) {
		if (user[i].email == email && user[i].password == password) {
			idUser = i

			userImgName(idUser)
			randomOffer(idUser)
			balanceUser()

			const headerLogin = document.querySelector(".header")
			headerLogin.remove()

			const divLogin = document.querySelector(".login__container")
			divLogin.remove()

			const mainDiv = document.querySelector(".main")
			mainDiv.style.display = "flex"

			const headerMain = document.querySelector(".header__main")
			headerMain.style.display = "flex"


		}
	}
}
login()

//рендерит аватарку юзера и его имя
function userImgName(id) {
	const userAvatar = document.querySelector(".user-avatar")
	userAvatar.setAttribute("src", user[id].img)



	const userName = document.querySelector(".user-name")
	userName.innerHTML = user[id].name


}

//Переключатель между страницами
function nextPage(idPage) {

	const mainPage = document.querySelector(".main")
	const oferList = document.querySelector("#all")
	const myOferList = document.querySelector("#my")



	if (idPage == 1) {
		mainPage.style.display = "flex"
		oferList.style.display = "none"
		myOferList.style.display = "none"

		const link1 = document.querySelector("#link1")
		const link2 = document.querySelector("#link2")
		const link3 = document.querySelector("#link3")

		link1.innerHTML = "<span>Головна</span>"
		link2.innerHTML = "Офери"
		link3.innerHTML = "Мої офери"



	}
	else if (idPage == 2) {
		mainPage.style.display = "none"
		oferList.style.display = "flex"
		myOferList.style.display = "none"

		const link1 = document.querySelector("#link1")
		const link2 = document.querySelector("#link2")
		const link3 = document.querySelector("#link3")

		link1.innerHTML = "Головна"
		link2.innerHTML = "<span>Офери</span>"
		link3.innerHTML = "Мої офери"

		offerlistAll(offers)


	}
	else if (idPage == 3) {
		mainPage.style.display = "none"
		oferList.style.display = "none"
		myOferList.style.display = "flex"

		const link1 = document.querySelector("#link1")
		const link2 = document.querySelector("#link2")
		const link3 = document.querySelector("#link3")

		link1.innerHTML = "Головна"
		link2.innerHTML = "Офери"
		link3.innerHTML = "<span>Мої офери</span>"

		offerlistMy(myOffers)


	}
}
//Список для всех оферов
function offerlistAll(offers) {



	var oferList = document.querySelector("#ofer-list-all")



	const blockRemuve = document.querySelectorAll("#ofer-list__block-ALL")
	if (blockRemuve) {
		for (let i = 0; i < blockRemuve.length; i++) {
			blockRemuve[i].remove()
		}
	}


	for (let i = 0; i < offers.length; i++) {
		const offerBlock = document.createElement("div")
		offerBlock.className = "ofer-list__block"
		offerBlock.setAttribute("id", "ofer-list__block-ALL")

		const p1 = document.createElement("p")
		p1.className = "idlist"
		p1.innerHTML = offers[i].id

		const p2 = document.createElement("p")
		p2.innerHTML = offers[i].name

		const p3 = document.createElement("p")
		p3.className = "cost"
		p3.innerHTML = offers[i].cost

		const p4 = document.createElement("p")
		p4.innerHTML = offers[i].goal

		const p5 = document.createElement("p")
		p5.innerHTML = offers[i].country

		const p6 = document.createElement("p")
		p6.innerHTML = offers[i].language

		const button = document.createElement("button")
		button.setAttribute("onclick", `ask(${offers[i].id})`)
		button.className = "ofer-button"
		button.innerHTML = "Запросити"

		offerBlock.append(p1)
		offerBlock.append(p2)
		offerBlock.append(p3)
		offerBlock.append(p4)
		offerBlock.append(p5)
		offerBlock.append(p6)
		offerBlock.append(button)

		oferList.append(offerBlock)
	}






}
//Список для моих оферов
function offerlistMy(offers) {
	var oferList = document.querySelector("#my-ofer-list")

	const blockRemuve = document.querySelectorAll("#ofer-list__block-MY")
	if (blockRemuve) {
		for (let i = 0; i < blockRemuve.length; i++) {
			blockRemuve[i].remove()
		}
	}

	for (let i = 0; i < offers.length; i++) {
		const offerBlock = document.createElement("div")
		offerBlock.className = "ofer-list__block"
		offerBlock.setAttribute("id", "ofer-list__block-MY")


		const p1 = document.createElement("p")
		p1.className = "ofer"
		p1.innerHTML = `(${offers[i].id}) ${offers[i].name} `

		const p2 = document.createElement("p")
		p2.className = "cr"
		p2.innerHTML = offers[i].cr + "%"

		const p3 = document.createElement("p")
		p3.className = "hits"
		p3.innerHTML = offers[i].hit

		const p4 = document.createElement("p")
		p4.className = "hosts"
		p4.innerHTML = offers[i].host

		const div1 = document.createElement("div")
		div1.className = "color"
		const h11 = document.createElement("h3")
		h11.innerHTML = offers[i].lid[0]
		const h12 = document.createElement("h3")
		h12.innerHTML = offers[i].lid[1]
		const h13 = document.createElement("h3")
		h13.innerHTML = offers[i].lid[2]
		div1.append(h11)
		div1.append(h12)
		div1.append(h13)

		const div2 = document.createElement("div")
		div2.className = "color"
		const h21 = document.createElement("h3")
		h21.innerHTML = offers[i].lid[0]
		const h22 = document.createElement("h3")
		h22.innerHTML = offers[i].dep[1]
		const h23 = document.createElement("h3")
		h23.innerHTML = offers[i].dep[2]
		div2.append(h21)
		div2.append(h22)
		div2.append(h23)

		const div3 = document.createElement("div")
		div3.className = "color"
		const h31 = document.createElement("h3")
		h31.innerHTML = offers[i].finans[0]
		const h32 = document.createElement("h3")
		h32.innerHTML = offers[i].finans[1]
		const h33 = document.createElement("h3")
		h33.innerHTML = offers[i].finans[2]
		div3.append(h31)
		div3.append(h32)
		div3.append(h33)

		offerBlock.append(p1)
		offerBlock.append(p2)
		offerBlock.append(p3)
		offerBlock.append(p4)
		offerBlock.append(div1)
		offerBlock.append(div2)
		offerBlock.append(div3)


		oferList.append(offerBlock)
	}

}
//Сортировка по айди для общего списка
var aId = 1
function allId() {

	if (aId == 0) {

		offers.sort(function (a, b) {
			return a.id - b.id
		})
		aId++
		offerlistAll(offers)
	} else {
		offers.sort(function (a, b) {
			return b.id - a.id
		})
		aId--
		offerlistAll(offers)
	}


}
//Сортировка имени для общего списка
var aNa = 0
function allName() {

	if (aNa == 0) {

		offers.sort((a, b) => a.name > b.name ? 1 : -1)
		aNa++
		offerlistAll(offers)
	} else {
		offers.sort((a, b) => a.name < b.name ? 1 : -1)
		aNa--
		offerlistAll(offers)
	}



}
//Сортировка цены для общего списка
var aCo = 1
function allCost() {

	if (aCo == 0) {

		offers.sort(function (a, b) {
			return a.cost - b.cost
		})
		aCo++
		offerlistAll(offers)
	} else {
		offers.sort(function (a, b) {
			return b.cost - a.cost
		})
		aCo--
		offerlistAll(offers)
	}

}
//Сортировка целей для общего списка
var aGo = 0
function allGoal() {
	if (aGo == 0) {

		offers.sort((a, b) => a.goal > b.goal ? 1 : -1)
		aGo++
		offerlistAll(offers)
	} else {
		offers.sort((a, b) => a.goal < b.goal ? 1 : -1)
		aGo--
		offerlistAll(offers)
	}
}
//Сортировка стран
var aCountry = 0
function allCountry() {
	if (aCountry == 0) {

		offers.sort((a, b) => a.country > b.country ? 1 : -1)
		aCountry++
		offerlistAll(offers)
	} else {
		offers.sort((a, b) => a.country < b.country ? 1 : -1)
		aCountry--
		offerlistAll(offers)
	}
}
//Сортировка языка
var aLa = 0
function allLanguage() {
	if (aLa == 0) {

		offers.sort((a, b) => a.language > b.language ? 1 : -1)
		aLa++
		offerlistAll(offers)
	} else {
		offers.sort((a, b) => a.language < b.language ? 1 : -1)
		aLa--
		offerlistAll(offers)
	}
}
//Создаем окно вопроса
function ask(idOffer) {


	const windowSearch = document.querySelector(".window")
	if (windowSearch) windowSearch.remove()

	var selectedOffer

	for (let i = 0; i < offers.length; i++) {
		if (offers[i].id == idOffer) selectedOffer = offers[i]
	}


	const container = document.querySelector(".container")

	const window = document.createElement("div")
	window.className = "window"

	const title = document.createElement("h1")
	title.innerHTML = "Підтвердження оферу"

	const divImg = document.createElement("div")
	divImg.className = "divImg"

	const imgName = document.createElement("div")
	imgName.className = "imgName"

	const img = document.createElement("img")
	img.setAttribute("src", "img/ofer/img.png")

	const name = document.createElement("h2")
	name.innerHTML = selectedOffer.name

	const country = document.createElement("p")
	country.innerHTML = selectedOffer.country

	imgName.append(img)
	imgName.append(name)
	divImg.append(imgName)
	divImg.append(country)

	const info = document.createElement("p")
	info.className = "info"
	info.innerHTML = selectedOffer.info

	const divCost = document.createElement("div")
	divCost.className = "divCost"
	const infoCost = document.createElement("h3")
	infoCost.innerHTML = `Коштів буде заморожено:`
	const cost = document.createElement("h3")
	cost.innerHTML = `${selectedOffer.cost}$`

	divCost.append(infoCost)
	divCost.append(cost)

	const balance = document.createElement("h3")
	balance.className = "balanceDom"
	balance.innerHTML = `Баланс: ${user[idUser].balance}$`

	const buttonAdd = document.createElement("button")
	buttonAdd.setAttribute("onclick", `openBigInfo(${idOffer})`)
	buttonAdd.className = "buttonAdd"
	buttonAdd.innerHTML = `Підтвердити`

	const buttonclose = document.createElement("button")
	buttonclose.setAttribute("onclick", "closeWindow()")
	buttonclose.className = "buttonclose"
	buttonclose.innerHTML = `Закрити`

	window.append(title)
	window.append(divImg)
	window.append(info)
	window.append(divCost)
	window.append(balance)
	window.append(buttonAdd)
	window.append(buttonclose)

	container.append(window)
}
//Закрить окно
function closeWindow() {
	const windowSearch = document.querySelector(".window")
	if (windowSearch) windowSearch.remove()
}

//кнопка отправки
function buttonDone(idOffer) {

	const buttonAddSearch = document.querySelector(".buttonAdd")
	buttonAddSearch.innerHTML = "Відравлено ✔️"

	buttonAddSearch.setAttribute("class", "done")
	buttonAddSearch.setAttribute("onclick", "")

	const buttonclose = document.querySelector(".buttonclose")
	buttonclose.remove()

	setTimeout(() => {
		closeWindow()
	}, 4000);

	for (let i = 0; i < offers.length; i++) {
		if (offers[i].id == idOffer) user[idUser].balance -= offers[i].cost
		balanceUser()
	}



	setTimeout(() => {
		randomOffer(idOffer)
		balanceUser()
	}, 2000);


}

//Рандом наших оферов)
function randomOffer(idOffer) {



	var newOffer

	for (let i = 0; i < offers.length; i++) {
		if (offers[i].id == idOffer) newOffer = offers[i]
	}


	const crNewRandom = 600 + getRandomInt(2000)
	const hitRandom = crNewRandom - getRandomInt(500)

	const lidMath = []



	lidMath[2] = hitRandom - getRandomInt(200)
	lidMath[0] = (lidMath[2] / 2) - getRandomInt(10)
	lidMath[1] = (lidMath[0] / 2) - getRandomInt(20)


	const depMath = []

	depMath[2] = lidMath[2] / 2 - getRandomInt(10)
	depMath[1] = lidMath[1] / 2 - getRandomInt(10)
	depMath[0] = lidMath[0] / 2 - getRandomInt(10)

	const finansMath = []

	finansMath[2] = lidMath[2] * (20 + getRandomInt(50))
	finansMath[1] = lidMath[1] * (5 + getRandomInt(30))
	finansMath[0] = lidMath[0] * (5 + getRandomInt(30))



	const crMath = rounded(((lidMath[2] / crNewRandom) * 100) / (3 + getRandomInt(6)))



	myOffers[myOffers.length] = {
		id: newOffer.id,
		name: newOffer.name,
		cr: crMath,
		hit: crNewRandom,
		host: hitRandom,
		lid: lidMath,
		dep: depMath,
		finans: finansMath,
	}



	myOffers = myOffers.reduce((o, i) => {
		if (!o.find(v => v.id == i.id)) {
			o.push(i);

		}
		return o;
	}, []);

	user[idUser].balance += finansMath[2]

	myOffersMainMenu()




	var hit = 0, lid = 0, cr = 0, host = 0, dep = 0, proc = 0


	for (let i = 0; i < myOffers.length; i++) {

		const divhit = document.querySelector(".info-hit")
		const divlid = document.querySelector(".info-lid")
		const divcr = document.querySelector(".info-cr")
		const divhost = document.querySelector(".info-host")
		const divdep = document.querySelector(".info-dep")
		const divproc = document.querySelector(".info-reg")

		hit += myOffers[i].hit
		lid += myOffers[i].lid[2]
		cr += myOffers[i].cr
		host += myOffers[i].host
		dep += myOffers[i].dep[2]
		proc = 10 + getRandomInt(30)





		divhit.innerHTML = hit
		divlid.innerHTML = lid
		divcr.innerHTML = cr
		divhost.innerHTML = host
		divdep.innerHTML = dep
		divproc.innerHTML = proc


		data.datasets[0].data[7] = hit
		data.datasets[1].data[7] = lid
		data.datasets[2].data[7] = dep
		data.datasets[0].data[7] = proc
	}



}
//Рандомные числа
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
//сокращение до 10
function rounded(number) {
	return +number.toFixed(2);
}
//Вызов проверки нашего баланса
function returnBalanceUser() {
	balanceUser()
}
//Обновление баланса
function balanceUser() {
	const balanceUser = document.querySelectorAll(".balanceUser")
	for (let i = 0; i < balanceUser.length; i++) {
		balanceUser[i].innerHTML = `${user[idUser].balance}$`
	}
	setTimeout(() => {
		returnBalanceUser()

	}, 10000);
}

//Сортировка по айди для моего списка
var mId = 1
function myId() {

	if (mId == 0) {

		myOffers.sort(function (a, b) {
			return a.id - b.id
		})
		mId++
		offerlistMy(myOffers)
	} else {
		myOffers.sort(function (a, b) {
			return b.id - a.id
		})
		mId--
		offerlistMy(myOffers)
	}


}
//Сортировка по cr для моего списка
var mCr = 1
function myCr() {

	if (mCr == 0) {

		myOffers.sort(function (a, b) {
			return a.cr - b.cr
		})
		mCr++
		offerlistMy(myOffers)
	} else {
		myOffers.sort(function (a, b) {
			return b.cr - a.cr
		})
		mCr--
		offerlistMy(myOffers)
	}


}
//Сортировка по хостам для моего списка
var mHO = 1
function myhosts() {

	if (mHO == 0) {

		myOffers.sort(function (a, b) {
			return a.host - b.host
		})
		mHO++
		offerlistMy(myOffers)
	} else {
		myOffers.sort(function (a, b) {
			return b.host - a.host
		})
		mHO--
		offerlistMy(myOffers)
	}


}

//Сортировка по хитсам для моего списка
var mHi = 1
function myhits() {

	if (mHi == 0) {

		myOffers.sort(function (a, b) {
			return a.hit - b.hit
		})
		mHi++
		offerlistMy(myOffers)
	} else {
		myOffers.sort(function (a, b) {
			return b.hit - a.hit
		})
		mHi--
		offerlistMy(myOffers)
	}


}
//обновления списка моих оферов на главном меню
function myOffersMainMenu() {
	const advertisingInfo = document.querySelector(".advertising-info")

	const listInfoSearch = document.querySelectorAll(".list-info")



	if (listInfoSearch) {
		for (let i = 0; i < listInfoSearch.length; i++)listInfoSearch[i].remove()

	}



	if (myOffers) {
		for (let i = 0; i < myOffers.length; i++) {
			const listInfocreate = document.createElement("div")
			listInfocreate.className = "list-info"
			if (i % 2 == 0) {
				const block1 = document.createElement("div")
				block1.className = "block"

				const blockImg1 = document.createElement("div")
				blockImg1.className = "block-img"

				const img1 = document.createElement("img")
				img1.setAttribute("src", "img/ofer/ofer.png")
				img1.setAttribute("alt", "иконка")

				blockImg1.append(img1)

				const text1 = document.createElement("div")
				text1.className = "text"

				const text1h4 = document.createElement("h4")
				text1h4.innerHTML = myOffers[i].name

				const text1p = document.createElement("p")
				text1p.className = "text"
				text1p.innerHTML = "Крипта"

				text1.append(text1h4)
				text1.append(text1p)

				block1.append(blockImg1)
				block1.append(text1)

				listInfocreate.append(block1)


				if (myOffers[i + 1]) {
					const block2 = document.createElement("div")
					block2.className = "block"

					const blockImg2 = document.createElement("div")
					blockImg2.className = "block-img"

					const img2 = document.createElement("img")
					img2.setAttribute("src", "img/ofer/ofer.png")
					img2.setAttribute("alt", "иконка")

					blockImg2.append(img2)

					const text2 = document.createElement("div")
					text2.className = "text"

					const text2h4 = document.createElement("h4")
					text2h4.innerHTML = myOffers[i + 1].name

					const text2p = document.createElement("p")
					text2p.className = "text"
					text2p.innerHTML = "Крипта"

					text2.append(text2h4)
					text2.append(text2p)

					block2.append(blockImg2)
					block2.append(text2)

					listInfocreate.append(block2)
				}



				advertisingInfo.append(listInfocreate)

			}
		}
	}


}

function openBigInfo(id) {

	buttonDone(id)

	setTimeout(() => {

		const bigWindow = document.querySelector(".window-big-list")
		bigWindow.style.display = "flex"

		const title = document.querySelector("#name-title")

		for (let i = 0; i < offers.length; i++) {
			if (offers[i].id == id) {
				title.innerHTML = offers[i].name


			}
		}

	}, 4000);






}

function closeBigWindow() {
	const bigWindow = document.querySelector(".window-big-list")

	bigWindow.style.display = "none"
}






















