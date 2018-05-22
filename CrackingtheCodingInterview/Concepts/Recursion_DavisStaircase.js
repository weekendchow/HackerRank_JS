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
    const s = parseInt(readLine(), 10);

    for (let sItr = 0; sItr < s; sItr++) {
        const n = parseInt(readLine(), 10);
        console.log(findWays(n))
    }

    function findWays(n){
        let arr = [1, 2, 4]
        if(n === 1) return 1
        if(n === 2) return 2
        if(n === 3) return 4

        for(let i = 4; i < n; i++){
            let id = (i-1) % 3
            arr[id] = arr[0] + arr[1] + arr[2]
        }
        return arr[0] + arr[1] + arr[2]
    }
}
