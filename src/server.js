const app = require('express')();
var socket = require('socket.io');
const PiCamera = require('pi-camera');

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
io.on('connection', onConnect);

function onConnect (socket) {
  console.log(`${socket.id} is connected`);
  socket.on('disconnect', (reason) => {
    console.log(`${socket.id} disconnected`)
  });

  socket.on('timecheck', (data) => {
    console.log(data);
  });
}

const myCamera = new PiCamera({
  mode: 'photo',
  output: `${ __dirname }/imgs/test.jpg`,
  width: 640,
  height: 480,
  nopreview: true
});
 
myCamera.snap()
  .then((result) => {
    console.log('Success');
    console.log(result);
  })
  .catch((error) => {
    console.log('Error');
    console.log(error);
  });
// var index = 0;
// let myVar = setInterval(function(){ timer() }, 1000);

// function timer() {
//   if (index > 10) {
//     stopFunction();
//   }
//   io.emit('timecheck', { time: '123'}); 
//   index++;
// }

// function stopFunction() {
//     clearInterval(myVar);
// }
