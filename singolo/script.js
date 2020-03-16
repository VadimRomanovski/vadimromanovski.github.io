const navigation = document.getElementById("navigation")
navigation.addEventListener("click", e => {
    navigation.querySelectorAll("a").forEach((item) => {
        item.classList.remove("active");
    })
    e.target.classList.add("active");
})
console.log(navigation)

const portfolioTags = document.querySelector(".portfolio_tags")
const imgsContainer = document.querySelector(".portfolio_imgs-container")
portfolioTags.addEventListener("click", e => {
    e.preventDefault();
    portfolioTags.querySelectorAll("a").forEach(item => {
        item.classList.remove("active_tag");
    })
    let allImgs = [...imgsContainer.querySelectorAll("img")]
    let lastImg = allImgs.pop();
    allImgs.unshift(lastImg)
    imgsContainer.innerHTML = '';
    allImgs.forEach(element => {
        imgsContainer.appendChild(element)
    });
    e.target.classList.add("active_tag");
});

imgsContainer.addEventListener("click", e => {
    imgsContainer.querySelectorAll("img").forEach(item => {
        item.classList.remove("active_img");
    })
    e.target.classList.add("active_img");
});

const form = document.querySelector("form");
// const name = form.name.value;
// const email = form.email.value;
const modal = document.querySelector(".modal");
const modalSubject = document.querySelector(".modal_subject")
const modalDescribe = document.querySelector(".modal_describe")
const submitBtn = document.querySelector("#submit");

const send = (form) => {
    modal.style.display = "flex";
    const modalButton = modal.querySelector("button");
    let subject = form.subject.value;
    let describe = form.describe.value;
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

    modalButton.addEventListener("click", () => modal.style.display = "none")
};

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    send(form);    
});

const phoneButton = document.querySelector(".phone_button");
const leftScreen = document.querySelector(".left-phone_black-screen");
phoneButton.addEventListener("click", () => leftScreen.classList.toggle("show"));

const phoneButtonRight = document.querySelector(".phone_button_right");
const rightScreen = document.querySelector(".right-phone_black-screen")
phoneButtonRight.addEventListener("click", () => rightScreen.classList.toggle("show"))

const arrowsSlider = document.querySelectorAll(".arrow");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
arrowsSlider.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        slider.classList.toggle("second_slider_bg");
        slides.forEach((item) => {
            item.classList.toggle("show_slide");
        })
    })
})


// console.log(modalButton)


