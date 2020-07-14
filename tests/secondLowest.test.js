const { TestScheduler } = require("jest")
const secondLowest = require('../secondLowest');

test('expext secondLowest to correctly return for [4, 3, 1, 1, 2]', () => {
    expect(secondLowest( [4, 3, 1, 1, 2] )).toEqual(1)
})

test('expext secondLowest to correctly return for [4, 3, 1, 1, 2, 2]', () => {
    expect(secondLowest( [4, 3, 1, 1, 2, 2]  )).toEqual(2)
})

test('expext secondLowest to correctly return for [4, 3, 1, 2] ', () => {
    expect(secondLowest( [4, 3, 1, 2] )).toEqual(2)
})

test('expext secondLowest to correctly return for [1,1,1,1] ', () => {
    expect(secondLowest( [1,1,1,1] )).toEqual(1)
})




