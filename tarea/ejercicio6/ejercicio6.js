`use strcit`

function obtenerNombreUsuarioFacebook(url) {
    // Utilizar una expresión regular para extraer el nombre de usuario
   let match = url.match(/facebook\.com\/([a-zA-Z0-9._-]+)/);
  
    // Comprobar si se encontró el nombre de usuario y devolverlo
    if (match) {
      return match[1];
    } else {
      return "Nombre de usuario no encontrado";
    }
  }
  
  // Ejemplo de uso
 let urlFacebook = "facebook.com/nombreuser";
 let nombreUsuario = obtenerNombreUsuarioFacebook(urlFacebook);
  
  alert("Entrada:", urlFacebook);
  alert("Salida:", nombreUsuario);