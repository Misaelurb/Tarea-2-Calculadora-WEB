var btnnumeros = document.getElementsByName("btnnumero");
var displayprincipal = document.getElementById("displayprincipal");
var signohistorial = document.getElementById("signohistorial");

var btnigual =document.getElementById("btnigual");


var numero1historial = document.getElementById("numero1historial");
var numero2historial = document.getElementById("numero2historial");

var valor1 = 0;
var valor2 = 0;
var resultado = 0;




for(let i =0; i < btnnumeros.length; i++){
	btnnumeros[i].addEventListener("click", function(){
		displayprincipal.value = displayprincipal.value + btnnumeros[i].value;
	});
}

function validaciones(){

	if(displayprincipal.value =""){
		displayprincipal.focus();
	}else if(numero1historial.innerHTML != "" && signohistorial.innerHTML != "" 
		&& numero2historial.innerHTML == ""){

		btnigual.focus();

	}else{
		valor1 = displayprincipal.value;
		numero1historial.innerHTML = valor1;
		numero2historial.innerHTML = "";
		displayprincipal.value = "";
	}
}

function suma(){
	signohistorial.innerHTML = "+";
	validaciones();
}

function resta(){
	signohistorial.innerHTML = "-";
	validaciones();
}

function multiplicar(){
	signohistorial.innerHTML = "x";
	validaciones();
}

function dividir(){
	signohistorial.innerHTML = "/";
	validaciones();
}


//Operaciones

function operaciones(){
	valor2 = displayprincipal.value
	numero2historial.innerHTML = valor2;

	switch(signooperacion.innerHTML){
		case "+";
			resultado = parseFloat(valor1) + parseFloat(valor2);
			break;

		case "-";
			resultado = parseFloat(valor1) - parseFloat(valor2);
			break;

		case "x";
			resultado = parseFloat(valor1) * parseFloat(valor2);
			break;

		case "/";
			resultado = parseFloat(valor1) / parseFloat(valor2);
			break;
	}

	signooperacion.innerHTML = "=";
	displayprincipal.value = resultado;
}

function resultadofinal(){
	operaciones();

	if(displayprincipal.value != "" && signooperacion.innerHTML != ""
		&& signooperacion.innerHTML != "="){
		operaciones();
	}else{
		displayprincipal.focus();
	}
}

function borrar(){
	valor1 = 0;
	valor2 = 0;
	resultado = 0;
	displayprincipal.value = "";
	numero1historial.innerHTML = "";
	numero2historial.innerHTML = "";
}






