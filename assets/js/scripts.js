function Persona(nombre, correo, trabajo, telefono, sobreTi){
    this.name = nombre;
    this.email = correo;
    this.job = trabajo;
    this.phone = telefono;
    this.aboutYou = sobreTi;

    this.getName = function(){
        return this.name;
    },
    this.getEmail = function(){
        return this.email;
    },
    this.getJob = function(){
        return this.job;
    },
    this.getPhone = function(){
        return this.phone;
    },
    this.getAboutYou = function(){
        return this.aboutYou;
    }

}
// EL OBJETO GLOBAL SE CREA VACIO, PORQUE LO VAMOS A ALIMENTAR CON LOS DATOS DEL FORMULARIO
var objetoFormularioGlobal = new Persona('','','','','');

function enviarDatos(){
    console.log(objetoFormularioGlobal);
    // identificamos los párrafos de la card en el DOM
    let elParrafoEmail = document.getElementById('parrafoEmail');
    let elParrafoTelefono = document.getElementById('parrafoTelefono');
    let elParrafoSobreMi = document.getElementById('parrafoSobreMi');
    // enviamos a los párrafos correspondientes los datos almacenados en el objeto global
    elParrafoEmail.innerText = objetoFormularioGlobal.getEmail();
    elParrafoTelefono.innerText = objetoFormularioGlobal.getPhone();
    elParrafoSobreMi.innerText = objetoFormularioGlobal.getAboutYou();
}


function guardarDatos(){
    // Extraemos del formulario el valor correspondiente
    let valorCajaNombre = document.getElementById('txtNombre').value;
    let valorCajaCorreo = document.getElementById('txtCorreo').value;
    let valorCajaTrabajo = document.getElementById('txtTrabajo').value;
    let valorCajaTelefono = document.getElementById('txtTelefono').value;
    let valorCajaSobreTi = document.getElementById('txtSobreTi').value;
    // CONSTRUIMOS UN OBJETO DE LA CLASE PERSONA Y LE PROPORCIONAMOS LA INFORMACIÓN DEL FORMULARIO
    var objetoElfar = new Persona('Elfar Morantes','emorantes@edutecno.com', 'developer', '3449932', 'desarrollador front end vueJS' );
    console.log(objetoElfar);
    console.log(objetoElfar.getAboutYou());
    // EL objetoPersonaFormulario SOLO EXISTE CUANDO SE INVOCA EL BOTON GUARDAR DATOS
    var objetoPersonaFormulario = new Persona(valorCajaNombre, valorCajaCorreo, valorCajaTrabajo, valorCajaTelefono,valorCajaSobreTi );
    console.log(objetoPersonaFormulario);
    console.log(objetoPersonaFormulario.getAboutYou() );

    objetoFormularioGlobal = objetoPersonaFormulario;
    console.log(objetoFormularioGlobal);
}

function asignarEventos(){
    let elBotonGuardar = document.getElementById('btnGuardar');
    elBotonGuardar.addEventListener('click', guardarDatos);

    let elBotonEnviar = document.getElementById('btnEnviar');
    elBotonEnviar.addEventListener('click', enviarDatos);
}