window.URL = window.URL || window.webkitURL;
 
		 function myOnloadFunction(){
			 
			// document.getElementById("form").onchange = function() {
				// var red_image = document.getElementById("red_image").src;
				// alert(getPixel(red_image, 10, 10));
			// };
			
		 }
			
		
//#################################### RED IMAGE DISPLAY		
const redFileSelect = document.getElementById("redFileSelect");
const redFileElem = document.getElementById("redFileElem");
const redImage = document.getElementById("redImage");

redFileSelect.addEventListener("click", function (e) {
  if (redFileElem) {
    redFileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

function redHandleFiles(files) {
      const img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[0]);
      //img.height = 200;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
	  redImage.src = img.src;
}		

//#################################### BLUE IMAGE DISPLAY
const blueFileSelect = document.getElementById("blueFileSelect");
const blueFileElem = document.getElementById("blueFileElem");
const blueImage = document.getElementById("blueImage");

blueFileSelect.addEventListener("click", function (e) {
  if (blueFileElem) {
    blueFileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

function blueHandleFiles(files) {
      const img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[0]);
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
	  blueImage.src = img.src;
}				
		 
//#################################### GREEN IMAGE DISPLAY		
const greenFileSelect = document.getElementById("greenFileSelect");
const greenFileElem = document.getElementById("greenFileElem");
const greenImage = document.getElementById("greenImage");

greenFileSelect.addEventListener("click", function (e) {
  if (greenFileElem) {
    greenFileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

function greenHandleFiles(files) {
      const img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[0]);
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
	  greenImage.src = img.src;
}			
		
		
		
		
		
		
		
function myClickFunction(){
	// const testDiv = document.getElementById("testDiv");
	// const testImg = document.getElementById("testImg");
	
	// var costam = getPixel(greenImage,10,10);
	// testDiv.innerHTML = costam[0];
	
	
	var img = document.getElementById('greenImage');
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
	var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;

	
	//testDiv.innerHTML = costam[0];
	
	
}
		
		
		
		

		
		
		
		
		
		
		function getPixel(url, x, y) {
			var img = new Image();
			img.src = url
			var canvas = document.createElement('canvas');
			var context = canvas.getContext('2d');
			context.drawImage(img, 0, 0);
			return context.getImageData(x, y, 1, 1).data;
		};

		


		