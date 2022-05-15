let burger = document.querySelector(".burger")
let navBar = document.querySelector(".links")
burger.onclick = ()=> navBar.classList.toggle("active")

let slidesWrapper = document.querySelector(".slides-wrapper")
let slidersPosBtns = document.querySelectorAll(".slider-pos span")
slidersPosBtns.forEach((btn,index,btns) => {
    btn.addEventListener("click", ()=> {
        homeSlideRender(index,btns)
    })
})

let currentSlide = 0;
let slideNext = document.querySelector(".slide-next")
let slidePrev = document.querySelector(".slide-prev")
slideNext.addEventListener("click", slidNext)
slidePrev.addEventListener("click", slidPrev)

function slidNext() {
    if (currentSlide == 2) currentSlide = -1
    homeSlideRender( currentSlide +1  ,slidersPosBtns)
    currentSlide ++
}
function slidPrev() {
    if (currentSlide == 0) currentSlide = 3
    homeSlideRender(currentSlide -1 ,slidersPosBtns)
    currentSlide --
}
function homeSlideRender(position,btns) {
    btns.forEach((el,indx) => indx != position? el.classList.remove("active") : el.classList.add("active")) // Remove the "active" class from the other buttons.
    slidesWrapper.classList.remove("active0","active1","active2")
    slidesWrapper.classList.add(`active${position}`)
}