
import { useState } from 'react'

import "./index.css";
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


async function loginUser(credentials) {  
  let token = fetch('http://localhost:8081/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json());
  return token;
}

export default function Login({ setToken }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    })
    setToken(token);
    navigate('/classrooms ')
  }
  
  return (
 
    <div className="container">
      <form onSubmit={handleSubmit}> 
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
                onChange={e => setEmail(e.target.value)}
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
      </form>
      

    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
