var upperImage = document.getElementsByClassName("upper column");
var lowerImage = document.getElementsByClassName("lower column");

console.log(upperImage);
console.log(lowerImage);

$(document).ready(function() {
	$( "#LeftButton" ).click(function() {
		for (let i=0; i<upperImage.length;i++) {
			upperImage[i].style.order -= 1;
			if(upperImage[i].style.order == 0) upperImage[i].style.order = upperImage.length;
		};
		for (let k=0; k<lowerImage.length;k++) {
			lowerImage[k].style.order -= 1;
			if(lowerImage[k].style.order == 0) lowerImage[k].style.order = lowerImage.length;
		};
	});

	$( "#RightButton" ).click(function() {
		for (let j=0; j<upperImage.length;j++) {
			upperImage[j].style.order++;
			if(upperImage[j].style.order == upperImage.length + 1) upperImage[j].style.order = 1;
		};
		for (let l=0; l<lowerImage.length;l++) {
			lowerImage[l].style.order++;
			if(lowerImage[l].style.order == lowerImage.length + 1) lowerImage[l].style.order = 1;
		};
	});
});