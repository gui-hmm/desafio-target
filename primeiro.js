function isFibonacciNumber(number) {
    let a = 0;
    let b = 1;

    while (b <= number) {
        if (b === number) {
            return true;
        }

        const next = a + b;
        a = b;
        b = next;
    }

    return false;
}


const numeroInformado = 212; 
if (isFibonacciNumber(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
