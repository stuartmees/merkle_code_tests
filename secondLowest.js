const secondLowest = (arr) => {
    
    let frequencyObj = {}
    let frequencyArray = []

    arr.forEach((item, i) => {
        const itemArray = arr.filter(item => arr[i] === item)
        frequencyObj[arr[i]] = itemArray.length
    })

    Object.keys(frequencyObj).forEach(key => frequencyArray.push(frequencyObj[key]))
    frequencyArray.sort()

    let allEqualFreq = true

    for (let i=0; i<frequencyArray.length; i++) {
        if (frequencyArray[i] !== frequencyArray[1+1] ) {
            allEqualFreq = false
            break
        }
    } 
    
    if (!allEqualFreq) {
        let secondSmallestArr = []
    
        frequencyArray.forEach(freq => {
            if (secondSmallestArr.length < 2 && secondSmallestArr[secondSmallestArr.length - 1] !== freq) secondSmallestArr.push(freq)
        })
    
        const secondSmallest = secondSmallestArr[1]
    
        Object.keys(frequencyObj).forEach(item => {
            if (frequencyObj[item] !== secondSmallest) delete frequencyObj[item]
        })
    }
    
    const integer = Object.keys(frequencyObj).length > 1 ? Object.keys(frequencyObj).sort()[1] : Object.keys(frequencyObj).sort()[0]

    return parseInt(integer)

}

module.exports = secondLowest;
