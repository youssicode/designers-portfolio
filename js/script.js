/** ====== Responsive NavBar ======= */
let burger = document.querySelector(".burger")
let navBar = document.querySelector(".links")
burger.onclick = ()=> navBar.classList.toggle("active")

/** ===== Search Bar ===== */
let searchFeild = document.querySelector('[name="search-field"]')
searchFeild.onfocus = ()=> searchFeild.classList.add("show")
searchFeild.onblur = ()=> searchFeild.classList.remove("show")

/** ===== Slideshow ===== */ 
let slidesWrapper = document.querySelector(".slides-wrapper")
let slidersPosBtns = document.querySelectorAll(".slider-pos span")
slidersPosBtns.forEach((btn,index,btns) => {
    btn.addEventListener("click", ()=> {
        homeSlideRender(index,btns)
    })
})

let currentSlide = 0
let slideNext = document.querySelector(".slide-next")
let slidePrev = document.querySelector(".slide-prev")
slideNext.addEventListener("click", slidNext)
slidePrev.addEventListener("click", slidPrev)

function slidNext() {
    // ==== To Prevent loop sliding ===
    if (currentSlide == 2) return
    homeSlideRender( currentSlide + 1 ,slidersPosBtns)
    currentSlide = (currentSlide + 1) % slidersPosBtns.length
}
function slidPrev() {
    // if (currentSlide == 0) currentSlide = 3
    // ==== To Prevent loop sliding ===
    if (currentSlide == 0) return 
    homeSlideRender(currentSlide - 1 ,slidersPosBtns)
    currentSlide --
}
function homeSlideRender(position,btns) {
    console.log(position)

    btns.forEach((el,indx) => indx != position? el.classList.remove("active") : el.classList.add("active")) // Remove the "active" class from the other buttons.
    slidesWrapper.classList.remove("active0","active1","active2")
    slidesWrapper.classList.add(`active${position}`)
}

//* Portfolio Section */


// Portfolio Items Generator

let  portfolioProjectsCategories = ["print web","photo web", "photo","print app","web app","photo print","app","photo","photo app"]
let itemTemplate = document.getElementsByTagName("template")[0]
let portfolioGallery = document.querySelector(".gallery")
let itemsNbr = 6
let startcounter = 1

renderItems(startcounter,itemsNbr+1)

// Add More Items to The Gallery
let moreBtn = document.querySelector(".more-items")
moreBtn.onclick = ()=> {
    sortItems("all") // Display Initial Items befor Adding New Ones
    addItems()
    moreBtn.setAttribute("disabled", "")
}
function  addItems() {
    startcounter = itemsNbr + 1
    itemsNbr += 3
    renderItems(startcounter,itemsNbr+1)
}
function  renderItems(start,end) {
    for (let i = start; i < end ; i++) {
        let cloned = itemTemplate.content.cloneNode(true) // Remove ".content" if u clone ".gall-item" bloc directly (without using "template" Tag)
        cloned.querySelector(".gall-item").setAttribute("data-categorie", portfolioProjectsCategories[i-1]) 
        i = i.toLocaleString('en-US',{minimumIntegerDigits:2}) // 01 , 02, ... SEE MORE ABOUT .toLocaleString HERE: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
        // i = i.toLocaleString('ar-SA',{minimumIntegerDigits:2}) // ٠١ , ٠٢
        let imgSource = `./images/shuffle-${i}.jpg` // we can avoid the line above by removing zeros from ths photos' names!
        cloned.querySelector("img").src = imgSource
        portfolioGallery.appendChild(cloned)
    }
}

// Sorting projects by categories

let sortBtns = document.querySelectorAll("li[data-categorie]")
sortBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        sortItems(btn.dataset.categorie) 
    })
})
function  sortItems(categ) {
    let galleryItems = document.querySelectorAll(".gall-item")
    galleryItems.forEach(item => {
        item.classList.remove("hide")
        if ((categ != "all") && (!item.dataset.categorie.includes(categ))) item.classList.add("hide")
    })
}


// for (let i = startcounter; i < itemsNbr+1 ; i++) {
//     let cloned = itemTemplate.content.cloneNode(true) // Remove ".content" if u clone ".gall-item" bloc directly (without using "template" Tag)
//     cloned.querySelector(".gall-item").setAttribute("data-categorie", portfolioProjectsCategories[i-1]) 
//     i = i.toLocaleString('en-US',{minimumIntegerDigits:2}) // 01 , 02, ... SEE MORE ABOUT .toLocaleString HERE: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
//     let imgSource = `./images/shuffle-${i}.jpg` // we can avoid the line above by removing zeros from ths photos' names!
//     cloned.querySelector("img").src = imgSource
//     portfolioGallery.appendChild(cloned)
// }
