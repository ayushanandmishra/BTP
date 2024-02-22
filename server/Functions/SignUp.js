import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import Person from "../Models/Person.js";

export async function Signup(req, res) {
    try {
        const { firstName, lastName, email, password, picturePath, role } = req.body;

        // Hash password
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        // Create new user with specified role
        const newPerson = new Person({
            firstName,
            lastName,
            email,
            password: hashPassword,
            picturePath,
            role // Assign role
        });

        const savePerson = await newPerson.save();
        res.status(201).json(savePerson);
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