const {z, success, string} = require('zod');

const nameValidation = z.string().min(3).max(20);
const emailValidation = z.email();
const ageValidation = z.coerce.number().min(1).max(100).int().positive();
const isUserActiveValidation = z.boolean()
const linkedinUrlValidation = z.url();
const dobValidation = z.coerce.date();

// const userValidation = z.object({
//     name: z.string(),
//     email: z.email(),
//     role: z.enum(['user', 'admin']).default('user'),
//     linkedinUrl: z.url().optional(),
// })



const hobbiesValidation = z.array(z.number()).min(2).max(5);





let result  = hobbiesValidation.safeParse(
    [1]
)
if(result.success){
    console.log(result)
}
else{
    console.log(result.error)
}
