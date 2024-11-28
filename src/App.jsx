import { BrowserRouter, Route, Routes } from "react-router-dom"
import ClassRooms from "./components/ClassRooms"
import Header from "./components/Header"
import Login from "./components/Login"
import useToken from "./hooks/useToken";
import NewRoom from "./components/NewRoom";

function App() {

  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/classrooms" element={<ClassRooms />} />
          <Route path="/dashboard" element={<Header />} />
          <Route path="/new-room" element={<NewRoom />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
