document.addEventListener("DOMContentLoaded", function () {
  const sidenav = document.getElementById("mySidenav");
  const hamburger = document.getElementById("hamburger-toggle");

  if (window.innerWidth > 640) {
    // Only collapse on larger screens
    const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
    sidenav.classList.toggle("collapsed", isCollapsed);
  }

  // Mobile: toggle open class
  hamburger.addEventListener("click", () => {
    sidenav.classList.toggle("mobile-open");
  });

  // Close sidebar on link click (mobile only)
  sidenav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 640) {
        sidenav.classList.remove("mobile-open");
      }
    });
  });
});

function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  const isCollapsed = sidenav.classList.toggle("collapsed");
  localStorage.setItem("sidebarCollapsed", isCollapsed);
}

document.querySelectorAll(".experience-flip").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.closest(".faq-item");
      faqItem.classList.toggle("active");
    });
  });
});
