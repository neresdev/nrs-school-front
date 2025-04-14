import { Route, Routes} from "react-router-dom"
import ClassRooms from "./components/ClassRooms"
import Header from "./components/Header"
import Login from "./components/Login"
import useToken from "./hooks/useToken";
import NewRoom from "./components/NewRoom";
import NewStudent from "./components/NewStudent";

function App() {
  const {token, setToken} = useToken();
  
  if(!token){
    return <Login setToken={setToken} />
  }

  return (
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/classrooms" element={<ClassRooms />} />
        <Route path="/dashboard" element={<Header />} />
        <Route path="/new-classroom" element={<NewRoom />} />
        <Route path="/new-student" element={<NewStudent />} />
      </Routes>
  )
}

export default App
