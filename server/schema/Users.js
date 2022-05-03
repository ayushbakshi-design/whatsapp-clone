import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    UserName : {type:String , required:true, unique:true, trim:true},
    PhoneNumber : String,
    Password : String
  },)

export default mongoose.model("Users", UserSchema)