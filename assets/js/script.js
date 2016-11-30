$(document).ready(function() {

    
$("#button-1").click(function() {
 	$("#navbar").addClass('shiftup');
 	$("#navbar").removeClass('shiftdown');
});

$("#button-2").click(function() {
 	$("#navbar").addClass('shiftdown');
 	$("#navbar").removeClass('shiftup');
});
$( window ).scroll(function() {
  $( "#space" ).show().fadeOut(500);


});



$( window ).scroll(function() {
  $( "#navbar").css({"background-color":"white"});
    $( ".nav-text").css({"color":"black"});
     $( "#button-1").css({"background-color":"white"});
});

$("#profile").hover(function() {
  $( "#profile" ).css({"boxShadow":"0px 6px 6px 3px #666"});

 
}
, function() {
  $( "#profile" ).css({"boxShadow":"0px 0px 0px 0px #666"});

 
}


);

    });
    