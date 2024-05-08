const http = require("http");

const server = http.createServer((req, res) => {
if(req.url==='/'){
    res.end('Welcome to our home page')
}else if(req.url==='/about'){
    res.end('Here is our short history')
}else{

    res.end(`
    <h1>Ooops!</h1>
    <p>We cant seem to find the page you are lookinf for</p>
    <a href="/"> back to homepage</a>`)
}
}
);

server.listen(5000);
