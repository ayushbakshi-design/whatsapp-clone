import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    UserName : String,
    PhoneNumber : String,
    Password : String
  },)

export default mongoose.model("Users", UserSchema)