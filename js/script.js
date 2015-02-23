jQuery(document).ready(function(){
    
    if (screen.width <= 800) {
        window.location = "http://isometric.co/mobileindex.html";
    }
    
    var page2 = jQuery('#page2').offset().top;
	jQuery('#scroll').click(function(){
		jQuery('html, body').animate({scrollTop:page2}, 'slow');
		return false;
	});
    var page3 = jQuery('#page3').offset().top;
	jQuery('#scroll2').click(function(){
		jQuery('html, body').animate({scrollTop:page3}, 'slow');
		return false;
	});
    var page4 = jQuery('#page4').offset().top;
	jQuery('#scroll3').click(function(){
		jQuery('html, body').animate({scrollTop:page4}, 'slow');
		return false;
	});
    var page5 = jQuery('#page5').offset().top;
	jQuery('#scroll4').click(function(){
		jQuery('html, body').animate({scrollTop:page5}, 'slow');
		return false;
	});
});
