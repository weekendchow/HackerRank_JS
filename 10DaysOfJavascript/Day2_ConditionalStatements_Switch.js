function getLetter(s) {
    let letter;
    // Write your code here
    const set1 = new Set(['a','e','i','o','u'])
    const set2 = new Set(['b','c','d','f','g'])
    const set3 = new Set(['h','j','k','l','m'])

    switch(true){
        case set1.has(s[0]):
            letter = 'A'
            break
        case set2.has(s[0]):
            letter = 'B'
            break
        case set3.has(s[0]):
            letter = 'C'
            break
        default :
            letter = 'D'
            break

    }

    return letter;
}
