const secondLowest = (arr) => {
    
    let intFreqs = {}
    let frequencyArray = []

    arr.forEach((item, i) => {
        const itemArray = arr.filter(item => arr[i] === item)
        intFreqs[arr[i]] = itemArray.length
    })

    Object.keys(intFreqs).forEach(key => frequencyArray.push(intFreqs[key]))
    frequencyArray.sort()

    let allEqualFreq = true

    for (let i=0; i<frequencyArray.length; i++) {
        if (frequencyArray[i] !== frequencyArray[i+1] ) {
            allEqualFreq = false
            break
        }
    } 
    
    if (!allEqualFreq) {

        let secondSmallestArr = []
        
        frequencyArray.forEach(freq => {
            if (secondSmallestArr.length < 2 && secondSmallestArr[secondSmallestArr.length - 1] !== freq) secondSmallestArr.push(freq)
        })
    
        const returnInteger = secondSmallestArr.length === 1 ? secondSmallestArr[0] : secondSmallestArr[1]
    
        Object.keys(intFreqs).forEach(item => {
            if (intFreqs[item] !== returnInteger) delete intFreqs[item]
        })
    }
    
    const integer = Object.keys(intFreqs).length > 1 ? Object.keys(intFreqs).sort()[1] : Object.keys(intFreqs).sort()[0]

    return parseInt(integer)

}

module.exports = secondLowest;
