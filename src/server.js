const app = require('express')();
var socket = require('socket.io');

const PORT_NO = 9876;
const HEALTH_STATUS = { healthy: true };

console.log('Starting API...');

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/health', function (req, res) {
	res.send(HEALTH_STATUS);
});

var server = app.listen(PORT_NO, () => console.log(`Listening on Port ${PORT_NO}`));

let io = socket(server)
io.on('connection', (socket) => {
  console.log(`${socket.id} is connected`);
  socket.on('disconnect', (reason) => {
    console.log(`${socket.id} disconnected`)
  });
});