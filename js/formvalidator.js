$(document).ready(function(){
	/*$('#form_trigger').click(function(event){
		$('#contact_form').slideToggle();
		return false;
	});
	*/
	$('#contact_form').submit(function(){
		return verifyForm();
	});
	$('.forminput').focus(function(event){
		$(this).addClass('highlight');
	});
	$('.forminput').blur(function(event){
		$(this).removeClass('highlight');
	});
	$('input#name').change(function(event){
		validName();
	});
	$('input#email').change(function(event){
		validEmail();
	});
	$('textarea#message').change(function(event){
		validMessage();
	});
});

function verifyForm(){
	var namevalid=false;
	var emailvalid=false;
	var msgvalid=false;

	if (validName()){
		namevalid=true;
	}
	if (validEmail()){
		emailvalid=true;
	}
	if (validMessage()){
		msgvalid=true;
	}
	if (namevalid==true && emailvalid==true && msgvalid==true){
		return true;
	}
	else {
		return false;
	}
}

	
function validName(){
	var name = document.getElementById("name");
	var nameerr = document.getElementById("nameerror");

	if (trimSpace(name.value)!=''){
		nameerr.style.display="none";
		return true;		
	}
	else {
		nameerr.style.display="inline";
		return false;		
	}
}

function validEmail(){
	var email = document.getElementById("email");
	var emailerr = document.getElementById("emailerror");


	if (trimSpace(email.value)!=''){
		if (realEmail(email)){
			emailerr.style.display="none";
			return true;
		}
		else {
			emailerr.style.display="inline";
			return false;
		}
	}
	else {
		emailerr.style.display="inline";
		return false;	
	}
}

function validMessage(){
	var message = document.getElementById("message");
	var msgerr = document.getElementById("msgerror");

	if (trimSpace(message.value)!=''){
		msgerr.style.display="none";
		return true;			
	}
	else {
		msgerr.style.display="inline";
		return false;		
	}
}

function realEmail(elem){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

	if (elem.value.match(emailExp)){
		return true;
	}
	else {
		return false;
	}
}

function trimSpace(elem){
	return elem.replace(/^\s+|\s+$/g, '');
}