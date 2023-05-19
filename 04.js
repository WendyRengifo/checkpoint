/* 4️⃣ ***** EJERCICIO 4 ***** - contarPacientes() 4️⃣

¡El sistema del hospital se ha caído! Ahora necesitamos llevar un registro manual de todos los pacientes 
del hospital. Para lograr esto te pedimos que contruyas una función que utilice recursión para calcular 
la cantidad de pacientes.

📝 EJEMPLO 📝
(INPUT) ➡ ["Juan", "Maria", "Pedro", "Luisa", "Ana"];
(OUTPUT) ➡ 'La cantidad de pacientes en la planta son: 5'

(INPUT) ➡ ["Juan", "Maria"];
(OUTPUT) ➡ 'La cantidad de pacientes en la planta son: 2'

REQUISITOS
🟢 La función debe retornar un mensaje que diga "No hay pacientes en la planta" si array recibido está vacío.
🟢 La función debe retornar un mensaje que diga "La cantidad de pacientes en la planta son: ${cantidadDePacientes}".
🟢 Puedes utilizar un default parameter para ayudarte.
*/

function contarPacientes(pacientes, contar = 1) {
  // Tu código aquí:
  if (pacientes.length === 0) {
    return "No hay pacientes en la planta";
  } else if (pacientes.length === contar) {
    return "La cantidad de pacientes en la planta son: " + (contar);
  }
  
  ++contar
  return contarPacientes(pacientes, contar++)
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  contarPacientes,
};
