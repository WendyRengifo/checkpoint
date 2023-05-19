// 2️⃣ ***** EJERCICIO 2 ***** - BuscandoError() 2️⃣
// En el hospital unas de las maquinas empezó a fallar y lanzan un error por pantalla, debemos identificar cuáles tienen un patron de inicio y cierre:
// Necesitamos que determines si el error esta balanceado en cuanto a paréntesis, corchetes y llaves.
// La función debe devolver true si los paréntesis, corchetes y llaves están balanceados y false en caso contrario.
// Se considera que los paréntesis, corchetes y llaves están balanceados si para cada uno de estos símbolos de apertura hay un símbolo de cierre correspondiente y los símbolos están correctamente anidados.

// Ejemplo:

// Input: "{[()()]}"
// Output: true

// Input: "([)]"
// Output: false
//
//
// REQUISITOS:
//  🟢 Respetar el principio de LIFO que tienen los stacks
//  🟢 Retornar true o false, dependiendo de lo que corresponda.
//  🟢 Investigar que hace el metodo charAt, les puede servir

function BuscandoError(expresion) {
  // Tu código aquí
  const stack = [];
  const apertura = ['(', '[', '{'];
  const cierre = [')', ']', '}'];

  for (let i = 0; i < expresion.length; i++) {
    const caracter = expresions.charAt(i);

    if (apertura.includes(caracter)) {
      stack.push(caracter);
    } else if (cierre.includes(caracter)) {
      const indiceApertura = cierre.indexOf(caracter);
      const ultimoApertura = stack.pop();

      if (ultimoApertura !== apertura[indiceApertura]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BuscandoError,
};
