const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World! its me mariooo\n');
});

const startServer = () => {
    return server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    }).on('error', (err) => {
        console.error('Server encountered an error:', err);
    });
};

startServer();
module.exports = { startServer, server };
