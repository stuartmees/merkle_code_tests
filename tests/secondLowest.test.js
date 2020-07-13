const { TestScheduler } = require("jest")
const secondLowest = require('../secondLowest');

test('expext secondLowest to correctly return for [4, 3, 1, 1, 2]', () => {
    expect(secondLowest( [4, 3, 1, 1, 2] )).toBe(1)
})

test('expext secondLowest to correctly return for [4, 3, 1, 1, 2, 2]', () => {
    expect(secondLowest( [4, 3, 1, 1, 2, 2]  )).toBe(2)
})

test('expext secondLowest to correctly return for [4, 3, 1, 2] ', () => {
    expect(secondLowest( [4, 3, 1, 2] )).toBe(2)
})




