let c = 1234;
let u = "usuario";
function IniciarSesion(){

	if(document.form.password.value==c && document.form.usuario.value==u)
	{
	alert("La riata de Karlangas es titanica");
	location.href="index.html";
	}
	else {
	alert("Largate de aquí perra.");
	}

}