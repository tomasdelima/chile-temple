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

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
    }
  }
  });
});
