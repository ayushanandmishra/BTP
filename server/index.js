import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { TeacherSignup,StudentSignup } from "./Functions/SignUp.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //extract the current module location. Will be later used to serve static files

const app = express();
app.use(cors()); 
dotenv.config();
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
console.log("Static files served from:", path.join(__dirname, "public/assets"));


app.get("/",(req,res)=>{

    res.send("BTP WORK HAS STARTED BOYS");
    console.log('hello');
})


app.post("/auth/register/teacher",TeacherSignup);
app.post("/auth/register/student",StudentSignup);


const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  })
  .catch((error) => console.log(`${error} did not connect`));