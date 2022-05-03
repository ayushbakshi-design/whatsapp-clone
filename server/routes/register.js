import express from 'express'
import Users from '../schema/Users.js';


// Router Declration
const router = express.Router();


// Endpoints
router.post('/', (req,res)=>{
    Users.create({
        UserName : req.body.UserName,
        PhoneNumber : req.body.PhoneNumber,
        Password : req.body.Password
    }).then((data)=>{
        res.status(201).send(data)
        console.log("user Created")
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

export default router;



