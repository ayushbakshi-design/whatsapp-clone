import express from 'express'
import Users from '../schema/Users.js';

// Router Declration
const router = express.Router();


// Endpoints
router.get('/', (req,res)=>{
    Users.find({
        UserName : "demo",
        PhoneNumber : "82565",
        Password : "hello"
    }).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

export default router;



