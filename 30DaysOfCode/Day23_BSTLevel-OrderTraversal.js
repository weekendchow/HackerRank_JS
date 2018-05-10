// Add your code here
// To print values separated by spaces use process.stdout.write(someValue + ' ')
let queue = root!==null ? [root] : []
let res = []

while(queue.length>0){

    node = queue.shift()

    res.push(node.data)

    if(node.left!==null){
        queue.push(node.left)
    }
    if(node.right!==null){
        queue.push(node.right)
    }
        
}

console.log(res.join(' '))
