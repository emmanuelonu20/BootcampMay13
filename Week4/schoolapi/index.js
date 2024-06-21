const express = require('express');
const app = express();
const dbConfig = require('./dbConfig');
const Student = require('./models/student');
const Department = require('./models/department');
const Country = require('./models/country');
const cors = require('cors');

app.use(cors());

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Associations
//Relationship between the students and departments DB tables
Student.belongsTo(Department, {
    foreignKey: 'dept_id'
});

//Relationship between the students and countries DB tables
Student.belongsTo(Country, {
    foreignKey: 'country_id'
});

//Test database connection
dbConfig.authenticate().then(function(){
    console.log('Database is connected!')
}).catch(function(err){
    console.log(err);
});

//Get all students
app.get('/students', function(req, res){
    let queryParams = {
        where: {},
        include: [Department, Country]
    };

    //Filter based on country ID
    if (req.query.country !== undefined){
        queryParams.where.country_id = req.query.country;
    }

    //filter based on department ID
    if (req.query.department !== undefined){
        queryParams.where.dept_id = req.query.department;
    }

    Student.findAll(queryParams).then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err)
    });
});

//Get a single student data based on the student ID
app.get('/students/:student_id', function(req, res){
    let queryParams = {
        where: {},
        include: [Department, Country]
    };

    //Get student ID
    const studentId = parseInt(req.params.student_id);

    Student.findByPk(studentId, queryParams).then(function(result){

        if(result){
            res.status(200).send(result);
        } else {
            res.status(404).send('Student not found');
        }
        
    }).catch(function(err){
        res.status(500).send(err)
    });
});

//Create a new student
app.post('/students', function(req, res){
    Student.create(req.body).then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});

//Update an existing student
app.patch('/students/:student_id', function(req, res){
    //Get the student ID
    let studentId = parseInt(req.params.student_id);

    //Find the student record from the students DB table
    Student.findByPk(studentId).then(function(result){

        if(result){
            //updates the result object with the data sent from client (Postman)
            Object.assign(result, req.body);

            //Save into DB
            result.save().then(function(){
                res.status(200).send(result);
            }).catch(function(err){
                res.status(500).send(err);
            });
        } else {
            res.status(404).send('Student not found');
        }

    }).catch(function(err){
        res.status(500).send(err);
    });
});

//Delete an existing student
app.delete('/students/:student_id', function(req, res){
    //Get the student ID
    let studentId = parseInt(req.params.student_id);

    //Find the student record from the students DB table
    Student.findByPk(studentId).then(function(result){

        if(result){
            //delete the student record
            result.destroy().then(function(){
                res.status(200).send(result);
            }).catch(function(err){
                res.status(500).send(err);
            });
        } else {
            res.status(404).send('Student not found');
        }

    }).catch(function(err){
        res.status(500).send(err);
    });
});


app.listen(3000, function(){
    console.log('Server is running on port 3000...')
});