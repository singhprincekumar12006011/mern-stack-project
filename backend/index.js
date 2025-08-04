import express from 'express';
import connectDB from './config/db.js';
import 'dotenv/config';
import userRoute from './routes/userRoute.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.send("Hello from Server Side");
    console.log("Hello from Server Side");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});