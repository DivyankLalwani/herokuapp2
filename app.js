const express = require('express');

const app = express();
const port = process.env.PORT || 8090;
const path = require('path');

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);