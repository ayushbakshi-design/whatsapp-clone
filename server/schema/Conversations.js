import mongoose from "mongoose";

const Conversation = mongoose.Schema({
    firstUser : String,
    secondUser: String,
    msgs : Array,
    lastTime : String,
    conversationId : String
})

export default mongoose.model("ConverSationModel", Conversation);

