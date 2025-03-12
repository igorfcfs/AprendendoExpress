const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        return res.end('Welcome')
    } else if (req.url === '/about'){
        return res.end('Hi there')
    }

    // Se não for nenhuma das rotas acima, retorna erro 404
    res.writeHead(404, { 'Content-Type': 'text/html' });
    return res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
})

server.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000');
});
