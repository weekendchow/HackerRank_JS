function processData(input) {
    //Enter your code here
    input = input.split(/\n/)
    let len = input.length


    for(let j=1;j<len;j++){
        let hash1 = []
        let hash2 = []
        for(let i=0;i<input[j].length;i++){
            if(i%2===0){
                hash1[i/2] = input[j][i]
            }else{
                hash2[(i-1)/2] = input[j][i]
            }
        }
        console.log(hash1.join('')+' '+hash2.join(''))
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);

});
