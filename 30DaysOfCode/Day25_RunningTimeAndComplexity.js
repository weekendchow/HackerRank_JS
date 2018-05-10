function processData(input) {
    //Enter your code here
     input = input.split('\n')
     let len = input[0]
     for(let i=1; i<=len;i++){
         if(input[i]==1){
             console.log('Not prime')
         }else{
             for(let j=2; j*j<=input[i]; j++){
                if(input[i]%j==0){
                    input[i] = 1
                }
             }
             if(input[i]==1){
                console.log('Not prime')
             }else{
                console.log('Prime')
             }
         }

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
