var solutionsImage = document.getElementById('solutions-background-image');
solutionsImage.src = "https://tinyurl.com/y9o3e44p";

var hiddenElements = document.getElementsByClassName('hidden');

window.onload = function() {

  try {
    for (obj in hiddenElements) {
      hiddenElements[obj].style.opacity = 1;
      if (obj == 1) break;
    }
  } catch (err) {}

};

var learnMoreButton = document.getElementById('learn-more-anchor');

learnMoreButton.addEventListener('mouseover', function() {
  learnMoreButton.style.fontSize = '125%';
  learnMoreButton.style.cursor = 'pointer';
  learnMoreButton.style.left = '530px';
  learnMoreButton.style.color = '#e8f713';
});

learnMoreButton.addEventListener('mouseout', function() {
  learnMoreButton.style.fontSize = '100%';
  learnMoreButton.style.left = '540px';
  learnMoreButton.style.color = 'white';
});
