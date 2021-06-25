const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name:String,
    mark:String,
    price:Number,
    category:String,
    description:String,
});

module.exports = mongoose.model('tasks', TaskSchema);