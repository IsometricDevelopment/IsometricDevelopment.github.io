$(document).ready(function(){
    
    if (screen.width <= 800) {
        window.location = "http://isometric.co/mobileindex.html";
    }
    
    var page2 = $('#page2').offset().top;
	$('#scroll').click(function(){
		$('html, body').animate({scrollTop:page2}, 'slow');
		return false;
	});
    var page3 = $('#page3').offset().top;
	$('#scroll2').click(function(){
		$('html, body').animate({scrollTop:page3}, 'slow');
        
		return false;
	});
    var page4 = $('#page4').offset().top;
	$('#scroll3').click(function(){
		$('html, body').animate({scrollTop:page4}, 'slow');
		return false;
	});
    var page5 = $('#page5').offset().top;
	$('#scroll4').click(function(){
		$('html, body').animate({scrollTop:page5}, 'slow');
		return false;
	});
});
