import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './src/config/db.js';
import admissionRouter from './src/routers/studentAdmissionRouter.js';
import userRouter from './src/routers/userRouter.js';

const app = express();
const port = process.env.PORT || 5000;

connectDB()

app.use(cors());
app.use(express.json());

// routes
app.use('/api/admision/student', admissionRouter);
app.use('/api/user', userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})