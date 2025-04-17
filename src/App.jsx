import { Route, Routes} from "react-router-dom"
import ClassRooms from "./components/ClassRooms"
import Header from "./components/Header"
import Login from "./components/Login"
import useToken from "./hooks/useToken";
import NewRoom from "./components/NewRoom";
import NewStudent from "./components/NewStudent";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const SESSION_EXPIRED_MESSAGE = "Sua sessão expirou. Faça login novamente.";
function App() {
  const {token, setToken} = useToken();
  
  if(isJwtInvalid(token)){

    toast.error(SESSION_EXPIRED_MESSAGE, {
      position: "top-right",
      autoClose: 5000,
    });
    
    return  <>
              <ToastContainer />
              <Login setToken={setToken} />
            </>
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

function isJwtInvalid(token){
  if (!token) return true;

  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    
    const currentTime = Math.floor(Date.now() / 1000); // segundos
    
    if (decodedPayload.exp) {
        return decodedPayload.exp < currentTime;
    }

    if (decodedPayload.iat) {
      const expirationTime = decodedPayload.iat + 3600; // 1 hora
      return expirationTime < currentTime;
    }

    return true;
  } catch (e) {
    console.error('Erro ao verificar expiração do token:', e);
    return true;
  }
}