const express = require('express'); //Import express package
const app = express(); //creating a web application

//app.use(myMiddleware); //defined a global middleware

function myMiddleware(req, res, next){
    console.log('I am a middleware');
    res.send('Blocked by middleware')
    //next(); //move request to the actual route
}

//Routes
//req: request
//res: response
app.get('/', function(req, res){
    res.send('Hello World'); //Sending a response to a web client
});

app.get('/about', myMiddleware, function(req, res){
    res.send('About page');
});

//route param
app.get('/view-student/:student_id', function(req, res){
    let studentId = req.params.student_id;
    res.send(studentId);
});

//query
app.get('/view-student', myMiddleware, function(req, res){
    let studentId = req.query.student_id;
    res.send(studentId);
});

//Web server
app.listen(3000, function(){
    console.log('Server running on port 3000...');
});