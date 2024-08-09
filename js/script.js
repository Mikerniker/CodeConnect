// Get the modal
const modal = document.getElementById("searchModal");

// Get the button that opens the modal
const modalButton = document.getElementById("openSearchModal");

// Get the <span> element that closes the modal
const closeButton = document.getElementsByClassName("modal__close-button");

// When the user clicks the button, open the modal 
modalButton.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spcloseButton.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}