/* Mobile Menu */
(function($) {
   $.fn.mobileMenu = function() {
    var menu = document.getElementById("myTopNav");
    this.click(function() {
    if (menu.className === "topnav") {
        menu.className += " responsive";
    } else {
        menu.className = "topnav";
    }
    });
};
}(jQuery));

/* Back to Top */

(function($) {
   $.fn.backToTop = function(options) {
    $('body').prepend('<a href="#" class="scrollToTop"><i class="fa fa-arrow-up fa-2x" aria-hidden="true"></i></a>');
    
	var btnToTop = document.getElementsByClassName('scrollToTop');
    
    var settings = $.extend({
       color : "#fff",
       bgColor : "gray",
       right: "40px"  
    }, options);
     
       
    $(btnToTop).css("color", settings.color)
               .css("background-color", settings.bgColor)
               .css("right", settings.right);
       
	//Check to see if the window is top if not then display button
	$(this).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$(btnToTop).fadeIn();
		} else {
			$(btnToTop).fadeOut();
		}
	});
	
	//Click event to scroll to top
	$(btnToTop).click(function(){
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	});
   };
 }(jQuery));
