`use strct`

function generarAsignacionSiguiente(filaActual) {
    // Extraer el número de laboratorio y la letra de la fila actual
    let match = filaActual.match(/LAB(\d+)#([A-Z])/);
  
    if (!match) {
      return "Formato no válido";
    }
  
    let numeroLaboratorio = parseInt(match[1], 10);
    let letraActual = match[2];
  
    // Calcular la siguiente letra
    let siguienteLetra = String.fromCharCode(letraActual.charCodeAt(0) + 1);
  
    // Generar la nueva asignación
    let nuevaAsignacion = `LAB${numeroLaboratorio}#${siguienteLetra}`;
  
    return nuevaAsignacion;
  }
  
  // Ejemplo de uso
  let filaActual = "LAB2#B";
 let nuevaAsignacion = generarAsignacionSiguiente(filaActual);
  
 alert("Entrada:", filaActual);
  alert("Salida:", nuevaAsignacion);