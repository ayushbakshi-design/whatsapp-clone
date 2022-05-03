import express from 'express'
import Users from '../schema/Users.js';

// Router Declration
const router = express.Router();


// Endpoints
router.post('/', (req,res)=>{
    Users.find({
        UserName : req.body.UserName,
        Password : req.body.Password
    }).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

export default router;



