
/*
 * Create the function factorial here
 */
function factorial(input) {
    let output = input
    for(let i=input-1; i>=1; i--){
        output = output * i
    }
    return output
}
