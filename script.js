document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.querySelector(".nav-button");

  navButton.addEventListener("click", (e) => {
    const landing = document.querySelector(".landing");
    const options = document.querySelector(".options");

    landing.classList.toggle("under");
    options.classList.toggle("under");
 
  });
});
