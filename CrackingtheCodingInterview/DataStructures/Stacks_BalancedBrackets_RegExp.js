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
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        let expression = readLine().split('')
        console.log(checkBrackets(expression))
    }

    function checkBrackets(arr) {
        let stack = []

        for (let i = 0; i < arr.length; i++) {
            if((/[\[\{\(]/).test(arr[i])){
                stack.push(arr[i])
            }
            if((/[\]\}\)]/).test(arr[i]) && stack.length === 0){
                return 'NO'
            }
            let end = stack.length > 0 ? stack.length -  1 : 0
            let matchSquare = (arr[i] === ']' && stack[end] === '[')
            let mathchParen =  (arr[i] === ')' && stack[end] === '(')
            let matchCurly =  (arr[i] === '}' && stack[end] === '{')

            if(matchSquare || mathchParen || matchCurly){
                stack.pop()
            }
        }
        return stack.length === 0 ? 'YES' : 'NO'
    }
}
