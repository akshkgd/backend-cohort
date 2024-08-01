const http = require('http');
const fs = require('fs');
const url = require('url')

const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const myUrl = url.parse(req.url, true);
    console.log(myUrl)
    let log = `${Date.now()} ${req.method} requested ${req.url}\n`;
    fs.appendFile('log.txt', log, ()=>{
        switch(myUrl.pathname){
            case '/':
                const userName = myUrl.query.username;
                    res.end(`<h1>Hello, ${userName}</h1>`);
                    break;
            case '/search/':
                    const q = myUrl.query.q;
                    res.end(`<h1>Hey you are searching for, ${q}</h1>`);
                    break;

            case '/register/':
                if(req.method === 'POST'){
                    // save the data to db
                }
                else{
                    res.end('Not a valid post request')
                }
            default:
                res.end(`<h1>404, page not found</h1>`)
        }
    })
    
})

myServer.listen(8000, ()=>{
    console.log('server is running!')
})



// urls
