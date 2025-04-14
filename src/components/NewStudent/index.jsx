import { useState } from 'react'
import './index.css'

export default function NewStudent(){
    const [name, setName] = useState();
    const [email,setEmail] = useState();
    const [classroom, setClassroom] = useState();

    return (
        <div className="newstudent-container">
            <div className='newstudent-body'>
                <h1>Cadastrar Estudante</h1>
                <div className='newstudent-line-container'>
                    <div className='newroom-line blue'>
                        <label className='newstudent-label-name'> <p>Nome</p> <input onChange={e => setName(e.target.value)} /> </label>    
                    </div>
                    <div className='newroom-line red'>
                        <label className='newstudent-label'> <p>Email(a)</p> <input onChange={e => setEmail(e.target.value)}/> </label>                    
                        <label className='newstudent-label'> <p> Classe </p> <input onChange={e => setClassroom(e.target.value)} /> </label>    
                    </div>
                    <div className='register-room-container'>
                        <button className='register-room-button'>Cadastrar Sala</button>
                    </div>
                    

                </div>
                
                    
            </div>
            
        </div>

        
    )
}