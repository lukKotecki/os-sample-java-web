<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> 3images2oneRGB </title>
	<link href="styles/style.css" rel="stylesheet" type="text/css">
	
	
	<script type="text/javascript">
		
		
		
	</script>

</head>
<body onload="myOnloadFunction()" style="font-family:Verdana;">
	
		
<div style="background-color:#f1f1f1;padding:15px;">
  <h1>3images2oneRGB</h1>
  <h3>Upload 3 images to make one </h3>
</div>

<div style="overflow:auto">
  <div class="menu">
    <div class="menuitem">Main</div>
    <div class="menuitem">How it works</div>
    <div class="menuitem">Download</div>
    <div class="menuitem">Contact</div>
  </div>

  <div class="main">
    <h2>Upload images...</h2>
	
	<form id="form" enctype="multipart/form-data" action="/upload/image" method="post">
		<div class="photo_item">
			<img id="redImage" src="images/upload_images.png" style="width:250px">
			<br/>
			<input type="file" id="redFileElem" accept="image/*" style="display:none" onchange="redHandleFiles(this.files)">
			<a href="#" id="redFileSelect">Select image</a> 
		</div>
		<div class="photo_item">
			<img id="blueImage" src="images/upload_images.png" style="width:250px">
			<br/>
			<input type="file" id="blueFileElem" accept="image/*" style="display:none" onchange="blueHandleFiles(this.files)">
			<a href="#" id="blueFileSelect">Select image</a> 
		</div>
		<div class="photo_item">
			<img id="greenImage" src="images/upload_images.png" style="width:250px">
			<br/>
			<input type="file" id="greenFileElem" accept="image/*" style="display:none" onchange="greenHandleFiles(this.files)">
			<a href="#" id="greenFileSelect">Select image</a>
		</div>
	</form>	
	<p style="clear:both"></p>
	
	
	
	
	
	
	
	<div id="testDiv">
	
	
		
		<img id="testImg" />
	
	
	</div>
		
    <input type="button" value="kliknij mnie" onclick="myClickFunction()">
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  </div>
</div>
 <script src="scripts/imageHandler.js"></script> 
 <script src="scripts/caman.full.min.js"></script> 
</body>
</html>