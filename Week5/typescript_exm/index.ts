let x:number = 4;
let y:number = 10;
console.log(x + y);
console.log('This is programming')

let a: any = 3;
a = true;
a = "dddd"

let arr = [23, true, "eeee"];
let names: string[] = ["Haben", "Peter", "Kushan", "Jay"];
let numbers: Array<number> = [23, 11, 55, 66, 33];
//Index
console.log(numbers[2]); //55


let person = {name: "John Wick", age: 23, country: "US"};
//Key
console.log(person['age']); //23
console.log(person.age); //23

let car1: ICar = {model: 'Nissan', doors: 3, isElectric: false};

class Car implements ICar{
    //Properties
    model: string;
    doors: number;
    isElectric: boolean;

    //Constructor method
    constructor(model: string, doors: number, isElectric: boolean){
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    //other methods
    displayMake(): void{
        console.log('The car make is ' + this.model);
    }
}

let car2 = new Car("Mazda", 4, true); //creating a new instance of class Car
let car3 = new Car("Toyota", 6, false);

car3.displayMake();
car2.displayMake();

//SportsCar is the child class and Car is the parent class.
class SportsCar extends Car{
    wheelDiameter: number;

    constructor(model: string, doors: number, isElectric: boolean, wheelDiameter: number){
        super(model, doors, isElectric); //super method refers to the parent Class constructor.

        this.wheelDiameter = wheelDiameter;
    }
}

let car4 = new SportsCar("Ferrari", 2, false, 21);
car4.displayMake();
console.log(car4.wheelDiameter);


interface ICar {
    model: string;
    doors: number;
    isElectric: boolean;
}