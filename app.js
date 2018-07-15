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

app.listen(3000, function(){
    console.log('Server started on port 3000...');     
})

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

