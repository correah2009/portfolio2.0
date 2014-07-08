$(document).ready(function () { 
	
// Navigation Bar	
	var slideticker = 0;
	
	$('li:nth-child(1)').click(function() {
  		if (slideticker%2 == 0) {
  			$('li:nth-child(n+2)').slideDown();
  			slideticker += 1;
  		}else{
  			$('li:nth-child(n+2)').slideUp();
  			slideticker += 1;
  		};
  		
	});
	
	$('li:nth-child(2)').click(function () {
		$('html, body').animate({scrollTop: $("#work").offset().top}, 800);
		$('li:nth-child(n+2)').slideUp();
	});
	
	$('li:nth-child(3)').click(function () {
		$('html, body').animate({scrollTop: $("#projects").offset().top}, 800);
		$('li:nth-child(n+2)').slideUp();
	});
	
	$('li:nth-child(4)').click(function () {
		$('html, body').animate({scrollTop: $("#about-me").offset().top}, 800);
		$('li:nth-child(n+2)').slideUp();
	});
	
	$('li:nth-child(5)').click(function () {
		$('html, body').animate({scrollTop: $("#contact").offset().top}, 800);
		$('li:nth-child(n+2)').slideUp();
	});
	
	
	
	
// Manifold click auto-scroll

$('div.manifold-container').click(function () {
	$('html, body').animate({scrollTop: $("#work").offset().top}, 800);
	});
	
// Scroll animations
	var work = $('#work').offset().top;
	var projects = $('#projects').offset().top;
	var navigation = $('.left-nav').offset().top;
	
	
	var workticker = 0;
	var projectsticker = 0;
	var about_meticker = 0;
	var contactticker = 0;
	
	$('body').css({"background-color":"orange"});

	$(window).scroll(function (event) {
    // what the y position of the scroll is
		var y = $(this).scrollTop() + 150;
  		var about_me = $('#about-me').offset().top;
	    var contact = $('#contact').offset().top; 
	    
	    
		if (y >= work && y < projects) {
		  	$('body').css({"background-color":"red"});
		  	$('li:first-child').empty();
		  	$('li:first-child').append("<bdi style='color: red'>work</bdi>");
		  	if (workticker == 0) {
		  			$('div.a').fadeIn(400, function(){
		  				$('div.b').fadeIn(400, function(){
		  					$('div.c').slideDown(400)})});
		  			$('div.d').delay( 1500 ).fadeIn(400, function(){
		  				$('div.e').fadeIn(400, function(){
		  					$('div.f').slideDown(400)})});
		  			$('div.g').delay( 2900 ).fadeIn(400, function(){
		  				$('div.h').fadeIn(400, function(){
		  					$('div.i').slideDown(400)})});
		  			$('div.j').delay( 4500 ).fadeIn(400, function(){
		  				$('div.k').fadeIn(400, function(){
		  					$('div.l').slideDown(400)})});
				workticker += 1;
			};
		} else if (y >= projects && y < about_me) {
		 	$('body').css({"background-color":"black"});
		 	$('li:first-child').empty();
		 	$('li:first-child').append("<bdi style='color: white'>projects</bdi>");
		  	if (projectsticker == 0) {
		  			$('.columnsmessage').slideDown("slow");
		  			//$('html, body').animate({scrollTop: $("#projects").offset().top}, 800);
		  			projectsticker += 1;
		  		};
		} else if (y >= about_me  && y < contact) {
			$('body').css({"background-color":"gold"});
			$('li:first-child').empty();
			$('li:first-child').append("<bdi style='color: gold'>about me</bdi>");
		  	if (about_meticker == 0) {
		  			$('#secondimage').fadeOut(400, function() {
		  				$('#firstimage').fadeIn(400, function() {
		  					$('.namebottom').slideDown("slow"); })});
		  			about_meticker += 1;
		  		};
		} else if (y >= contact) {
			$('body').css({"background-color":"orange"});
			$('li:first-child').empty();
			$('li:first-child').append("<bdi style='color: orange'>contact</bdi>");
		  	if (contactticker == 0) {
		  			//$('html, body').animate({scrollTop: $("#contact").offset().top}, 800);
		  			contactticker += 1;
		 		};  
		}else {
			$('body').css({"background-color":"orange"});
			$('li:first-child').empty();
			$('li:first-child').append("<bdi style='color: white'>contents</bdi>");
		};
 	 });
  

//Project Animations

var checkMediadeterminant = true;

function checkMedia () {
	if ($(".left-nav").css("display") == "none" ){
		checkMediadeterminant = false;
	} else {
		checkMediadeterminant = true;
	}};

		
checkMedia();

console.log (checkMediadeterminant);

if (checkMediadeterminant) {
$(".bookred").click(function (){
	if($(".webcolumnscontents").is(':visible')){
		$(".webcolumnscontents").slideUp("fast", function(){
			$( ".bookred" ).animate({width: "30.33%"}, 200, function() {
				$(".bookorange").slideDown ("fast", function() {
					$(".bookyellow").slideDown ("fast")})})});
	}else{
		$(".bookyellow").slideUp ("fast", function() {
			$(".bookorange").slideUp ("fast", function() {
				$( ".bookred" ).animate({width: "20.33%"}, 200, function() { 
					$(".webcolumnscontents").slideDown("fast")})})})}});
						
$(".bookorange").click(function (){
		if($(".graphicscolumnscontents").is(':visible')){
			$(".graphicscolumnscontents").slideUp("fast", function(){
				$( ".bookorange" ).animate({width: "30.33%"}, 200, function() {
					$(".bookred").slideDown ("fast", function() {
						$(".bookyellow").slideDown ("fast")})})});
		}else{
			$(".bookred").slideUp ("fast", function() {
				$(".bookyellow").slideUp ("fast", function() {
					$( ".bookorange" ).animate({width: "20.33%"}, 200, function() { 
						$(".graphicscolumnscontents").slideDown("fast")})})})}});
						
$(".bookyellow").click(function (){
		if($(".videocolumnscontents").is(':visible')){
			$(".videocolumnscontents").slideUp("fast", function(){
				$( ".bookyellow" ).animate({width: "30.33%"}, 200, function() {
					$(".bookorange").slideDown ("fast", function() {
						$(".bookred").slideDown ("fast")})})});
		}else{
			$(".bookred").slideUp ("fast", function() {
				$(".bookorange").slideUp ("fast", function() {
					$( ".bookyellow" ).animate({width: "20.33%"}, 200, function() { 
						$(".videocolumnscontents").slideDown("fast")})})})}});
						
} else {
$(".bookred").click(function (){
	if($(".webcolumnscontents").is(':visible')){
		$(".webcolumnscontents").slideUp("fast", function(){
			$( ".bookred" ).animate({width: "100%"}, 200, function() {
				$(".bookorange").slideDown ("fast", function() {
					$(".bookyellow").slideDown ("fast")})})});
	}else{
		$(".bookyellow").slideUp ("fast", function() {
			$(".bookorange").slideUp ("fast", function() {
				$( ".bookred" ).animate({width: "100%"}, 200, function() { 
					$(".webcolumnscontents").slideDown("fast")})})})}});
						
$(".bookorange").click(function (){
		if($(".graphicscolumnscontents").is(':visible')){
			$(".graphicscolumnscontents").slideUp("fast", function(){
				$( ".bookorange" ).animate({width: "100%"}, 200, function() {
					$(".bookred").slideDown ("fast", function() {
						$(".bookyellow").slideDown ("fast")})})});
		}else{
			$(".bookred").slideUp ("fast", function() {
				$(".bookyellow").slideUp ("fast", function() {
					$( ".bookorange" ).animate({width: "100%"}, 200, function() { 
						$(".graphicscolumnscontents").slideDown("fast")})})})}});
						
$(".bookyellow").click(function (){
		if($(".videocolumnscontents").is(':visible')){
			$(".videocolumnscontents").slideUp("fast", function(){
				$( ".bookyellow" ).animate({width: "100%"}, 200, function() {
					$(".bookorange").slideDown ("fast", function() {
						$(".bookred").slideDown ("fast")})})});
		}else{
			$(".bookred").slideUp ("fast", function() {
				$(".bookorange").slideUp ("fast", function() {
					$( ".bookyellow" ).animate({width: "100%"}, 200, function() { 
						$(".videocolumnscontents").slideDown("fast")})})})}});
};

//Project profilepic.png

$("div.contentsbox > img").click(function() {
	var imagesrc = $(this).attr( "alt" );
	var imagetitle = $(this).attr( "title" );
	
	if($("#projectsdialog").is(':visible')) {
		$('html, body').animate({scrollTop: $("#projects").offset().top - 55}, 800, function(){	
			$("#projectsdialog").slideUp ("fast", function(){
				$("div.projectimage").empty();
				$("div.projectdescription").empty()})});
	}else{
		$("#projectsdialog").slideDown ("fast", function(){
			$( "div.projectimage" ).html( "<img src=" + imagesrc + ">");
			$("div.projectdescription").text(imagetitle)
			$('html, body').animate({scrollTop: $("div.projectimage").offset().top - 60}, 800)})};
			
});
		
$("div.videocontentsbox > img").click(function() {
	var videosrc = $(this).attr( "alt" );
	var videotitle = $(this).attr( "title" );
	
	if($("#projectsdialog").is(':visible')) {
		$('html, body').animate({scrollTop: $("#projects").offset().top - 55}, 800, function(){	
			$("#projectsdialog").slideUp ("fast", function(){
				$("div.projectimage").empty();
				$("div.projectdescription").empty()})});
	}else{
		$("#projectsdialog").slideDown ("fast", function(){
			$( "div.projectimage" ).html( "<iframe width='100%' height='500' src=" + videosrc + " frameborder='0' allowfullscreen></iframe>");
			$("div.projectdescription").text(videotitle)
			$('html, body').animate({scrollTop: $("div.projectimage").offset().top - 60}, 800)})};
			
});		

if (checkMediadeterminant) {			
$("div.projectexit").click(function() {
	$('html, body').animate({scrollTop: $("#projects").offset().top - 55}, 800, function(){	
		$("#projectsdialog").slideUp ("fast", function(){
			$("div.projectimage").empty();
			$("div.projectdescription").empty();
		})})});														
} else {
$("div.projectexit").click(function() {
	$('html, body').animate({scrollTop: $("div.columnsmessage").offset().top - 55}, 800, function(){	
		$("#projectsdialog").slideUp ("fast", function(){
			$("div.projectimage").empty();
			$("div.projectdescription").empty();
		})})});	
};


});
