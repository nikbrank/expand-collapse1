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

// document.addEventListener("click", (e) => {
//   if (!e.target.matches(".expand-button")) return;

//   const card = e.target.closest(".card");
//   const cardBody = card.querySelector(".card-body");

//   cardBody.classList.toggle("show");
//   e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"; // Ako se innerText slaze sa expand, napisi collapse, ako jeste expand ostavi expand
// });
