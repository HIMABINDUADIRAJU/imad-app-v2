var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var example = {
    title: 'EXAMPLE HTML IMAD COURSE',
    content: `<p>
                My name is Himabindu 
                student in cmrit 
                3rd b.tech cse
            </p>`
};

var htmlTemplate = `<html>
    <title> ${title} </title>
    <body>
        <div><a href='/'>HOME</a></div>
        <hr>
        <div>
               ${content}
        </div>
    </body>
</html>




`

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/example', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'example.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
