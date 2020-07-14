const reverseString = require('../reverseString');

test('reverserString return corectly with “abcb”', () => {
    expect(reverseString('abcb')).toBe('bcba')
})

test('reverserString return corectly with "test"', () => {
    expect(reverseString('test')).toBe('tset')
})

test('reverserString return corectly with "racecar"', () => {
    expect(reverseString('racecar')).toBe('racecar')
})

test('reverserString return corectly with empty string', () => {
    expect(reverseString('')).toBe('')
})

test('reverserString return corectly with 1 character string', () => {
    expect(reverseString('d')).toBe('d')
})

