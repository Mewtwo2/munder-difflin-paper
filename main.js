var solutionsImage = document.getElementById('solutions-background-image');
solutionsImage.src = "https://tinyurl.com/y9o3e44p";


var hiddenElements = document.getElementsByClassName('hidden');
console.log(hiddenElements[0])

window.onload = function() {
  hiddenElements[0].style.opacity = 1;
  hiddenElements[1].style.opacity = 1;
};
