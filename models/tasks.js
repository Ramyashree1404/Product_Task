const mongoose = require('mongoose');

let taskSchema=new mongoose.Schema({
    id:{
        type:String,
        required:{value:true,message:"Title Required"}
    },
    productname:{
        type:String,
        required:{value:true,message:"product Required"}
    },
    productcategory:{
        type:String,
        required:{value:true,message:"category Required"}
    },
    imageurl:{
        type:String,
        required:{value:true,message:"image Required"}
    },
    productdescription:{
        type:String,
        required:{value:true,message:"product description Required"}
    }

})


module.exports=mongoose.model("Task",taskSchema)