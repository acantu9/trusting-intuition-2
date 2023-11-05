let slideshow = document.getElementById('slideshow');
let images = slideshow.getElementsByTagName('img');
let currentIndex = 0;

function changeImage() {
 images[currentIndex].style.opacity = 0;
 currentIndex = Math.floor(Math.random() * images.length);
 images[currentIndex].style.opacity = 1;
}

setInterval(changeImage, 3000); // Change image every 3 seconds