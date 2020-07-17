//----------- Nome -----------
function inputName() {
	var nameForm = document.getElementById('validationTooltip01');
	var validName = document.getElementById('valid-name');
	var caracterNome = /^([0-9_\-\.])+\@([0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if(nameForm.value == "" || nameForm.value.length < 3 || caracterNome.test(nomeForm.value) == true)
	{
		validName.style.display = "block";
		validName.innerHTML = "Incorret Name";
		nameForm.style.border = "thick solid red";
	}else{
		validName.style.display = "none";
		nameForm.style.border = "none";
	}

}

//----------- Email -----------
function inputEmail(){
	var emailForm = document.getElementById('validationTooltip02');
	var validEmail = document.getElementById('valid-email');
	var caracterEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if(emailForm.value == "" || caracterEmail.test(emailForm.value) == false)
	{
		validEmail.style.display = "block";
		validEmail.innerHTML = "Incorret Email";
		emailForm.style.border = "thick solid red";
	}else{
		validEmail.style.display = "none";
		emailForm.style.border = "none";
	}
}

//----------- Menssege -----------
function inputMenssage(){
	var menssageForm = document.getElementById('validationTooltip03');
	var validEmail = document.getElementById('valid-menssage');

	if(menssageForm.value == "")
	{
		validEmail.style.display = "block";
		validEmail.innerHTML = "Dont have menssage";
		menssageForm.style.border = "thick solid red";
	}else{
		validEmail.style.display = "none";
		menssageForm.style.border = "none";
	}
}

function sendEmail() {
	
	var nameForm = document.getElementById('validationTooltip01');
	var emailForm = document.getElementById('validationTooltip02');
	var menssageForm = document.getElementById('validationTooltip03');

	if(nameForm.value != "" || emailForm.value != "" || menssageForm.value != ""){
		alert("mail sent successfully")
	}

	Email.send({
		Host: "smtp.gmail.com",
		Username : "biel.ap2030@gmail.com",
		Password : "biel40617",
		To : 'biel.ap2012@gmail.com',
		From : "gabriel.alves@sinqia.com",
		Subject : "Email do seu portfolio",
		Body : nameForm.value + " - " + emailForm.value + " - " + menssageForm.value,
	})
	.then(function(message){

	});}

//------------------------------------------------------------------------------------------------------------------------------------------------------