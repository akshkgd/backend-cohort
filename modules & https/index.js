const http = require('http')
const fs = require('fs')
const myServer = http.createServer((req, res)=>{
    let log = `${Date.now()} request received from  '${req.url}'\n`
    fs.appendFile('log.txt', log, ()=>{
        switch(req.url){
            case '/': res.end('<h1>This is homepage</h1>')
            break
            case '/about' : res.end('<h1>This is about page</h1>')
            break
            default:
            res.end('<h1>404, page not found</h1>')
        }
    }) })


myServer.listen(8000, ()=>{
    console.log('server is running in port 8000')
})