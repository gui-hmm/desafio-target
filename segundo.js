function contarLetraA(string) {
    let contador = 0;

    const stringMinuscula = string.toLowerCase();

    for (const char of stringMinuscula) {
        if (char === 'a') {
            contador++;
        }
    }

    return contador;
}

const minhaString = 'Abracadabra'; 
const quantidadeA = contarLetraA(minhaString);

if (quantidadeA > 0) {
    console.log(`A letra 'a' ocorre ${quantidadeA} vezes na string.`);
} else {
    console.log(`A letra 'a' não foi encontrada na string.`);
}
