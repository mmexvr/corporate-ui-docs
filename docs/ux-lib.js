
$(function(){

	$(".public-styling").click(function() {
	    $('body').removeClass("app");
	    $('body').addClass("public");  
	    $('.app-styling').removeClass("active"); 
	    $('.public-styling').addClass("active");   
	    
	});

	$(".app-styling").click(function() {
	    $('body').removeClass("public");
	    $('body').addClass("app");        
	    $('.app-styling').addClass("active"); 
	    $('.public-styling').removeClass("active");     
	});  

});        

    


// setTimeout(function(){ document.querySelector("html").style.display = 'opacity'; }, 0);

// // Triggers when corporate-ui has finnised loading

// document.addEventListener('corporate-ui-loaded', function(e) {

//   document.body.className += ' done-loading';


// });


// setTimeout(function(){ 

// var elm = document.querySelector('c-main-navigation')
// elm.__proto__.setHeaderSize.call(elm)

// }, 200);

