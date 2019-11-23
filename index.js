const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('VS Code SSH works!')
});

console.log('Starting API...');
app.listen(3000);
console.log('Listening on Port 3000');
