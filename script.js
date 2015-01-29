jQuery(document).ready(function(){

	var page2 = jQuery('#page2').offset().top;
	jQuery('#scroll').click(function(){
		jQuery('html, body').animate({scrollTop:page2}, 'slow');
		return false;
	});
});