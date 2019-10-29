filesForSlides = [{
		image: "img/slider/HologramKing.jpg",
		published: "12.05.2016",
		raiting: "6.1",
		link: "https://www.youtube.com/embed/XNKGgnCm0bU?controls=0"
	},
	{
		image: "img/slider/malifisenta.jpg",
		published: "16.10.2019",
		raiting: "7.1",
		link: "https://www.youtube.com/embed/284iTs0WGsg?controls=0"
	},
	{
		image: "img/slider/onectimeuponhollywood.jpg",
		published: "21.05.2019",
		raiting: "7.7",
		link: "https://www.youtube.com/embed/zw81ihoukKU?controls=0"
	}
];
const filmData = [{
		name: "Spider man homecoming",
		imdb: "7.4",
		realised: "06.07.2017",
		img: "img/spiderman.jpg",
		link: "https://www.youtube.com/embed/8wNgphPi5VM"
	},
	{
		name: "Inferno",
		imdb: "6.2",
		realised: "13.11.2016",
		img: "img/inferno.jpg",
		link: "https://www.youtube.com/embed/RH2BD49sEZI"
	},
	{
		name: "Stockholm",
		imdb: "6.2",
		realised: "19.04.2018",
		img: "img/stockholm.jpg",
		link: "https://www.youtube.com/embed/m8JqB8skMFQ"
	},
	{
		name: "Green book",
		imdb: "8.2",
		realised: "24.01.2019",
		img: "img/greenbook.jpg",
		link: "https://www.youtube.com/embed/e6b9urtUJt0"
	},
	{
		name: "Ad Astra",
		imdb: "7.0",
		realised: "26.09.2019",
		img: "img/adastra.jpg",
		link: "https://www.youtube.com/watch?v=P6AaSMfXHbA"
	},
	{
		name: "Avengers: Endgame",
		imdb: "8.5",
		realised: "29.04.2019",
		img: "img/marvel.jpg",
		link: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
	},
	{
		name: "Toy Story 4",
		imdb: "8",
		realised: "11.06.2019",
		img: "img/toystory.jpg",
		link: "https://www.youtube.com/watch?v=wmiIUN-7qhE"
	},
	{
		name: "Bohemian rhapsody",
		imdb: "8",
		realised: "01.10.2018",
		img: "img/rapsody.jpg",
		link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
	},
	{
		name: "Vice",
		imdb: "7.2",
		realised: "21.02.2019",
		img: "img/vice.jpg",
		link: "https://www.youtube.com/watch?v=aSGFt6w0wok"
	},
	{
    name: "Spider man homecoming",
		imdb: "7.4",
		realised: "06.07.2017",
		img: "img/spiderman2.jpg",
		link: "https://www.youtube.com/embed/8wNgphPi5VM"
	}
];
const slider = document.querySelector(".slider");
const fragment = new DocumentFragment();

filesForSlides.forEach(function (item, index) {
	const img = document.createElement("img");
	img.classList.add("sliderimgs", "active", "fade");
	img.setAttribute("src", item.image);
	fragment.append(img);
});

slider.append(fragment);
const imgs = document.getElementsByClassName('sliderimgs');
const publishDate = document.querySelector(".date");
const raiting = document.querySelector(".raiting");
const butttonSlider = document.querySelector(".sliderBtn");
let currentImgs = 0;

function startSlider() {
	for (let i = 0; i < imgs.length; i++) {

		imgs[i].classList.add('opacityforslider');
		publishDate.innerText = filesForSlides[currentImgs].published;
		raiting.innerText = filesForSlides[currentImgs].raiting;
	};
	imgs[currentImgs].classList.remove('opacityforslider');
	butttonSlider.setAttribute("href", filesForSlides[currentImgs].link)
	currentImgs++;
	if (currentImgs == imgs.length) {
		currentImgs = 0;
	};

};
startSlider();
setInterval(startSlider, 5000);
const modal = document.querySelector(".modal")
const youtube = document.querySelector("iframe")
butttonSlider.addEventListener("click", function (e) {
	e.preventDefault();
	modal.style.display = "block";
	value = e.target.href;
	console.log(value)
	youtube.setAttribute("src", value);
	console.log(youtube)
});
modal.addEventListener("click", function () {
	modal.style.display = "none";
	youtube.removeAttribute("src");
});
// console.log(youtube)

const main = document.querySelector("main");
const fragmentItems = new DocumentFragment();

function createFilmsData(a) {
	main.innerHTML = "";
	a.forEach(function (item, index) {
    const itemFilm = document.createElement("div");
    itemFilm.style.backgroundImage = "url("+item.img+")"
    itemFilm.classList.add("filmItem");
    itemFilm.innerHTML = `
<div class="play">
    <i class="far fa-play-circle"></i>
</div>
<div class="nameFilm">
  <p class="name">${item.name}</p>
  <p>IMDB: <span class="imdb">${item.imdb}</span></p>
  <p>Realised: <span>${item.realised}</span></p>
</div>
 `
//  <img src="${item.img}" alt="${item.name}">
		const play = itemFilm.querySelector(".play");
		itemFilm.onmouseover = function () {
			play.innerHTML = "Watch Trailer <i class='far fa-play-circle'></i>"
			play.classList.add("playActive");
		};
		itemFilm.onmouseout = function () {
			play.classList.remove("playActive");
			play.innerHTML = "<i class='far fa-play-circle'></i>"
		};
		itemFilm.onclick = function () {
			let linking = item.link;
			modal.style.display = "block";
			youtube.setAttribute("src", linking);
		}
		fragmentItems.append(itemFilm);
	});
	main.append(fragmentItems);
};


createFilmsData(filmData)


const sortMenu = document.querySelectorAll(".sort span");


sortMenu.forEach(function (item) {
	const value = item.innerText;
	item.onclick = function () {
		if (value == "Name ") {
			let sortFilmAb = filmData.sort(function compare(a, b) {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
			createFilmsData(sortFilmAb)
		}
		if (value == "IMDB ") {
			let sortFilmIMDB = filmData.sort(function compare(a, b) {
				return b.imdb - a.imdb
			});
			createFilmsData(sortFilmIMDB)
		}
		if (value == "Realised") {

			let sortFilmRealised = filmData.sort(function compare(a, b) {
        a = new Date(b.date) 
        b = new Date(a.date)
        return b - a
      });
			createFilmsData(sortFilmRealised)
		}
		//console.log(value)

	}
})

const input = document.querySelector("input")
input.addEventListener('input', function () {
	const filterFilmItems = filmData.filter(function (item) {
		return item.name.toLowerCase().includes(input.value.toLowerCase());
	})
	createFilmsData(filterFilmItems)
})