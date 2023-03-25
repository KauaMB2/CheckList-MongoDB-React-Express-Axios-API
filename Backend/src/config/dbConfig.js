const mongoose=require("mongoose")
const dbConfig="mongodb+srv://zkauambbr:zKauaMBBR12345@zkauammbr.xtasgad.mongodb.net/?retryWrites=true&w=majority"
const connection=mongoose.connect(dbConfig)
module.exports=connection