var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".search-container");
var arrivingDate = popup.querySelector("[name=date]");
var form = popup.querySelector("search-form"); 

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  arrivingDate.focus();
});

form.addEventListener("submit", function () {
  console.log("Отправляем форму");
});
