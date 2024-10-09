const inputString = "Exemploclear";

function invertString(str) {
    let inverted = "";
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}

const result = invertString(inputString);
console.log(`String original: ${inputString}`);
console.log(`String invertida: ${result}`);