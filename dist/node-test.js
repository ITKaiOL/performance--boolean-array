"use strict";
exports.__esModule = true;
var perf_hooks_1 = require("perf_hooks");
var booleanList_js_1 = require("./booleanList.js");
var bitVector_js_1 = require("./bitVector.js");
var tester_js_1 = require("./tester.js");
var testerNODE;
(function (testerNODE) {
    var TesterClasses = [booleanList_js_1.BooleanList, booleanList_js_1.BooleanListPreFilled, bitVector_js_1.BitVector, bitVector_js_1.BitVectorPreFilled];
    testerNODE.runTest = function (size, access, repetition) {
        console.log("Testing size = " + size + " access = " + access + " repetition = " + repetition);
        var t = new tester_js_1.Tester(TesterClasses, { arraySize: size, access: access, repetition: repetition }, perf_hooks_1.performance);
        var result = t.runTest();
        console.log("                   |   time   ");
        console.log("==============================");
        var cases = ['boolean', 'boolean prefilled', 'bitvector', 'bitvector prefilled'];
        for (var r = 0; r < result.length; ++r) {
            console.log((cases[r] + "                   ").substring(0, 19) + "|" +
                ("         " + result[r].toFixed(1)).substr(-8) + 'ms');
        }
        console.log();
    };
})(testerNODE = exports.testerNODE || (exports.testerNODE = {}));
//# sourceMappingURL=node-test.js.map