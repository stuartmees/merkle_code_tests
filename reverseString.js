const moveFirstChar = (first, count) => {

    const lastLetter = first.length > 0 ? first.slice(0, 1) : ''
    
    if (first.length === 0) {
        return lastLetter
    } else {
        return moveFirstChar(first.slice(1, first.length))+lastLetter
    }
}

const reverseString = (input) => {

    const reversedString = moveFirstChar(input)
    console.log(reversedString)

}


reverseString('qwertyu')