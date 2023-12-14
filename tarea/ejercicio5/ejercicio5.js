`use strict`

function obtenerNombreUsuario(correoElectronico) {
    // Dividir la dirección de correo electrónico en partes usando el caracter "@"
   let partes = correoElectronico.split("@");
  
    // Tomar la primera parte (nombre de usuario)
    let nombreDeUsuario = partes[0];
  
    return nombreDeUsuario;
  }
  
  // Ejemplo de uso
let correoElectronico = "nombredeuser@magbdigital.net";
 let nombreDeUsuario = obtenerNombreUsuario(correoElectronico);
  
  alert("Entrada:", correoElectronico);
  alert("Salida:", nombreDeUsuario);