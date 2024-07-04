"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mother = exports.Father = void 0;
var Father = /** @class */ (function () {
    function Father(s) {
        this.FatherName = s;
    }
    Father.prototype.GetType = function () {
        return "Father, Male";
    };
    Father.ChildernNumber = 0;
    return Father;
}());
exports.Father = Father;
var Mother = /** @class */ (function () {
    function Mother(s) {
        this.MotherName = s;
    }
    return Mother;
}());
exports.Mother = Mother;
