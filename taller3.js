#PUNTO 1

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


#PUNTO 2 

