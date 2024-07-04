"use strict";
/*
    # DataTypes = [ any 'default', string, boolean, number, function, object]
        - if the variable assign for datatype from datatypes, canot declare it with another datatype
    
    # ReturnDataTypes [void 'Default', number, string, Boolean, object ]

    # Genatics
        - Using for Undefined Data Type

    #Enum
        - Using for Fixed Data as Week's Days
    
    #Interface
        - Using for create new fixed template for object
        -
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Variable Using only one Data type
var U1 = "Ali"; // Use any as default
var A1 = "Any";
var S1 = "Ahmed";
var B1 = true;
var I1 = 12;
var F1 = function () { return console.log("Hi"); };
var O1 = {
    1: 'Zain',
};
// Variable Using Mulipte Data Types
var SN1;
SN1 = "ahmed";
SN1 = 1232;
// -----------
var SF1;
SF1 = "Zain";
SF1 = function () { return console.log("Hi"); };
// Return Data Types 
var F2 = function () { return console.log("Hi"); };
var F3 = function () { return console.log("Hi"); };
var F4 = function () { return "Hi"; };
var F5 = function () { return 1200; };
var F6 = function () { return true; };
// Genatics
function Gen(arg) {
    return arg;
}
console.log(Gen(12));
console.log(Gen("Text"));
console.log(Gen(true));
// Enum
var Days;
(function (Days) {
    Days[Days["Satuerday"] = 0] = "Satuerday";
    Days[Days["Sunday"] = 1] = "Sunday";
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thrsday"] = 5] = "Thrsday";
})(Days || (Days = {}));
var Day1 = Days.Satuerday;
var Day2 = Days.Sunday;
var Day3 = Days.Monday;
console.log(Day1);
console.log(Day2);
console.log(Day3);
var XDays;
(function (XDays) {
    XDays["Satuerday"] = "Sat";
    XDays["Sunday"] = "Sun";
    XDays["Monday"] = "Mon";
    XDays["Tuesday"] = "Thu";
    XDays["Wednesday"] = "Wed";
    XDays["Thrsday"] = "Thr";
})(XDays || (XDays = {}));
var XDay1 = XDays.Satuerday;
var XDay2 = XDays.Sunday;
var XDay3 = XDays.Monday;
console.log(XDay1);
console.log(XDay2);
console.log(XDay3);
var P1 = {
    FirstName: 'Zain',
    MiddleName: 'Ahmed',
    LastName: 'Osama',
    Age: 20
};
console.log(P1.FirstName);
console.log(P1.MiddleName);
console.log(P1.LastName);
console.log(P1.Age);
var In1 = {
    importing: true
};
var E1 = {
    FirstName: "Ahmed",
    MiddleName: "Osama",
    LastName: "Fawzy",
    Age: 21,
    importing: false,
    Salary: 20000
};
console.log(E1.Salary);
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    // Class Methods
    Car.prototype.GetMaxSpeed = function () {
        return 200;
    };
    return Car;
}());
var Car1 = new Car();
console.log(Car1.GetMaxSpeed());
var Parent_1 = require("./Parent");
// Class Inhirit
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children(fn, ln) {
        var _this = _super.call(this, ln) || this;
        _this.Name = fn;
        Parent_1.Father.ChildernNumber++;
        return _this;
    }
    // Override, Use Same Name of Inhirtaned Function but with diffrent Content
    Children.prototype.GetType = function () {
        return 'Boy, Male';
    };
    Children.prototype.GetAge = function () {
        return this.Age ? this.Age : 20;
    };
    return Children;
}(Parent_1.Father));
var Father1 = new Parent_1.Father("Osama");
console.log(Father1.GetType());
var Child1 = new Children("Ahmed", "Osama");
console.log(Child1.Name);
console.log(Child1.FatherName);
console.log(Child1.GetType());
console.log(Parent_1.Father.ChildernNumber);
var Child2 = new Children("Zain", "Ahmed");
console.log(Child2.FatherName);
console.log(Child2.Name);
console.log(Parent_1.Father.ChildernNumber);
/*
    Class VS Interface
    Print
        - Class, Can be Printed
        - Interface, Canot be Printed
    
    Implement
        - Class, might implement all function
        - Interface, Use for Declareing only
    
    
*/
// Optional Paramters, Mustnot be the first Paramter
function Sum(x, y, z) {
    return (x || 0) + (y || 0) + (z || 0);
}
console.log(Sum(12, 10, 13));
console.log(Sum(12, 10));
console.log(Sum(12));
