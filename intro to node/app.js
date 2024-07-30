const fs = require('node:fs');

// create a new file
// fs.writeFile('log.txt', 'this is the logged data', (err)=>{
//     if(err) console.log(err)
//     else console.log('done!')
// })



// append data/ add data to existing file
// fs.appendFile('log.txt', '\nthis is the latest updated doc', (err)=>{
//     if(err) console.log(err)
//     else console.log('done!')
// })



// fs.rename('log.txt', 'data.txt', (err)=>{
//     if(err) console.log(err)
//     else console.log('done!')
// })

// fs.copyFile('data.txt', './backup/dataCopy.txt', (err)=>{
//     if(err) console.log(err)
//     else console.log('done!')
// })


// fs.unlink('./backup/dataCopy.txt', (err)=>{
//     if(err) console.log(err)
//     else console.log('done!')
//     })

fs.rmdir('./backup',{recursive: true}, (err)=>{
    if(err)console.log(err)
        else console.log('done')
})