function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let actualDate = input[0].split(' ')
    let expectedDate = input[1].split(' ')
    let yearDiff = actualDate[2]-expectedDate[2]
    let monthDiff = actualDate[1]-expectedDate[1]
    let dayDiff = actualDate[0]-expectedDate[0]

    if(yearDiff>0){
        console.log(10000)
    }else if(monthDiff>0 && yearDiff==0){
        console.log(500*monthDiff)
    }else if(dayDiff>0 && monthDiff==0 && yearDiff==0){
        console.log(15*dayDiff)
    }else{
        console.log(0)
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
