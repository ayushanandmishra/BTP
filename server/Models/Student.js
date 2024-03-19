import mongoose from "mongoose";


const StudentSchema=new mongoose.Schema({
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
      rollno:{
        type:String,
        required:true
      },
      branch:{
        type:String,
        required:true
      }
      ,
      registeredCourses:{
        type: [String], // Array of strings to store subjects
        default: [] // Default value is an empty array 
      }

});

const Student=mongoose.model('Student',StudentSchema);
export default Student;
