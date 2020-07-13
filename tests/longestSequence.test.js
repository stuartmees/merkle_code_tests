const longestSequence = require('../longestSequence');

test('longestSequence retuns correctly for dghhhmhmx', () => {
  expect(longestSequence("dghhhmhmx")).toStrictEqual({ h: 3});
});

test('longestSequence retuns correctly for dhkkhhKKKt', () => {
  expect(longestSequence("dhkkhhKKKt")).toStrictEqual({ k: 3});
});

test('longestSequence retuns correctly for aBbBadddadd', () => {
  expect(longestSequence("aBbBadddadd")).toStrictEqual({ b: 3});
});
