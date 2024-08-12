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

function peorParidad() {
    for (let i = 1; i <= 10; i++) {
        if(i==1){
            console.log(`El número ${i} es impar `);
        }else if(i==2){
            console.log(`El número ${i} es par `);
        }else if(i==3){
            console.log(`El número ${i} es impar `);
        }else if(i==4){
            console.log(`El número ${i} es par `);
        }else if(i==5){
            console.log(`El número ${i} es impar `);
        }else if(i==6){
            console.log(`El número ${i} es par `);
        }else if(i==7){
            console.log(`El número ${i} es impar `);
        }else if(i==8){
            console.log(`El número ${i} es par `);
        }else if(i==9){
            console.log(`El número ${i} es impar `);
        }else if(i==10){
            console.log(`El número ${i} es par `);
        }
    }
    
  }
  
  peorParidad();
