const http = require('http');
const serverModule = require('../server');

describe('HTTP Server', function() {
    let serverInstance;

    beforeAll(function(done) {
        serverInstance = serverModule.startServer();
        done();
    });

    afterAll(function(done) {
        if (serverInstance) {
            serverInstance.close(done);
        } else {
            done(new Error('Server instance is undefined'));
        }
    });

    test('responds with Hello, World!', function(done) {
        http.get('http://localhost:3000', function(res) {
            let data = '';

            res.on('data', function(chunk) {
                data += chunk;
            });

            res.on('end', function() {
                expect(res.statusCode).toBe(200);
                expect(data).toBe('Hello, World! its me mariooo\n');
                done();
            });
        }).on('error', function(err) {
            console.error('Request failed:', err);
            done(err);
        });
    });
});
