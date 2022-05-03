import express from "express";
import findConversation from "../schema/Conversations.js";

const router = express.Router();

router.post("/", (req, res) => {

  findConversation
    .find({
      $or: [{ firstUser: req.body.name }, { secondUser: req.body.name }],
    })
    .then((responce) => res.send(responce))
    .catch((err) => console.log(err));
});

export default router;
