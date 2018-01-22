// Initialize arrays and initial index
var slideIndex = 1;
var imagesArray = document.getElementsByClassName("galleryPic");

// Initial state
showDivs(slideIndex);

// Go to next image
function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Main function - show the image and the dots
function showDivs(n) {
  slideIndex = n;
  // Reset the index when reached the end of array
  if (n > imagesArray.length) {
    slideIndex = 1
  } else if (n < 1) {
    slideIndex = imagesArray.length
  }

  // Display/hide the image and the corresponding dot
  for (var i = 0; i < imagesArray.length; i++) {
    //Current dot
    if (i === slideIndex - 1) {
      imagesArray[i].style.display = "block";
    } else {
      //Non-current dots
      imagesArray[i].style.display = "none";
    }
  }
}
