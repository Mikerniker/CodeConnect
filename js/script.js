// MODAL 

const modal = document.getElementById("searchModal");
const modalButton = document.getElementById("openSearchModal");
const closeButton = document.getElementById("closeModal");

// MODAL FUNCTIONS
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


// Fries Menu
const logoImage = document.getElementById("ipsumLogo"); 
const friesButton = document.getElementById("friesButton");
const friesIcon = document.getElementById("friesIcon");
const navigation = document.getElementById("navMenu");
const enquiryButton = document.getElementById("enquiryButton"); 

const searchImage = document.getElementById("searchIconImage"); 


// Image Paths
const friesMenuIconPath = "../images/components/fries-menu.svg";
const closeIconPath = "../images/atoms/close.svg";
const ipsumLogoPath = "../images/atoms/logoipsum.svg";
const livertyLogoPath = "../images/blocks/livertylogo.svg";

friesButton.onclick = function() {
  if (navigation.style.display === "flex") {
    navigation.style.display = "none";
    searchImage.style.display = "flex";

    // Switch to fries icon
    friesIcon.src = friesMenuIconPath; 
    friesIcon.alt = "fries menu icon"; 

    // Switch to Ipsum logo
    logoImage.src = ipsumLogoPath; 
    logoImage.alt = "ipsum logo"; 
    
  } else {
    navigation.style.display = "flex";
    searchImage.style.display = "none";

    // Switch to X icon
    friesIcon.src = closeIconPath; 
    friesIcon.alt = "close menu icon"; 


    // Switch to Liverty logo
    logoImage.src = livertyLogoPath; 
    logoImage.alt = "liverty logo"; 
  }
}


