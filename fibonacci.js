function fibonacciBelongs(number) {
 
    let fibonacci = [0, 1];
    

    while (fibonacci[fibonacci.length - 1] < number) {
        let i = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(i);
        console.log(i)
    }


    if (fibonacci.includes(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
}


const numeroInformado = 21; 
fibonacciBelongs(numeroInformado);