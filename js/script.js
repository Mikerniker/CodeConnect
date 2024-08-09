const modal = document.getElementById("searchModal");
const modalButton = document.getElementById("openSearchModal");
const closeButton = document.getElementById("closeModal");

modalButton.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}