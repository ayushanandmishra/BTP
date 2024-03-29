import mongoose from "mongoose";


const PersonSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 5,
      },
      role: { type: String, enum: ['student', 'teacher'], default: 'student' } // Add role field with default value 'user'

});

const Person=mongoose.model('Person',PersonSchema);
export default Person;
