let slideIndex = 1;

showSlides(slideIndex)

function nextSlide(n) {

    showSlides(slideIndex += n);

}

function prevSlide(n) {
    showSlides(slideIndex -= n);
}

function showSlides(n) {
    

    slides = document.getElementsByClassName("Myslides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < slideIndex) {
        slideIndex = slides.length
    }


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"

    }
    slides[slideIndex - 1].style.display = "block";
}

let count = 1;


displayCount(count);

function incCount(x) {
    count = count + 1;
    console.log(count);
    displayCount(count);

}

function decCount() {
    if (count<=0) {
        count = 0;
    }
    else{
        count = count - 1;

    }
    displayCount(count);
}

function displayCount(count) {
    const box = document.getElementById('count');
    box.innerHTML = count;

}

let orderNo=0;

function order(x) {
    
    const cart = document.getElementById("orderNumber");
    orderNo = orderNo + 1;
    cart.innerHTML = orderNo;
}

function displayMenu() {
    const menu =document.getElementById('menu');

    menu.style.display = "block";
}



function displayCart( ) {
    const crt =document.getElementById("displayCart");

    crt.style.display = "block"
}


function dispplayImage(src) {
    slides = document.getElementsByClassName("Myslides");

    slides.img.src ="src";

}