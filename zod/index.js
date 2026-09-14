const express = require('express');
const app = express();
const {z, success} = require('zod')
app.use(express.urlencoded({extended: true}))

const userValidation = z.object({
    name: z.string().min(3).max(20),
    email: z.email(),
    role: z.enum(['user', 'admin']).default('user'),
    linkedinUrl: z.url().optional(),
}).strict();

// create user 
app.post('/user', (req,res)=>{
    const {name, email, linkedinUrl, address} = req.body;
    let validationData = userValidation.safeParse({name, email, address})
    if(validationData.success){
        res.status(201).json({
            success: true,
            data: validationData.data,
            message: 'user created successfully!' 
        })
    }
    else{
        res.status(422).json({
            success: false,
            errors: validationData.error.issues
        })
    }
})


app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})