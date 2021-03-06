
const longestSequence = (seq) => {
  
    let seqArray = [...seq.toLowerCase()]
    let charFreqs = {}
    let largestCharFreqs = {}
    let largestFreq = 0
    let largestFreqChars = []
    
    const updateLargestFreqs = (char, freq) => {
        if (largestFreqChars.length>0 && freq !== largestFreq) {
            largestFreqChars.forEach(item => delete largestCharFreqs[item])
        } 
    
          largestCharFreqs[char] = freq
          largestFreqChars.push(char)
          largestFreq = freq  
    }

    // generate object of each char and its frequencies
    seqArray.forEach((char, i) => {
        if (i === 0) {
            charFreqs[char] = [1]
        } else if (seqArray[i-1] === char) {
            charFreqs[char][charFreqs[char].length-1] = charFreqs[char][charFreqs[char].length-1] + 1
        } else if (seqArray[i-1] !== char  &&  !Object.keys(charFreqs).includes(char) ){
            charFreqs[char] = [1]
        } else if (seqArray[i-1] !== char  &&  Object.keys(charFreqs).includes(char) ) {
            charFreqs[char].push(1)
        }
    })

    // for each char reduce to only the largest freq
    Object.keys(charFreqs).forEach((char) => {
        charFreqs[char].forEach((freq) => {
            if (freq > largestFreq) updateLargestFreqs(char, freq)
        })
    })
    
    // if more than one char take the lowest in the alphabet
    const keys = Object.keys(largestCharFreqs)
    const key = keys.sort()[0]

    keys.forEach(item => {
        if (item !== key) delete largestCharFreqs[item]
    })

    return largestCharFreqs;
}


module.exports = longestSequence;


