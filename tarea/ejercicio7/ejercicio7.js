`use strcit`

function obtenerIDGDrive(url) {
    // Utilizar una expresión regular para extraer el ID de Google Drive
    let match = url.match(/\/file\/d\/([^\/]+)/);
  
    // Comprobar si se encontró el ID y devolverlo
    if (match) {
      return match[1];
    } else {
      return "ID no encontrado";
    }
  }
  
  // Ejemplo de uso
 let urlGDrive = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";
  let idRecursoGDrive = obtenerIDGDrive(urlGDrive);
  
  alert("Entrada:", urlGDrive);
 alert ("Salida:", idRecursoGDrive);