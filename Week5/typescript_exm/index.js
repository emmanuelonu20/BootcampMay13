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
var x = 4;
var y = 10;
console.log(x + y);
console.log('This is programming');
var a = 3;
a = true;
a = "dddd";
var arr = [23, true, "eeee"];
var names = ["Haben", "Peter", "Kushan", "Jay"];
var numbers = [23, 11, 55, 66, 33];
//Index
console.log(numbers[2]); //55
var person = { name: "John Wick", age: 23, country: "US" };
//Key
console.log(person['age']); //23
console.log(person.age); //23
var car1 = { model: 'Nissan', doors: 3, isElectric: false };
var Car = /** @class */ (function () {
    //Constructor method
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    //other methods
    Car.prototype.displayMake = function () {
        console.log('The car make is ' + this.model);
    };
    return Car;
}());
var car2 = new Car("Mazda", 4, true); //creating a new instance of class Car
var car3 = new Car("Toyota", 6, false);
car3.displayMake();
car2.displayMake();
//SportsCar is the child class and Car is the parent class.
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(model, doors, isElectric, wheelDiameter) {
        var _this = _super.call(this, model, doors, isElectric) || this;
        _this.wheelDiameter = wheelDiameter;
        return _this;
    }
    return SportsCar;
}(Car));
var car4 = new SportsCar("Ferrari", 2, false, 21);
car4.displayMake();
console.log(car4.wheelDiameter);
