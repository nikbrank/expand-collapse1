const button = document.querySelectorAll(".expand-button");

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    const text = e.target.closest(".card-header");
    if (!text.nextElementSibling.classList.contains("show")) {
      text.nextElementSibling.classList.remove("hidden");
      text.nextElementSibling.classList.add("show");
      button.innerHTML = "Collapse";
    } else {
      text.nextElementSibling.classList.remove("show");
      text.nextElementSibling.classList.add("hidden");
      button.innerHTML = "Expand";
    }
  });
});
