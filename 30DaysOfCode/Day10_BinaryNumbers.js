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
    var n = parseInt(readLine());
    let base_2 = n.toString(2)
    let count = 0
    let maxCount = 0

    for(let i=0;i<base_2.length;i++){
        if(base_2[i] == 1){
            count++
        } else {
            if(count>maxCount){
                maxCount = count
            }
            count = 0
        }
        maxCount = count>maxCount ? count : maxCount

    }
    console.log(maxCount)

}
