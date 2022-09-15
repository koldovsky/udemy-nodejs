const http = require('http');

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <form method="POST" action="/create-user">
            <input name="name">
            <input type="submit">
        </form>
        `);
        return res.end();
    }
    if (req.url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
        return res.end();
    }
    if (req.url === '/create-user' && req.method === 'POST') {
        const data = [];
        req.on('data', chunk => data.push(chunk));
        req.on('end', () => {
            const formData = Buffer.concat(data).toString();
            const userName = formData.split('=')[1];
            console.log(userName);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(3000);
