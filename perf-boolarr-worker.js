var exports = {};

importScripts('dist/booleanList.js', 'dist/bitVector.js', 'dist/tester.js', 'dist/browser-test.js');

var TesterClasses = [ exports.BooleanList, exports.BooleanListPreFilled, exports.BitVector, exports.BitVectorPreFilled ];

onmessage = function(event) {
  var result = testerDOM.runTest(TesterClasses, event.data.size, event.data.access, event.data.repetition);
  postMessage(result);
};
