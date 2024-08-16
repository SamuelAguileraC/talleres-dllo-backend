//punto 1

function convertidorTemp(c) {
  return (c * (9/5) + 32);
}
//ingresas la temperatura a convertir c
console.log(convertidorTemp(32)+"°F")


//punto 2

function resolvedor(a, b, c, positivo = true) {
  const discriminante = b ** 2 - 4 * a * c;
  if (discriminante < 0) {
    return "No hay soluciones reales.";
  }

  const raizDiscriminante = Math.sqrt(discriminante);
  const x1 = (-b + raizDiscriminante) / (2 * a);
  const x2 = (-b - raizDiscriminante) / (2 * a);

  return positivo ? x1 : x2;
}

// Ejemplo de uso true para el resultado positivo y false para el falso, e ingresar ls coeficientes dejo escritas ambas opciones
console.log("Resultado positivo:", resolvedor(2, 5, 1, true));
console.log("Resultado negativo:", resolvedor(2, 5, 1, false));

//punto 3 

//gracias al modulo podemos saber facilmente si es par o impar
function mejorParidad(numero) {
    return numero % 2 === 0 ? "par" : "impar";
  }
  
  //Puede declarar el numero antes o en el log de la consola
  
  const miNumero = 7;
  console.log(`El número ${miNumero} es ${mejorParidad(miNumero)}.`);
  
  
  //o ingresar sirectamente el numero 
  console.log(`El número 6 es ${mejorParidad(6)}.`);

//punto 4 

// Esta funcion cuanta con un para que va a contar desde 0 hasta llegar al numero que se ingrese y cuando ya el contador
// sea igual al numero ingresado ahí entra a un if que con un modulo determina si este es par o impar.
function peorParidad(num) {
  let result = "";
  for (let i = 0; i <= num; i++) {
      if (i === num) {
          if (num % 2 === 0) {
              result = "par";
          } else {
              result = "impar";
          }
      }
  }
  return result;
}
console.log(peorParidad(5));
