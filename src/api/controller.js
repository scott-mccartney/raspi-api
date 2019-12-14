const HEALTH_STATUS = { healthy: true };

(function() {
    module.exports.mapEndpoints = function(app) {
        app.get('/', function (req, res) {
            res.sendFile(__dirname + '/pages/index.html');
        });
        
        app.get('/health', function (req, res) {
            res.send(HEALTH_STATUS);
        });
    }
}());