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
    const len = parseInt(readLine());
    let users = []
    for(let i = 0; i < len; i++){
        let firstName_temp = readLine().split(' ');
        let firstName = firstName_temp[0];
        let emailID = firstName_temp[1];
        if (emailID.includes('@gmail.com')) {
            users.push(firstName);
        }
    }
    console.log(users.sort().join('\n'))  

}
