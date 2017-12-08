
setTimeout(function(){ document.querySelector("html").style.display = 'opacity'; }, 0);

// Triggers when corporate-ui has finnised loading

document.addEventListener('corporate-ui-loaded', function(e) {

  document.body.className += ' done-loading';


});


setTimeout(function(){ 

var elm = document.querySelector('c-main-navigation')
elm.__proto__.setHeaderSize.call(elm)

}, 1000);