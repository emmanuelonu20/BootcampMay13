const express = require('express');
const app = express();
const dbConfig = require('./dbConfig');
const Student = require('./models/student');

//Test database connection
dbConfig.authenticate().then(function(){
    console.log('Database is connected!')
}).catch(function(err){
    console.log(err);
});

//Get all students
app.get('/students', function(req, res){
    Student.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err)
    });
});


app.listen(3000, function(){
    console.log('Server is running on port 3000...')
});