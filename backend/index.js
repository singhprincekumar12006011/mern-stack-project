import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './src/config/db.js';
import userRouter from './src/routes/userRoutes.js';
import taskRouter from './src/routes/taskRoutes.js';
import companyRouter from './src/routes/companyRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

connectDB()
app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);
app.use('/api/company', companyRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

