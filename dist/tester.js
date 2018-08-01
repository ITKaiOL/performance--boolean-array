"use strict";
exports.__esModule = true;
/// <reference path="base.d.ts" />
var Tester = /** @class */ (function () {
    function Tester(baClasses, options, performance) {
        this.baClasses = baClasses;
        this.options = options;
        this.baClassesIndex = [];
        var n = baClasses.length;
        while (n--) {
            this.baClassesIndex[n] = n;
        }
        this.performance = performance;
    }
    Tester.prototype.runTest = function () {
        // initialize average timers
        var timers = [];
        var i = this.baClasses.length;
        while (i--) {
            timers[i] = 0;
        }
        var n = this.options.repetition;
        while (n--) {
            var oneTimers = this.runOnce();
            i = this.baClasses.length;
            while (i--) {
                timers[i] += oneTimers[i];
            }
        }
        i = this.baClasses.length;
        while (i--) {
            timers[i] /= this.baClasses.length;
        }
        return timers;
    };
    /** Generate a pool of random value to avoid generating random numbers during performance measurement */
    Tester.prototype.getRandomPool = function (size) {
        var r = [];
        while (size--) {
            r.push(Math.random());
        }
        return r;
    };
    Tester.prototype.runOnce = function () {
        var RANDOM_POOL_SIZE = 32768;
        // shuffle class list to be fair
        this.shuffleClassesIndex();
        // create Arrays
        var booleanArrays = [];
        for (var _i = 0, _a = this.baClassesIndex; _i < _a.length; _i++) {
            var index = _a[_i];
            booleanArrays.push(new this.baClasses[index](this.options.arraySize));
        }
        // initialize timers
        var timers = [];
        var i = this.baClasses.length;
        while (i--) {
            timers[i] = 0;
        }
        // calculate number of access
        var n = this.options.access * this.options.arraySize;
        // prepare variables
        var item, rand, time0, time1;
        while (n) {
            var sub_n = Math.min(RANDOM_POOL_SIZE / 2, n);
            n -= sub_n;
            // Measure performance in batch
            var random_pool = this.getRandomPool(RANDOM_POOL_SIZE);
            for (i = 0; i < booleanArrays.length; ++i) {
                var random_pool_index = 0;
                var sub_n_copy = sub_n;
                time0 = this.performance.now();
                while (sub_n_copy--) {
                    item = Math.floor(random_pool[random_pool_index++] * this.options.arraySize);
                    rand = random_pool[random_pool_index++];
                    if (rand < 0.2) {
                        booleanArrays[i].setItem(item);
                    }
                    else if (rand < 0.4) {
                        booleanArrays[i].clearItem(item);
                    }
                    else if (rand < 0.7) {
                        booleanArrays[i].toggleItem(item);
                    }
                    else {
                        booleanArrays[i].getItem(item);
                    }
                }
                time1 = this.performance.now();
                timers[this.baClassesIndex[i]] += (time1 - time0);
            }
        }
        return timers;
    };
    Tester.prototype.shuffleClassesIndex = function () {
        var newClassesIndex = [];
        for (var _i = 0, _a = this.baClassesIndex; _i < _a.length; _i++) {
            var c = _a[_i];
            var i = Math.floor(Math.random() * (newClassesIndex.length + 1));
            newClassesIndex.splice(i, 0, c);
        }
        this.baClassesIndex = newClassesIndex;
    };
    return Tester;
}());
exports.Tester = Tester;
//# sourceMappingURL=tester.js.map