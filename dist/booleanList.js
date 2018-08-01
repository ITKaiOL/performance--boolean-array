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
var BooleanList = /** @class */ (function () {
    function BooleanList(size) {
        this.list = Array(size);
    }
    BooleanList.prototype.setItem = function (n) {
        this.list[n] = true;
    };
    BooleanList.prototype.clearItem = function (n) {
        this.list[n] = false;
    };
    BooleanList.prototype.toggleItem = function (n) {
        // !undefined gives true
        this.list[n] = !this.list[n];
    };
    BooleanList.prototype.getItem = function (n) {
        // !!undefined gives false
        return !!this.list[n];
    };
    return BooleanList;
}());
exports.BooleanList = BooleanList;
var BooleanListPreFilled = /** @class */ (function (_super) {
    __extends(BooleanListPreFilled, _super);
    function BooleanListPreFilled(size) {
        var _this = _super.call(this, size) || this;
        var i = _this.list.length;
        while (i--) {
            _this.list[i] = false;
        }
        return _this;
    }
    return BooleanListPreFilled;
}(BooleanList));
exports.BooleanListPreFilled = BooleanListPreFilled;
//# sourceMappingURL=booleanList.js.map