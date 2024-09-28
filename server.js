const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World! its me mariooo\n');
});

const startServer = function() {
    return server.listen(port, hostname, function() {
        console.log(`Server running at http://${hostname}:${port}/`);
    }).on('error', function(err) {
        console.error('Server encountered an error:', err);
    });
};

module.exports = { startServer, server };
