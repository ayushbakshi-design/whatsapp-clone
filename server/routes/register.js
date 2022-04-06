import express from 'express'
import Users from '../schema/Users.js';


// Router Declration
const router = express.Router();


// Endpoints
router.post('/', (req,res)=>{
    
    console.log(req.data)
    res.send(req.data)
//     Users.create({
//         UserName : req.data.username,
//         PhoneNumber : req.data.phone,
//         Password : req.data.password
//     }).then((data)=>{
//         res.status(201).send(data)
//     }).catch((err)=>{
//         res.status(500).send(err)
//     })
})

export default router;



