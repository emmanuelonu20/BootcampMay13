//alert('Alerting from a JS file');

// Variables
var first_name = 'John';
var age = 45;
let country = "Canada";

console.log(first_name, age);

//Arithmetic Operators
//+: addition, -: Substraction, *: Multiplication, /: division
let x = 34;
let y = 12;
let result = x + y;

console.log('Result: ', result);
console.log(4/2); //2
console.log(4%2); //0

let num = 2;
num++; //num = num + 1
console.log(num); //3
num++;
console.log(num);//4


//Assignment Operators
num += 3; //num = num + 3;
console.log(num);//7

num -= 4;
console.log(num); //3


//Comparison Operators
//boolean: true or false

num == 3; //true
num == 8; //false
num === 3; //true
num != 8; //true
num > 8; //false
num >= 8; //false


//String concatenation
let fname = 'John';
let lname = 'Wick';
console.log(fname + lname); //JohnWick
console.log(fname + num); //John3

//Logical operators
//&&: And
//||: OR

//comparison operator && comparison operator

num > 8 && num < 4; //false && true = false
num > 8 || num < 4; //false || true = true

!(num > 8); // !(false) = true


console.log(fname.length); //4

console.log(fname.toUpperCase()); //JOHN


// Array
let studentNames = ['Peter', 'Haben', 'Wael', 'Kushan', 'Jay'];
//let studentNames = new Array('Peter', 'Haben', 'Wael', 'Kushan', 'Jay');

//index
console.log(studentNames[1]); //Haben
console.log(studentNames[4]); //Jay
console.log(studentNames[3]); //Kushan

console.log(studentNames.length); //5

studentNames.push('Joseph');

console.log(studentNames);

studentNames[0] = "John";

console.log(studentNames.length); //6

console.log(studentNames.sort());

let b = 60;

if (b < 50) {
    console.log('I am a small number');
} 
else if(b < 60) {
    console.log('I am a medium sized number');
}
else {
    console.log('I am a large number');
}

let color = 'yellow';

switch(color){
    case 'yellow':
        console.log('This is a yellow color');
        break;
    case 'green':
        console.log('This is a green color');
        break;
    default:
        console.log('This is an unknown color');
}

let sum = 0;
for(let i = 1; i <= 1000000; i++){
    sum += i; //sum = sum + i
}
console.log('Sum: ', sum);

for(let index in studentNames){
    console.log(studentNames[index]);
}

let r = 12;
let t = 45;

console.log(r + t);

r = 67;
t = 23;
console.log(r + t);

r = 90;
t = -34;

console.log(r + t);

//parameter is used to bring data into the function
//return to take data out of the function
function add(r, t){
    return r + t;
}

console.log(add(12, 45));
console.log(add(67, 23));
console.log(add(90, -34));

function printName(){
    console.log('John Wick')
}

printName()

printName()

printName()