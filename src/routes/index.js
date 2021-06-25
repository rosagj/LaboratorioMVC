const express = require ('express');
const task = require('../models/task');
const router = express.Router();

const Task = require('../models/task');

//
router.get('/',async(req,res)=>{
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index',{
        tasks
    });
});

//Add new data
router.post('/add',async (req,res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});

//Find a product
router.get('/edit/:id',async(req,res)=>{
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('edit',{
        task
    });
});

//Update a product
router.post('/edit/:id',async(req,res)=>{
    const {id} = req.params;
    await Task.update({_id:id},req.body);
    res.redirect('/');
});

//Delete a product
router.get('/delete/:id',async(req,res)=>{
    const {id} = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
});

module.exports = router;