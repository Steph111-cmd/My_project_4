// Select all quotes and dots
const slides = document.querySelectorAll('.quote');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

// Function to go to the next slide
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

// Initial display
showSlide(slideIndex);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Click dots to navigate manually
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});
