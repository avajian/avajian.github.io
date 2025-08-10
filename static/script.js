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
  sidenav.querySelectorAll("a").forEach(link => {
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


document.querySelectorAll('.experience-flip').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      faqItem.classList.toggle('active');
    })
  })
})

mapboxgl.accessToken = 'pk.eyJ1IjoiYXZhamlhbiIsImEiOiJjbHlsbGN1amIwOXZ1MmxwdGViNjViMnJ5In0.sVYPr8-7GCyerx3GDZP8gw';

const previewMap = new mapboxgl.Map({
  container: 'map-preview',
  style: 'mapbox://styles/mapbox/light-v11',
  projection: 'globe',
  zoom: 1,
  center: [0, 20],
  interactive: false // no zoom/pan in preview
});

previewMap.on('style.load', () => {
  previewMap.setFog({}); // globe atmosphere
});

// Spin animation
let spinAngle = 0;
function spinGlobe() {
  spinAngle += 0.04; // rotation speed
  previewMap.setCenter([spinAngle, 20]);
  requestAnimationFrame(spinGlobe);
}
spinGlobe();
