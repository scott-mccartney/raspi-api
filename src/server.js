const app = require('express')();
const socket = require('socket.io');
const PiCamera = require('pi-camera');
const controller = require('./api/controller');
const piSocket = require('./socket/pi-socket');

const PORT_NO = 9876;

console.log('Starting API...');
controller.mapEndpoints(app);

var server = app.listen(PORT_NO, () => console.log(`Listening on Port ${PORT_NO}`));

piSocket.configureSocket(server, socket);

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
