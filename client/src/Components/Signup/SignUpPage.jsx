import Navbar from "../Navbar/Navbar";
import StudentSignUpForm from "./StudentSignUp/StudentSignUpForm";
import SignUpForm from "./TeacherSignUp/Signupform";
import { useParams } from "react-router-dom";

export default function SignUpPage() {
    const { role } = useParams(); // Extracting the parameter from the URL

    console.log(role);
    return (
        <>
            <Navbar />
            {role === 'student' ? <StudentSignUpForm /> : <SignUpForm />}
        </>
    );
}