const express = require('express');
const app = express();

const resp = {
	message: 'Success',
	healthy: true
};

app.get('/', function (req, res) {
	res.send(resp);
});

console.log('Starting API...');
const port = 9876;
// process.env.PORT || 
app.listen(port, () => console.log(`Listening on Port ${port}`));
