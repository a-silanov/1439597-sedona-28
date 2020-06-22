var link=document.querySelector(".hotel-form");
var popup=document.querySelector(".search-form");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
