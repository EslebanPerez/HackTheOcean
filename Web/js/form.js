//validacion del formulario
const btnSuscribirte = document.getElementById('suscribirte');

const validacion = (e) => {
    e.preventDefault();
    //declaramos nuestras variables que son los inputs del form
    const nombreUsuario = document.getElementById("nombre");
    const apellidoUsuario = document.getElementById("apellido");
    const emailUsuario = document.getElementById("email");
    const edadUsuario = document.getElementById("edad");
    const ciudadUsuario = document.getElementById("ciudad")
    const diaUsuario = document.getElementById("")
    const playaUsuario = document.getElementById("playa")

    // hacemos los casos de validacion para los id
    if (nombre.value === "") {
        alert("Ingresa, por favor tu nombre de usuario.");
        nombre.focus();
        return false;
    }

    if (apellido.value === "") {
        alert("Ingresa, por favor tu apellido.");
        apellido.focus();
        return false;
    }

    if (email.value === "") {
        alert("Ingresa, por favor tu email")
        email.focus();
        return false;
    }

    if (edad.value === "") {
        alert("Ingresa, por favor tu edad")
        edad.focus();
        return false;
    }

    if (ciudad.value === "") {
        alert("Ingresa, por favor tu ciudad")
        ciudad.focus();
        return false;
    }

    if (playa.value === "") {
        alert("Ingresa, por favor tu playa")
        ciudad.focus();
        return false;
    }

    return true;

}

btnSuscribirte.addEventListener('click', validacion);