// JavaScript is used to handle the carousel functionality

const carouselItems = document.querySelector('.carousel-items');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

function showItem(index) {
  const items = document.querySelectorAll('.carousel-item');

  items.forEach((item) => {
    item.classList.remove('active');
  });

  items[index].classList.add('active');
}

function nextSlide() {
  currentIndex++;

  if (currentIndex >= carouselItems.children.length) {
    currentIndex = 0;
  }

  showItem(currentIndex);
}

function prevSlide() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = carouselItems.children.length - 1;
  }

  showItem(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

showItem(currentIndex); // Show the initial slide
