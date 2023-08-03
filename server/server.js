import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDb from "./configs/db.js"
import cors from 'cors'


const app = express();

connectDb();

const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port,() => console.log(`Server on port ${port}`));