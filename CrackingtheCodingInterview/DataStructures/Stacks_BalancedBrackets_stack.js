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
   function validateBrackets(arr) {
    const stack = []
    const isEmpty = (stk) => stk.length > 0 ? false : true ;

    for (let i = 0; i < arr.length; i++) {
      if((/[\[\{\(]/).test(arr[i])){ stack.push(arr[i]) }
      if((/[\]\}\)]/).test(arr[i]) && isEmpty(stack)){return 'NO'}
      let end = stack.length > 0 ? stack.length -  1 : 0
      let matchSquare = (arr[i] === ']' && stack[end] === '[')
      let mathchParen =  (arr[i] === ')' && stack[end] === '(')
      let matchCurly =  (arr[i] === '}' && stack[end] === '{')

      if(matchSquare || mathchParen || matchCurly) {stack.pop()}
    }
    return isEmpty(stack) ? 'YES' : 'NO'
  }

  var t = parseInt(readLine());

  for(var a0 = 0; a0 < t; a0++) {
    var expressionArr = readLine().split('');
    console.log(validateBrackets(expressionArr))
  }
}
