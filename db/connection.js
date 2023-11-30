const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);
let connectdb=(uri)=>
{
    return mongoose.connect(uri)
}

module.exports=connectdb;
