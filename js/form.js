const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ 
}

const campos = {
	nombre: false,
	email: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name){
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`item__${campo}`).classList.remove('formulario__item-incorrecto');
		document.getElementById(`item__${campo}`).classList.add('formulario__item-correcto');
		document.querySelector(`#item__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#item__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#item__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`item__${campo}`).classList.add('formulario__item-incorrecto');
		document.getElementById(`item__${campo}`).classList.remove('formulario__item-correcto');
		document.querySelector(`#item__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#item__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#item__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) =>  {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.email && campos.telefono)
    {
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__item-correcto').forEach((icono) => {
			icono.classList.remove('formulario__item-correcto');
		});
	} 
    else 
    {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});