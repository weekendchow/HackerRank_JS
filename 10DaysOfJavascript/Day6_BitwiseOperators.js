function getMaxLessThanK(n, k) {
    let current = 0
    let largest = 0

    for(let a = 1; a < n; a++){
        for(let b = a+1; b <= n; b++){
            current = a&b
            if(current < n && current < k && current > largest){
                largest = current
            }
        }
    }
    return largest
}
