/**
 * Script to specify how many images are shown on each viewport
 *
 * Gets all the images tagged as 'grid-item', then hides or shows
 * the image based on the current index and items per page. Only
 * shows the necessary navigation arrows
 */

const gridItems = document.querySelectorAll(".grid-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const counterEl = document.querySelector(".gallery-counter"); // 1. Select the counter
let currentIndex = 0;

function getItemsPerPage() {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    return 6; // Laptop
  }
  if (window.matchMedia("(min-width: 640px)").matches) {
    return 4; // iPad / Tablet
  }
  return 1; // Mobile
}

function updateGallery() {
  const itemsPerPage = getItemsPerPage();

  if (currentIndex >= gridItems.length) {
    currentIndex = Math.max(0, gridItems.length - itemsPerPage);
  }

  gridItems.forEach((item, index) => {
    if (index >= currentIndex && index < currentIndex + itemsPerPage) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });

  if (gridItems.length > 0) {
    const displayEnd = Math.min(currentIndex + itemsPerPage, gridItems.length);
    counterEl.textContent = `${currentIndex + 1}-${displayEnd} of ${gridItems.length}`;
  } else {
    counterEl.textContent = "0 of 0";
  }

  if (currentIndex === 0) {
    prevBtn.classList.add("btn-invisible");
  } else {
    prevBtn.classList.remove("btn-invisible");
  }

  if (currentIndex + itemsPerPage >= gridItems.length) {
    nextBtn.classList.add("btn-invisible");
  } else {
    nextBtn.classList.remove("btn-invisible");
  }
}

prevBtn.addEventListener("click", () => {
  const itemsPerPage = getItemsPerPage();
  currentIndex -= itemsPerPage;
  if (currentIndex < 0) currentIndex = 0;
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  const itemsPerPage = getItemsPerPage();
  if (currentIndex + itemsPerPage < gridItems.length) {
    currentIndex += itemsPerPage;
  }
  updateGallery();
});

window.addEventListener("resize", updateGallery);
updateGallery();
