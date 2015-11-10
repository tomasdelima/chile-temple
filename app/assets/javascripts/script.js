function toggle_drawer() {
  var drawer = document.getElementsByClassName('mdl-layout__drawer')[0];
  drawer.classList.toggle("is-visible");
  showBackTop();
}

function showBackTop(){
		document.getElementById('backToTopButton').style.visibility = 'visible';
}

function hideBackTop(){
	document.getElementById('backToTopButton').style.visibility = 'hidden';
}

function hideIfTop(){
	if (window.pageYOffset==0){
	        document.getElementById("backToTopButton").style.visibility = "hidden";
	}
}
