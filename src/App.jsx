import { Route, Routes } from "react-router-dom"
import ClassRooms from "./components/ClassRooms"
import Header from "./components/Header"
import Login from "./components/Login"
import useToken from "./hooks/useToken";
import NewRoom from "./components/NewRoom";
import NewStudent from "./components/NewStudent";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ClassroomStudents from "./components/ClassroomStudents";
import Student from "./components/Student";
import RequireAuth from "./components/RequireAuth";

function App() {
  const { setToken } = useToken();

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/classrooms" element={<RequireAuth><ClassRooms /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Header /></RequireAuth>} />
        <Route path="/new-classroom" element={<RequireAuth><NewRoom /></RequireAuth>} />
        <Route path="/new-student" element={<RequireAuth><NewStudent /></RequireAuth>} />
        <Route path="/classroom-students" element={<RequireAuth><ClassroomStudents /></RequireAuth>} />
        <Route path="/student" element={<RequireAuth><Student /></RequireAuth>} />
      </Routes>
    </>
  )
}

export default App
