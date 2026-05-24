document
  .querySelector(".sparkle a")
  .addEventListener("click", function (event) {
    // Prevents the page from reloading or navigating if it's an empty link
    event.preventDefault();

    document.body.classList.toggle("dark-mode");
  });

document
  .querySelector("#dark-mode")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      this.textContent = "✰ Light mode";
    } else {
      this.textContent = "✰ Dark mode";
    }
  });
