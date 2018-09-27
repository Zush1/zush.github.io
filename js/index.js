$(document).ready(function() {
  $('.menu-mobile').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("header-sticky")
  } else {
    header.classList.remove("header-sticky");
  }
}

$(document).ready(function(){
				$('a[href^="#"]').on('click', function (e) {
					e.preventDefault();

					var target = this.hash;
					var $target = $(target);

					$('html, body').animate({
						'scrollTop': $target.offset().top
					}, 1000, 'swing');
				});
			});