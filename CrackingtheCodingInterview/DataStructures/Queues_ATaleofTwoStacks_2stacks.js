function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let t = input[0]
    let inStack = []
    let outStack = []
    for(let i = 1; i <= t; i++){
        let op = input[i].split(' ')
        switch(op[0]){
            case '1':
                inStack.push(parseInt(op[1]))
                break;
            case '2':
                prepareStack()
                outStack.pop()
                break;
            case '3':
                prepareStack()
                console.log(outStack[outStack.length-1])
                break;
        }
    }

    function prepareStack(){
       if(outStack.length === 0){
           while(inStack.length > 0){
               outStack.push(inStack.pop())
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
