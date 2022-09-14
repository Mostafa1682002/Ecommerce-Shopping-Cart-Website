let menu = document.querySelector('.fa-bars');
let nav = document.querySelector('nav');
let allLinksBar = document.querySelectorAll('.links li');
let overlay = document.querySelector('.overlay');


menu.onclick = function() {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
};

allLinksBar.forEach((e) => {
    e.addEventListener('click', () => {
        allLinksBar.forEach((e) => e.classList.remove('active'));
        e.classList.add('active');
        menu.classList.remove('fa-times');
        overlay.classList.remove('active');
    })
})

overlay.onclick = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
    overlay.classList.remove('active');
}


window.onscroll = function() {
    if (window.scrollY > 120) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
}




function showDetails(e) {
    e.onclick = function()  {
        location.href = 'detalis.html';
    }
}



//All Products
let allProduct = document.querySelectorAll(".box");
allProduct.forEach((product) => {
    product.addEventListener('click', showDetails(product));
})



//Detalis Product 
let cureentImge = document.querySelector('.curent-imges');
let allImgs = document.querySelectorAll('.srcImg img');
//Change CurrentImge If Click A Imge
allImgs.forEach((img) => {
    img.addEventListener('click', () => {
        cureentImge.src = img.src;
    })
});


let year = document.querySelector('.right .year');
year.innerHTML = new Date().getFullYear();
