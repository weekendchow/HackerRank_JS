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
    var a = readLine();
    var b = readLine();
    let count = 0

    for(let i = 0; i<a.length; i++){
        if(b.indexOf(a[i]) != -1){
            b = b.replace(a[i],'')
            count += 1
        }
    }

    console.log(a.length-count+b.length)

}
