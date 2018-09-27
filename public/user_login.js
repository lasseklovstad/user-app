function validateInput(form){
	var name = form.elements['name'].value;
	var email = form.elements['email'].value;
	var password = form.elements['password'].value;
	var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm
	var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm


	if(!passwordRegex.test(password)){
		alert('The password is not valid! It must contain at lest 8 characters, one capital letter and a number')
		return false;
	}else if(!emailRegex.test(email)){
		alert('The e-mail is not valid!')
		return false;
	}else{
		return true;
	}

}

function sayHello(){
	console.log('hello')
}