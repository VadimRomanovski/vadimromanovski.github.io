document.addEventListener("scroll", (e) => {
    const sections = document.querySelectorAll("section");
    const navigationLinks = document.querySelectorAll(".navigation_link");
    const currentPos = scrollY;
    const header = document.querySelector("header");
    currentPos >= 200 ? header.classList.add("header-height") : header.classList.remove("header-height")
    sections.forEach(section => {
        if(section.offsetTop <= currentPos && (section.offsetTop + section.offsetHeight) > currentPos){
            navigationLinks.forEach(item => {
                item.classList.remove("active");
                if(section.getAttribute("id") === item.getAttribute("href").substring(1)){
                    item.classList.add("active")
                }

            })
        }
    })
    
})

const portfolioTags = document.querySelector(".portfolio_tags")
const imgsContainer = document.querySelector(".portfolio_imgs-container")
portfolioTags.addEventListener("click", e => {
    e.preventDefault();
    if(e.target.tagName == "A"){
        portfolioTags.querySelectorAll("a").forEach(item => {
            item.classList.remove("active_tag");
            let allImgs = [...imgsContainer.querySelectorAll("img")]
            let lastImg = allImgs.pop();
            allImgs.unshift(lastImg)
            imgsContainer.innerHTML = '';
            allImgs.forEach(element => {
                imgsContainer.appendChild(element)
            });
        })
    }
    
    e.target.classList.add("active_tag");
});

imgsContainer.addEventListener("click", e => {
    imgsContainer.querySelectorAll("img").forEach(item => {
        item.classList.remove("active_img");
    })
    e.target.classList.add("active_img");
});

const form = document.querySelector("form");
const modal = document.querySelector(".modal");
const modalSubject = document.querySelector(".modal_subject")
const modalDescribe = document.querySelector(".modal_describe")
const submitBtn = document.querySelector("#submit");
const modalStatus = document.querySelector(".modal_status")

const send = (form) => {
    modal.style.display = "flex";
    const modalButton = modal.querySelector("button");
    let subject = form.subject.value;
    let describe = form.describe.value;
    let name = form.name.value;
    let email = form.email.value;

    if(!subject){
        modalSubject.innerHTML = "Без темы";
    }else{
        modalSubject.innerHTML = `Тема: ${subject}`;
    };

    if(!describe){
        modalDescribe.innerHTML = "Без описания";
    }else{
        modalDescribe.innerHTML = `Описание: ${describe}`;
    };

    modalButton.addEventListener("click", () => {
        modal.style.display = "none";
        form.subject.value = "";
        form.describe.value = "";
        form.name.value = "";
        form.email.value = "";
    })
};

submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    send(form);    
});

const phoneButton = document.querySelector(".phone_button");
const leftScreen = document.querySelector(".left-phone_black-screen");
phoneButton.addEventListener("click", () => leftScreen.classList.toggle("show"));

const phoneButtonRight = document.querySelector(".phone_button_right");
const rightScreen = document.querySelector(".right-phone_black-screen")
phoneButtonRight.addEventListener("click", () => rightScreen.classList.toggle("show"))

let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active-slide', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active-slide');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.left').addEventListener('click', function(e) {
    e.preventDefault();
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.right').addEventListener('click', function(e) {
    e.preventDefault();
	if (isEnabled) {
		nextItem(currentItem);
	}
});


// console.log(modalButton)


