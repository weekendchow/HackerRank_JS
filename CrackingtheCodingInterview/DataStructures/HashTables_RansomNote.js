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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    let hash = {};
    for(let i = 0; i < m; i++){
        if(hash[magazine[i]]){
            hash[magazine[i]]++
        }else{
            hash[magazine[i]]=1
        }
    }
    let counter = 0;
    for(let i = 0; i < n; i++) {
        if (hash[ransom[i]]>0){
          counter += 1;
          hash[ransom[i]] --;
        }
    }
    console.log(counter >= n? "Yes":"No");

}
