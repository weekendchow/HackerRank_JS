function processData(input) {
    //Enter your code here
    input=input.split(/\n/)

    let n=parseInt(input[0])
    let hash={}


    for(let i=1;i<=n;i++){
        let name=input[i].split(' ')[0]
        let num=input[i].split(' ')[1]
        hash[name]=num
    }

    for(let i=n+1;i<input.length;i++){
        let name=input[i]

        if(hash[name]==undefined){
            console.log('Not found')
        }else{
            console.log(name+'='+hash[name])
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
