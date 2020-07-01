var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".search-container");
var arrivingDate = popup.querySelector(".arriving");
var departureDate = popup.querySelector(".departure");
var form = popup.querySelector(".search-form");
link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
	arrivingDate.focus();
});
form.addEventListener("submit", function(evt) {
	if (!arrivingDate.value || !departureDate.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	}
});



