const modal = document.getElementById("myModal");
const btn = document.querySelector(".play");
let span = document.querySelector(".close__modal");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});
