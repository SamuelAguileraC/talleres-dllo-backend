//PUNTO 1

function desglosarString(str, tipo) {
    const vocales = 'aeiouAEIOU';
    const consonantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    
    const esVocal = char => vocales.includes(char);
    const esConsonante = char => consonantes.includes(char);
    
    if (tipo === 'vocales') {
        return str.split('').filter(esVocal).length;
    } else if (tipo === 'consonantes') {
        return str.split('').filter(esConsonante).length;
    } else {
        throw new Error('Tipo no válido. Usa "vocales" o "consonantes".');
    }
}


//PUNTO 2 

function twoSum(nums, target) {
    const indices = nums.map((num, i) => ({num,i}));
  
    const result = indices.flatMap(({num,i}) =>indices.filter(({num: n,i: j}) => i !== j && num + n === target).map(({i: j}) => [i, j]));
  
    if (result.length === 0) {
      throw new Error('No se encontraron dos números que sumen el objetivo.');
    }
  
    return result [0]; // Retorna solo la primera pareja encontrada
  }


// PUNTO 3 

function conversionRomana(romano) {
    const valores = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

    return romano.split('').reduce((total, actual, i, arr) => {
        const valorActual = valores[actual];
        const valorSiguiente = valores[arr[i + 1]];

        if (valorSiguiente > valorActual) {
            return total - valorActual;
        } else {
            return total + valorActual;
        }
    }, 0);
}
