function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let t = input[0]
    let queue = []
    for(let i = 1; i <= t; i++){
        let op = input[i].split(' ')
        switch(op[0]){
            case '1':
                queue.push(parseInt(op[1]));
                break;
            case '2':
                queue.shift();
                break;
            case '3':
                console.log(queue[0]);
                break;
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
