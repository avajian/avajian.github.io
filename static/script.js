document.addEventListener("DOMContentLoaded", function () {
  const sidenav = document.getElementById("mySidenav");

  // Check saved state on load
  const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
  if (!isCollapsed) {
    sidenav.classList.remove("collapsed"); // Open by default
  } else {
    sidenav.classList.add("collapsed"); // Collapse if saved
  }
});

function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  const isCollapsed = sidenav.classList.toggle("collapsed");

  // Save state in localStorage
  localStorage.setItem("sidebarCollapsed", isCollapsed);
}

document.querySelectorAll('.experience-flip').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("hamburger-toggle");
  const dropdownMenu = document.getElementById("mobileDropdown");

  toggleButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("collapsed");
  });

  // Optional: auto-close when clicking a link
  dropdownMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      dropdownMenu.classList.add("collapsed");
    });
  });
});