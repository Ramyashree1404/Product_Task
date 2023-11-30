const Task = require('../models/tasks');

let addTask = async (req, res, next) => {
    try {
        let task = await Task.create(req.body);
        res.status(201).json({ error: "false", message: "Task added Successfully" })

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "true", message: err.errors.title.message })
    }
}

let getTasks = async (req, res, next) => {
    try {
        let { page, pageSize, productname, productcategory } = req.query;
        let qobj = {};
        if (productname) qobj.productname = productname;
        if (productcategory) qobj.productcategory = productcategory;
    
        let alltask =  Task.find(qobj)
        if(!page && !pageSize){
            alltask=await alltask
            return res.status(200).json({count:Task.length,error:false,
                message:"product fetched successfully",data:alltask})
        }
        let newpage=page||1;
        let newpageSize=pageSize||10
        let newskip=(newpage-1)*newpageSize
         
        alltask=await alltask.skip(newskip).limit(newpageSize)
     res.status(200).json({count:Task.length,error:false,
        message:"product fetched successfully",data:alltask})
        let tasksprod=await alltask
        res.status(200).json(tasksprod)
}
catch(err){
    console.log(err);
}
}
let getTask = async (req, res, next) => {
    let { id } = req.params

    try {
        let task = await Task.findOne({ id });

        if (!task) {
           return res.status(404).json({ error: "true", message: `No Task Foun with id ${id}` })

        }
        res.status(200).json(task)
    }
    catch (err) {
        res.status(500).json({ error: "true", message: `Task with given id is not found` })

    }
}

let deleteTask = async (req, res, next) => {
    let { id } = req.params
    try {
        let deletedTask = await Task.findOneAndDelete({  id });
        if (!deletedTask) {
            return res.status(400).json({ error: "true", message: `No Task Foun with id ${id}` })

        }
        res.status(201).json({ error: "false", message: `Task ${deletedTask.title} deleted Successfully` })

    }
    catch (err) {
        console.log(err.message)
        res.status(400).json({ error: "true", message: `Task with given id is not found` })

    }
}

module.exports = {
    addTask,
    getTasks,
    getTask,
    deleteTask
}