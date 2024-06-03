const express = require('express'); //Importing express
const app = express(); //Creating a new web app using express

app.use(express.urlencoded({extended: false}));

//Data
let students = [
    {id: 1, name: "John Wick", department: "Computer Science"},
    {id: 2, name: "Jennifer Lopez", department: "Music"},
    {id: 3, name: "Victoria Benneth", department: "History"},
    {id: 4, name: "Peter Pan", department: "History"},
];

//Routes

//Get all students
app.get('/students', function(req, res){
    res.status(200).send(students);
});

//Filtering student records based on department and student name
app.get('/filter', function(req, res){

    //Department filtering
    if(req.query.department !== undefined){
        let dept = req.query.department;

        //Filter out students that correspond to the specified department.
        let result = students.filter((item) => {
            return item.department === dept;
        });

        res.send(result);
    }

    //Student Name filtering
    if(req.query.name !== undefined){
        let name = req.query.name;

        //Filter out students that correspond to the specified department.
        let result = students.filter((item) => {
            return item.name === name;
        });

        res.send(result);
    } 

});

//Create a new student
//Retrieve student record inside request body
app.post('/students', function(req, res){
    let newStudent = req.body; 
    students.push(newStudent); //adding the new student record to array
    res.status(201).send(newStudent);
});

//Full student record update 
//Retrieve student ID as a param.
app.put('/students/:student_id', function(req, res){
    //parseInt function converts a string value to integer.
    let studentId = parseInt(req.params.student_id); 

    //Get student array index;
    let index = students.findIndex((s) => {
        return s.id === studentId;
    });

    //Update student data
    let newStudentData = req.body;
    students[index] = newStudentData; //replacement

    res.status(200).send(newStudentData);
});

//Partial student record update
app.patch('/students/:student_id', function(req, res){
    //parseInt function converts a string value to integer.
    let studentId = parseInt(req.params.student_id); 

    //Get student array index;
    let index = students.findIndex((s) => {
        return s.id === studentId;
    });

    //Update only department
    students[index].department = req.body.department;

    res.status(200).send(students[index]);
});

//Delete a student record
app.delete('/students/:student_id', function(req, res){
    //parseInt function converts a string value to integer.
    let studentId = parseInt(req.params.student_id); 

    //Get student array index;
    let index = students.findIndex((s) => {
        return s.id === studentId;
    });

    //Delete student record
    students.splice(index, 1);

    res.send('Success');
});

//Setup web server
app.listen(3000, function(){
    console.log('Server running on port 3000...');
});