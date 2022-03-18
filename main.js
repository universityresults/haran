let button = document.querySelector("input[type = button]");
let id = document.querySelector("input[type = id]");
let password = document.querySelector("input[type = password]");
let img = document.querySelector("img");

button.addEventListener("click", (_) => {
  if (id.value !== "" && button.value !== "") {
    img.style.display = "block";
  }
});
