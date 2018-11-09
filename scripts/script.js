var drawing1 = document.getElementById ('drawing1');

drawing1.addEventListener('mouseover', function() {
  drawing1.src = "images/hk1.png";
});

drawing1.addEventListener('mouseout', function() {
  drawing1.src = "images/hk2.png";
});

var drawing2 = document.getElementById ('drawing2');

drawing2.addEventListener('mouseover', function() {
  drawing2.src = "images/hk3.png";
});
drawing2.addEventListener('mouseout', function() {
drawing2.src = "images/hk4.png";
});
