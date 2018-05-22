'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const p = parseInt(readLine(), 10);

    for (let pItr = 0; pItr < p; pItr++) {
        const n = parseInt(readLine(), 10);
        isPrime(n) ? console.log('Prime') : console.log('Not prime')
    }

    function isPrime(n){
        if(n <= 1) return false
        if(n === 2 || n === 3) return true
        if(n%2 === 0 || n%3 === 0) return false

        for(let i = 5; i <= Math.sqrt(n); i+=6){
            if(n%i === 0 || n%(i+2) === 0) return false
        }
        return true
    }


}
