
//demo button
var btn = document.getElementById('myButton');
var success = document.getElementById('successButton'),	successOuter = success.outerHTML;

btn.addEventListener('click', function() {
	Button(btn,'loading');
	setTimeout(function() {
		if ( !document.getElementById('successButton') ) {

			var newSuccess = document.createElement('div');
			btn.parentNode.parentNode.insertBefore(newSuccess, btn.parentNode.nextSibling);
			newSuccess.outerHTML = successOuter;

			// reidentify the new alert and reinit alert
			success = document.getElementById('successButton');
			new Alert(success.querySelector('[data-dismiss="alert"]')); // initialize if not already
		}

		success.style.display = 'block';
		setTimeout(function(){
			success.className += ' in';
		}, 10)

		Button(btn,'reset');
	}, 2000)
});


/* BOOTSTRAP ORIGINAL EVENTS 
---------------------------*/

// demo for Button toggle, renamed from bs.button.change to change.bs.button
var checkboxes = document.getElementById('checkboxButtons'); // checkboxes grpup
var radioButtons = document.getElementById('radioButtons'); // radioButtons grpup
var checkBtns = checkboxes.querySelectorAll('input[type="checkbox"]'); // checkboxes
var radioBtns = radioButtons.querySelectorAll('input[type="radio"]'); // radios
checkboxes.addEventListener('change.bs.button', function() { console.log( 'The button group with CHECKBOXES changed' ); });
checkBtns[0].addEventListener('change.bs.button',function() {	console.log( 'Hopa! This handler is bound by the "change" of the FIRST CHECKBOX only.' ); });
document.getElementById('radioButtons').addEventListener('change.bs.button', function() { console.log( 'The button group with RADIOS changed' ); });
radioBtns[0].addEventListener('change.bs.button', function() { console.log( 'This handler is bound by the "change" of the FIRST RADIO button only.' ); });
