var image = document.getElementsByClassName("column");

$(document).ready(function() {
	$( "#LeftButton" ).click(function() {
		for (let i=0; i<image.length;i++) {
			image[i].style.order -= 1;
			if(image[i].style.order == 0) image[i].style.order = 9;
		};
	});

	$( "#RightButton" ).click(function() {
		for (let j=0; j<image.length;j++) {
			image[j].style.order++;
			if(image[j].style.order == 10) image[j].style.order = 1;
		};
	});
});