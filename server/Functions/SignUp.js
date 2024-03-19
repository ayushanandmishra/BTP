import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import Teacher from "../Models/Teacher.js";
import Student from "../Models/Student.js";

export async function TeacherSignup(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body;

        console.log(req.body);
        // Hash password
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        // Create new user with specified role
        const newTeacher = new Teacher({
            firstName,
            lastName,
            email,
            password: hashPassword,
        });

        const saveTeacher = await newTeacher.save();
        res.status(201).json(saveTeacher);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

export async function StudentSignup(req, res) {
    try {
        const { firstName, lastName, email, password,rollNo,branch } = req.body;

        console.log(req.body);
        console.log("heheh");
        // Hash password
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        // Create new user with specified role
        const newStudent = new Student({
            firstName,
            lastName,
            email,
            password: hashPassword,
            rollno:rollNo,
            branch
        });

        const saveStudnet = await newStudent.save();
        res.status(201).json(saveStudnet);
    } catch (err) {
        res.status(500).json(err.message);
    }
}




export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const person = await Person.findOne({ email });

        if (!person) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const passwordMatch = await bcrypt.compare(password, person.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        
        const payload = { id: person._id, role: person.role };

        
        const accessToken = jwt.sign(payload, process.env.JWT_TOKEN_SECRET);

        res.status(200).json({ person, token: accessToken });
    } catch (err) {
        res.status(500).json({ error_message: err.message });
    }
}