`use strict`
function obtenerIniciales(entrada) {
    // Utilizar una expresión regular para extraer las iniciales
   let iniciales = entrada.match(/^[A-Z]+/);
  
    // Comprobar si se encontraron iniciales y devolverlas
    if (iniciales) {
      return iniciales[0];
    } else {
      return "Iniciales no encontradas";
    }
  }
  
  // Ejemplos de uso
  let entrada1 = "CR-7";
 let entrada2 = "LM-10";
 let entrada3 = "LFS-10";
  let entrada4 = "AV-25";
  
  alert("Entrada:", entrada1);
 alert("Salida:", obtenerIniciales(entrada1));
 alert("\n");
  
 alert("Entrada:", entrada2);
  alert("Salida:", obtenerIniciales(entrada2));
  alert("\n");
  
  alert("Entrada:", entrada3);
  alert("Salida:", obtenerIniciales(entrada3));
  alert("\n");
  
  alert("Entrada:", entrada4);
 alert("Salida:", obtenerIniciales(entrada4));