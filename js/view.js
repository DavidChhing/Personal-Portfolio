'use strict'

$(document).ready(function() {
    $( ".cross" ).hide();
    $( ".main-nav" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".main-nav" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });
    $( ".cross" ).click(function() {
        $( ".main-nav" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

});

$("a[href^='#']").click(function(e) {
    e.preventDefault();
	var position = $($(this).attr("href")).offset().top;
	$("body, html").animate({
		scrollTop: position
	});
});
