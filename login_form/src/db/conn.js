const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/login-form',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4
}).then(()=>{
    console.log('Connected!!');
}).catch((e)=>{
    console.log("Not conntected");
})