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
            if(arr[i] == '('){
                stack.push(')')
            }else if(arr[i] == '['){
                stack.push(']')
            }else if(arr[i] == '{'){
                stack.push('}')
            }else{
                if(stack.length == 0 || arr[i] !== stack[stack.length-1]){
                    return 'NO'
                }
                stack.pop()
            }
        }
        return stack.length === 0 ? 'YES' : 'NO'
    }
}
