import express from 'express'
import { createTask, getTask, updateTask,deleteTask } from '../controllers/taskController.js';

const taskRouter = express.Router();

taskRouter.post('/create', createTask);
taskRouter.get('/getall', getTask);
taskRouter.put("/update/:id", updateTask);
taskRouter.delete("/delete/:id", deleteTask);

export default taskRouter;