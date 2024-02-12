
// images = document.querySelectorAll(".image");

// previous = document.querySelector(".previous");

// next = document.querySelector(".next");

// currentImage = 0;

// // images[0].style.display = "block";

// function showImage(n) {
// 	images.forEach((image) => {
		
// 		image.style.display = "none";
	
// 	});
// 	images[n].style.display = "block";
// }

// function nextImage() {
// 	currentImage++;
// 	if (currentImage >= images.length) {
// 		currentImage = 0;
// 		showImage(currentImage);
// 		console.log(images[currentImage]);
	
// 	} else {
// 		showImage(currentImage);
// 	}
// 	// images[currentImage].style.animation="moveright 0.5s ease-in-out"
// }

// function previousImage() {
// 	currentImage--;
// 	console.log(currentImage);
// 	if (currentImage < 0) {
// 		currentImage = images.length - 1;
// 		console.log(currentImage, "hello");
// 		showImage(currentImage);
// 	} else {
// 		showImage(currentImage);
// 	}
// 	// images[currentImage].style.animation="moveleft 0.5s ease-in-out"

// }

// next.addEventListener("click", () => {
// 	nextImage();
// 	console.log(currentImage);
// });
// previous.addEventListener("click", () => {
// 	previousImage();
// 	console.log(currentImage);
// });






images = document.querySelectorAll(".image");

previous = document.querySelector(".previous");

next = document.querySelector(".next");

currentImage = 0;

images[0].style.display = "block";

function showImage(p,n) {
	images.forEach((image) => {
		
		image.style.display = "none";
	
	});
	images[n].style.display = "block";
	images[p].style.display = "block";
}
let pastImage;
function nextImage() {
	pastImage=currentImage;
	currentImage++;
	if (currentImage >= images.length) {
		currentImage = 0;
		showImage(pastImage,currentImage);
		console.log(images[currentImage]);
	
	} else {
		showImage(pastImage,currentImage);
	}
	images[currentImage].style.animation="moveright 0.3s ease-in-out forwards"
	images[pastImage].style.animation="moveExistRight 0.3s ease-in-out forwards"
	// images[currentImage].style.zIndex="100";
}

function previousImage() {
	pastImage=currentImage;
	currentImage--;
	console.log(currentImage);
	if (currentImage < 0) {
		currentImage = images.length - 1;
		console.log(currentImage, "hello");
		showImage(pastImage,currentImage);
	} else {
		showImage(pastImage,currentImage);
	}
	images[currentImage].style.animation="moveleft 0.3s ease-in-out forwards"
	images[pastImage].style.animation="moveExistLeft 0.3s ease-in-out forwards"

}

next.addEventListener("click", () => {
	nextImage();
	console.log(currentImage);
});
previous.addEventListener("click", () => {
	previousImage();
	console.log(currentImage);
});
