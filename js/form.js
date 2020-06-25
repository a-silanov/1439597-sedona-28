var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".search-container");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
