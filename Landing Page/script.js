$(document).ready(function() {
	$('a[href^="#"]').on('click', function(e) {
	  e.preventDefault();
	
	  var target = this.hash;
	  var $target = $(target);
	
	  $('html, body').stop().animate({
		'scrollTop': $target.offset().top
	  }, 900, 'swing', function() {
		// Update the URL hash without jumping to the target
		window.location.hash = target;
	  });
	});
  });
  