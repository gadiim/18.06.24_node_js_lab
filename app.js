const http = require('http');

function notFound(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
}

const server = http.createServer((req, res) => {
    
    const url = req.url.toLowerCase();
    
    switch (url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Home page');
            break;
        case '/about':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('About page');
            break;
        default:
            notFound(res);
            break;
    }
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
