const longestSequence = (seq) => {
  
    let seqArray = [...seq]
    let charFreqs = {}
    let largestCharFreqs = {}
    let largestFreq = 0

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
    console.log(charFreqs)

    Object.keys(charFreqs).forEach((char,i) => {
        largestCharFreqs[char] = 0

        charFreqs[char].forEach(freq => {
            if (freq > largestCharFreqs[char]){
              largestCharFreqs[char]=freq
            } 
        })
    })

    console.log(largestCharFreqs)


  }

  longestSequence('aaabbcdddddaadddddddddd')

  module.exports = longestSequence;


  // (Object.keys(charFreqs).includes(char)) && 