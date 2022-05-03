import express from "express";
import Conversations from "../schema/Conversations.js";
const router = express.Router();

router.post("/", (req, res) => {
  Conversations.create({
    firstUser: "Chandan",
    secondUser: "Ashu",
    msgs: [
      {
        message: "Hello",
        sender: "Ashu",
        reciever: "Chandan",
        timing: "08:30",
        read: "yes",
      },
      {
        message: "Hi",
        sender: "Chandan",
        reciever: "Ashu",
        timing: "08:31",
        read: "yes",
      },
      {
        message: "How are you",
        sender: "Ashu",
        reciever: "Chandan",
        timing: "08:32",
        read: "no",
      },
    ],
    lastTime: "Today",
    conversationId: "10103",
  })
    .then((responce) => res.send(responce))
    .catch((err) => console.log(err));
});

export default router;
