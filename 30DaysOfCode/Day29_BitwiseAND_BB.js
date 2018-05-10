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
        let res = 0

        for(let i=1; i<n; i++){
            for(let j=i+1; j<=n; j++){
                let res_temp = i&j
                if(res_temp<k){
                    if(res_temp>res){
                        res = res_temp
                    }
                }
            }
        }
        console.log(res)
    }
}
