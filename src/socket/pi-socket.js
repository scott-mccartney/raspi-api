(function() {
    module.exports.configureSocket = function(server, socket) {
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
    }
}());