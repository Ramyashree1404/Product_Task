const express = require('express');
const {
    addTask,
    getTasks,
    getTask,
    deleteTask
} = require('../controllers/index');
    
let router=express.Router();


router.post("/tasks",addTask);
router.get("/tasks",getTasks);
router.get("/tasks/:id",getTask);
router.delete("/tasks/:id",deleteTask);

module.exports=router