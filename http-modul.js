const { read } = require('fs');
const http = require('http'); 

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Dobrodošli na početnu stranicu')
    }
    if (req.url === '/a'){
        res.end('Dobrodošli na početnu stranicu')
    }
    res.end(`
        <h1>Ops!</h1>
        <p> We can't seem to find the page you are looking for </p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)