// Modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".gallery-item img");
const backBtn = document.getElementById("backBtn");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

backBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fade in/out gallery title
function loopFadeTitle() {
  const title = document.querySelector('.gallery-title');

  function fadeIn() {
    title.style.transition = 'opacity 1.5s, transform 1.5s';
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
    setTimeout(fadeOut, 3000);
  }

  function fadeOut() {
    title.style.transition = 'opacity 1.5s, transform 1.5s';
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    setTimeout(fadeIn, 1500);
  }

  fadeIn();
}

loopFadeTitle();
