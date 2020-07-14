const reverseString = (input) => {

    const lastLetter = input.length > 0 ? input.slice(0, 1) : ''
    const firstSeg = input.slice(1, input.length)

    return input.length === 0 ? lastLetter : reverseString(firstSeg)+lastLetter

}

module.exports = reverseString;
