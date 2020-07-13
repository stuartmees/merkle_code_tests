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



// longest_sequence( "dghhhmhmx" ) === {h: 3}
// longest_sequence( "dhkkhhKKKt" ) === {k: 3}
// longest_sequence( "aBbBadddadd" ) === {b: 3}