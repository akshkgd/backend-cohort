const express = require('express')
const fs = require('fs')
const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    fs.readdir('./data', (err, files)=>{
        console.log(files)
        if(err){
            res.send(err)
        }   
        else{
            res.render('index', {files})
        }
    })
    
})
app.get('/create', (req, res)=>{
    let today = new Date();
    let fileName = today.toISOString().split('T')[0];
    fs.writeFile(`./data/${fileName}.txt`, '', (err)=>{
        if(err)
            res.send(err)
        else{
            res.redirect('/')
        }
    })
})

app.get('/edit', (req,res)=>{
    fs.readdir('./data', (err, files)=>{
        console.log(files)
        if(err){
            res.send(err)
        }   
        else{
            let fileName = req.query.fileName;
            fs.readFile(`./data/${fileName}`, 'utf-8', (err, data)=>{
                res.render('edit', {files, data, fileName})
            })
            
        }
    })
})

app.post('/update', (req,res)=>{
    let {fileName, fileData} = req.body;
    fileData = fileData.trim();
    fs.writeFile(`./data/${fileName}`, fileData, (err)=>{
        if(err){
            res.send(err)
        }
        else{
            res.redirect(req.get('referer'))
        }
    })
})

app.listen(8000, ()=>{
    console.log('server is running!')
})