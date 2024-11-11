import { BrowserRouter, Route, Routes } from "react-router-dom"
import ClassRooms from "./components/ClassRooms"
import Header from "./components/Header/Header"
import useToken from "./hooks/useToken";
import Login from "./components/Login/Login";

function App() {

  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/classrooms" element={<ClassRooms />} />
          <Route path="/dashboard" element={<Header />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
