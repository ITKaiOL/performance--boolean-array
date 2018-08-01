"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/// <reference path="base.d.ts" />
var BitVector = /** @class */ (function () {
    function BitVector(size) {
        this.vectors = Array(size >> 5);
    }
    BitVector.prototype.setItem = function (n) {
        this.vectors[n >> 5] |= (1 << (n & 0x1F));
    };
    BitVector.prototype.clearItem = function (n) {
        this.vectors[n >> 5] &= ~(1 << (n & 0x1F));
    };
    BitVector.prototype.toggleItem = function (n) {
        this.vectors[n >> 5] ^= (1 << (n & 0x1F));
    };
    BitVector.prototype.getItem = function (n) {
        // undefined & any gives 0
        return ((this.vectors[n >> 5] & (1 << (n & 0x1F))) != 0);
    };
    return BitVector;
}());
exports.BitVector = BitVector;
var BitVectorPreFilled = /** @class */ (function (_super) {
    __extends(BitVectorPreFilled, _super);
    function BitVectorPreFilled(size) {
        var _this = _super.call(this, size) || this;
        var i = _this.vectors.length;
        while (i--) {
            _this.vectors[i] = 0;
        }
        return _this;
    }
    return BitVectorPreFilled;
}(BitVector));
exports.BitVectorPreFilled = BitVectorPreFilled;
//# sourceMappingURL=bitVector.js.map