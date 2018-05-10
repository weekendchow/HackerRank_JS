process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    let t = parseInt(readLine());
    for(let a0 = 0; a0 < t; a0++){
        let n_temp = readLine().split(' ');
        let n = parseInt(n_temp[0]);
        let k = parseInt(n_temp[1]);

        ((k-1) | k) <= n ? console.log(k-1) : console.log(k-2)
    }

}
