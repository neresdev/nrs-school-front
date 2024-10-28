
import { useState } from 'react'

import "./Login.css";
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(`Sending data: ${username} and ${password}`  ) 
  }

  return (

    <div className="container">
      <div className='login-container'>
          <div className='container-header'>
            <h1>Bem vindo(a)!</h1>
          </div>
          <div className='container-body'>
            <div className='input-container'>
              <PersonIcon className='input-icon'/>
            <input 
              type="email"
              className="input-field"
              onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className='input-container'>
              <VpnKeyIcon  />
              <input 
                type="password"
                className="input-field"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
        <button>Entrar</button>
      </div>

    </div>
  )
}
