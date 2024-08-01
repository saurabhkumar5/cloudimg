import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import videoRoutes from './routes/video.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/videos",videoRoutes)



app.listen(port,()=>{
    connectDB();
    console.log("server is started on port",port)
})