import SignUpForm from './Components/Signup/TeacherSignUp/Signupform'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import StudentSignUpForm from './Components/Signup/StudentSignUp/StudentSignUpForm'
import LoginPage from './Components/Login/LoginPage'
import LandingPage from './Components/LandingPage/LandingPage'
import SignUpPage from './Components/Signup/SignUpPage'
import TeacherDashboard from './Components/TeachersDashboard/Dashboard'
import SubjectDashboard from './Components/Subjects/Subject'

function App() {
  

  return (
    <>
        <BrowserRouter>
        <Routes>

          <Route path='/' Component={SubjectDashboard}/>
          <Route path='/login' Component={LoginPage}></Route>
          <Route path='/signup/:role' Component={SignUpPage}/>
          
        </Routes>
        {/* <Navbar/> */}
        {/* <LandingPage/> */}

        </BrowserRouter>
    </>
  )
}

export default App
