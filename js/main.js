//index.html

var elemento = document.getElementById("log-in");
elemento.addEventListener("click", iniciar);

function iniciar() {
    // inputs del usuario (datos a llenar en el formulario)
    var mail = document.getElementById("input-mail").value;
    var password = document.getElementById("input-psw").value;

    if (mail == null || mail.length == 0 || mail === " " || password == null || password.length == 0 || password === " ") {
    	alert("No se aceptan campos vacíos");
    } 
    if (password !== "") {
    	if (password.length < 6 ||  password === "123456") {
    		alert("Tu contraseña no puede tener menos de 6 dígitos y tampoco puede ser '123456'");
    	}
    }
    if (!(mail == null || mail.length == 0 || mail === "" || password == null || password.length == 0 || password === " ") && !(password.length < 6 ||  password === "123456")) {
 		// esto nos lleva a la página de instagram una vez que ingresa bien los datos y hace click en "Iniciar sesión"
 		window.location.href = "instagram.html";
 	}
 };

//esta funciòn es para poder mover nuestras fotos en la página de instagram (arrastrar y soltar) 
function drag(ev){
	ev.dataTransfer.setData("text", ev.target.id);
}

function finalDrop(ev) {
	// preventDefault() cancela la acción o respuesta "por defecto" que implica hacer click en algo, tal como se mostró en clases 
	ev.preventDefault();
}

function drop(ev) {
	ev.preventDefault();
	
	var dato = ev.dataTransfer.getData("text");
	// target ahora pasa a ser hijo de dato
	ev.target.appendChild(document.getElementById(dato));
}

