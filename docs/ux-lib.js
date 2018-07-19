
  $(function(){
    $(".public-styling").click(function() {
      $('.zone').removeClass("app");
      $('.zone').addClass("public");  
      $('.app-styling').removeClass("active"); 
      $('.public-styling').addClass("active");   

    });

    $(".app-styling").click(function() {
      $('.zone').removeClass("public");
      $('.zone').addClass("app");        
      $('.app-styling').addClass("active"); 
      $('.public-styling').removeClass("active");     
    });  

  });   

    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }
    


// setTimeout(function(){ document.querySelector("html").style.display = 'opacity'; }, 0);

// // Triggers when corporate-ui has finnised loading

// document.addEventListener('corporate-ui-loaded', function(e) {

//   document.body.className += ' done-loading';


// });


// setTimeout(function(){ 

// var elm = document.querySelector('c-main-navigation')
// elm.__proto__.setHeaderSize.call(elm)

// }, 200);

