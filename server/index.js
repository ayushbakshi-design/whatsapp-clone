import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'

// Route imports
import createUser from './routes/register.js'
import findUser from "./routes/login.js"

import addConversation from "./routes/addConversation.js"
import findConversation from './routes/findConversaton.js'

// Model imports


// Database connection
mongoose
  .connect(
    "mongodb+srv://ayush:0qppwwqyvIG4Qnfv@cluster0.gsicv.mongodb.net/whatsappClone?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
  
  
  // Variable Declaration
  const port = 8000
  const app = express();
  
  //Middlewares 
  
  app.use(express.json());
  app.use(cors({
    origin : "*"
  }))
  
  
  // Endpoints 
  app.get('/', (req,res)=>{
    res.send("express initiated");
  })


// Login & Register Routes 
app.use("/register", createUser)
app.use("/login", findUser)

// Routes for creating and fetching conversations for each users

app.use("/createConversation", addConversation)
app.use("/findConversations", findConversation)


// Simple App listener
app.listen(port, ()=>{
    console.log("listenting at port 8000")
})

