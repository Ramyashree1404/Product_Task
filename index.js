const express = require('express');
const taskRoutes = require('./routes/tasks.route');
const connectdb = require('./db/connection');
require('dotenv').config();
let app = express();

app.use(express.json())
app.use("/api", taskRoutes)

//! error handler
app.use((req, res, next) => {
    // console.log(err)
    res.status(404).json({ status: false,message:"Page not foumd"});
})

app.use((err,req, res, next) => {
    // console.log(err)
    res.status(500).json({ status: false,message:err});
})


let port=process.env.PORT || 3000

let start = async () => {
    try {
        await connectdb(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server running on port ${port}`)
        })
        console.log("connected to mongodb")

    }
    catch (err) {
        console.log(err)
    }
}



start();