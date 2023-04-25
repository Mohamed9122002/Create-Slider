// get slider items
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
// get numbers of slider
let slidesCount = sliderImages.length;
// set current slide
let currentSlide = 1;
// slide number element
let slideNumber = document.getElementById("slide-number");
// previous and next buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
// handel click on prev and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
// create the main ul element 
let createElementUl = document.createElement("ul");
// set id on created ul element 

createElementUl.setAttribute("id", "create-ul");
// create list items based on slider  count
for (let i = 1; i <= slidesCount;i++){
    // create the li
    let createElementLi = document.createElement("li");
    // set custom attribute
    createElementLi.setAttribute("data-index", i);
    // set item content
    createElementLi.appendChild(document.createTextNode(i));
    // append items to the main ul list 
    createElementUl.appendChild(createElementLi);

}
// add the created ul element to the page
document.getElementById("indicators").appendChild(createElementUl);
// get the new created ul
let createdUL = document.getElementById("create-ul");
//console.log(createdUL);

let createBullets = Array.from(document.querySelectorAll("#create-ul li"))

for (let i = 0; i < createBullets.length;i++){
    createBullets[i].onclick = function () {
        currentSlide = parseInt(createBullets[i].getAttribute("data-index"));
        theChecker();
    }
}

// trigger the checker               
theChecker();


// next slide function
function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
        return false
    } else {
        currentSlide++;
        theChecker();
    }
}
// prev slide function
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
    return false
    } else {
        currentSlide--;
        theChecker();
}
}
// create the checker function 
function theChecker() {
    
    // set the slide number
    slideNumber.textContent = "Slide # " + (currentSlide) + " of " + (slidesCount);
    // remove all active classes
    removeAllActive();
    // set active class on current slide
    sliderImages[currentSlide - 1].classList.add("active");

    // set active class on current create-ul item
    createdUL.children[currentSlide - 1].classList.add("active");
   

    // check if current slide is the first
    if (currentSlide==1) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }
      // check if current slide is the last
    if (currentSlide == slidesCount) {

        // add disabled class on next button
        nextButton.classList.add("disabled");

    } else {

        // remove disabled class from next button
        nextButton.classList.remove('disabled');

    }

}
// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

    // loop through images
    sliderImages.forEach(function (img) {

        img.classList.remove("active");

    });
    //loop through create bullets
    createBullets.forEach(function (bullet) {
        bullet.classList.remove("active")
    });
}
