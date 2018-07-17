const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
    }));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.render('index');
});

app.get('/raResponsibilities', function(req, res){
    res.render('raResponsibilities');
});

app.get('/monthByMonth', function(req, res){
    res.render('monthByMonth'); 
});

app.get('/proposalsEvals', function(req, res){
    res.render('proposalsEvals'); 
});

app.get('/helpfulSites', function(req, res){
    res.render('helpfulSites'); 
});

app.get('/months/august', function(req, res){
    res.render('months/august');
});

app.get('/months/september', function(req, res){
    res.render('months/september');
});

app.get('/months/october', function(req, res){
    res.render('months/october');
});

app.get('/months/november', function(req, res){
    res.render('months/november');
});

app.get('/months/december', function(req, res){
    res.render('months/december');
});

app.get('/months/january', function(req, res){
    res.render('months/january');
});

app.get('/months/february', function(req, res){
    res.render('months/february');
});

app.get('/months/march', function(req, res){
    res.render('months/march');
});

app.get('/months/april', function(req, res){
    res.render('months/april');
});

app.get('/months/may', function(req, res){
    res.render('months/may');
});

app.listen(port, function(){
    console.log('Server started on port ' + port + '...');     
});

/*fs.readFile('../views/index.ejs', (err, ejs) => {
    if(err){
        throw err;
    }
    
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html', 'text/css');
        res.write(ejs);
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log('Server started on port ' + port);
    });
});*/