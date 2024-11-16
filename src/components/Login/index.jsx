
import { useState } from 'react'

import "./index.css";
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  let defaultToken = {"token":`fake_hardcoded_token_${Math.floor(Math.random() * 10)}`};
  
  // let token = fetch('http://localhost:8080/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(credentials)
  // }).then(data => data.json());
  return defaultToken;
}

export default function Login({ setToken }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    })
    setToken(token);
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
      </form>
      

    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
