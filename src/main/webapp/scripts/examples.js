window.URL = window.URL || window.webkitURL;

const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);



function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);
      
      const img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}









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















