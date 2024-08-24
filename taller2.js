//Punto 1

function findMax(numeros) {
  let max = 0;
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i]; 
    }
  }
  
  return max;
}




//Punto 2


function includes(numeros, a) {
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] === a) {
      return true; 
    }
  }
  
  return false;
  
}

//Punto 3

  function sum(numeros) {
  let suma = 0;
  
  for (let i = 1; i < numeros.length; i++) {
    suma += numeros[i];
  }
  
  return suma;
}


//Punto 4


function missingNumbers(numbers) {


  const sortedNumbers = numbers.sort((a, b) => a - b);
  const min = sortedNumbers[0];
  const max = sortedNumbers[sortedNumbers.length - 1];

  const missing = [];
  for (let i = min + 1; i < max; i++) {
    let found = false;
    for (const num of numbers) {
      if (num === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      missing.push(i);
    }
  }

  return missing;
}

// Ejemplo de uso:
const listaNumeros = [7,2,4,6,3,9];
const numerosFaltantes = missingNumbers(listaNumeros);



