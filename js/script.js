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

}




window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// friesButton.onclick = function() {
//   if (friesIcon.src.includes(friesMenuIconPath)) {
//     // Fries icon is clicked - open the navigation
//     navigation.style.display = "flex";
//     modalButton.style.display = "none";

//     // Switch to X icon
//     friesIcon.src = closeIconPath; 
//     friesIcon.alt = "close menu icon"; 

//     // Switch to Liverty logo
//     logoImage.src = livertyLogoPath; 
//     logoImage.alt = "liverty logo"; 

//   } else if (friesIcon.src.includes(closeIconPath)) {
//     // Close icon is clicked - close the navigation and revert changes
//     navigation.style.display = "flex"; //FOR REVIEW
//     modalButton.style.display = "flex";

//     // Switch back to fries icon
//     friesIcon.src = friesMenuIconPath; 
//     friesIcon.alt = "fries menu icon"; 

//     // Switch back to Ipsum logo
//     logoImage.src = ipsumLogoPath; 
//     logoImage.alt = "ipsum logo"; 
//   }
// }


// FRIES MENU FUNCTIONS FUNCTIONS
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


friesButton.onclick = function() {
  if (friesIcon.src.includes(friesMenuIconPath)) {
    // Fries icon is clicked - open the navigation on smaller screens
    navigation.style.display = "flex";
    modalButton.style.display = "none";

    // Switch to X icon
    friesIcon.src = closeIconPath; 
    friesIcon.alt = "close menu icon"; 

    // Switch to Liverty logo
    logoImage.src = livertyLogoPath; 
    logoImage.alt = "liverty logo"; 

  } else if (friesIcon.src.includes(closeIconPath)) {
    // Close icon is clicked - handle based on screen size
    if (window.innerWidth <= 768) {
      // For small screens, close the navigation
      navigation.style.display = "none";
    } else {
      // For larger screens
      navigation.style.display = "flex"; 
    }

    // Revert to original state
    modalButton.style.display = "flex";
    friesIcon.src = friesMenuIconPath; 
    friesIcon.alt = "fries menu icon"; 
    logoImage.src = ipsumLogoPath; 
    logoImage.alt = "ipsum logo"; 
  }
}

// Resize event listener to handle window resized
window.onresize = function() {
  if (window.innerWidth > 768) {
    navigation.style.display = "flex"; 
  } else {
    if (friesIcon.src.includes(friesMenuIconPath)) {
      navigation.style.display = "none"; // Hide nav on small screens when fries icon is active
    }
  }
};
