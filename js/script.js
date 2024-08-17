// MODAL VARIABLES

const modal = document.getElementById("searchModal");
const modalButton = document.getElementById("openSearchModal");
const closeButton = document.getElementById("closeModal");

// FRIES VARIABLES
const logoImage = document.getElementById("ipsumLogo"); 
const friesButton = document.getElementById("friesButton");
const friesIcon = document.getElementById("friesIcon");
const navigation = document.getElementById("navMenu");
const enquiryButton = document.getElementById("enquiryButton"); 


// FRIES IMAGE PATHS for COMPONENT/BLOCKs
// const friesMenuIconPath = "../images/components/fries-menu.svg";
// const closeIconPath = "../images/atoms/close.svg";
// const ipsumLogoPath = "../images/atoms/logoipsum.svg";
// const livertyLogoPath = "../images/blocks/livertylogo.svg";

// FRIES IMAGE PATHS for INDEX
const friesMenuIconPath = "images/components/fries-menu.svg";
const closeIconPath = "images/atoms/close.svg";
const ipsumLogoPath = "images/atoms/logoipsum.svg";
const livertyLogoPath = "images/blocks/livertylogo.svg";


// MODAL FUNCTIONS
modalButton.onclick = function() {
  modal.style.display = "block";
}


closeButton.onclick = function() {
  modal.style.display = "none";

  // Revert fries menu state
  if (navigation.style.display === "flex") {
    navigation.style.display = "none";  // Hide navigation
    modalButton.style.display = "flex"; // Show search button
   
}



// closeButton.onclick = function() {
//  modal.style.display = "none";

 
//   // Revert the navigation to its original state
//   navigation.style.display = "flex"; // Hide the navigation

//    // Show the modal button
//   //  modalButton.style.display = "flex"; 

// //TO FIX
  
//   // if (modal.style.display === "none") {
//   //   navigation.style.display = "flex";
//   // } else {
//   //   navigation.style.display = "flex";
//   // }
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }





// // FRIES MENU FUNCTIONS FUNCTIONS
// friesButton.onclick = function() {
//   if (navigation.style.display === "flex") {
//     navigation.style.display = "none";
//     modalButton.style.display = "flex";

//     // Switch to fries icon
//     friesIcon.src = friesMenuIconPath; 
//     friesIcon.alt = "fries menu icon"; 

//     // Switch to Ipsum logo
//     logoImage.src = ipsumLogoPath; 
//     logoImage.alt = "ipsum logo"; 
    
//   } else {
//     navigation.style.display = "flex";
//     modalButton.style.display = "none";

//     // Switch to X icon
//     friesIcon.src = closeIconPath; 
//     friesIcon.alt = "close menu icon"; 

//     // Switch to Liverty logo
//     logoImage.src = livertyLogoPath; 
//     logoImage.alt = "liverty logo"; 
//   }
// }


