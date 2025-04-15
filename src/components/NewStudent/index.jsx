import { useState } from 'react'
import './index.css'
import api from '../../services/api';
import useToken from '../../hooks/useToken';

const generateRegistration = () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    for (let i = 0; i < 7; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres[indice];
    }
    return resultado;
  }

async function createStudent(data, token){
        
    api.post('/create/student', data,  {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
    .then(response => {
        console.log('response create student');
        console.log(response);
    })
}

export default function NewStudent(){
    const [studentName, setStudentName] = useState();
    const [studentEmail, setStudentEmail] = useState();
    const [classroomName, setClassroomName] = useState();
    const {token} = useToken();

    const handleCreateStudent = async e => {
        e.preventDefault();
        const registration = generateRegistration();
        const studentData = {
            studentName,
            studentEmail,
            classroomName,
            registration
        }
        console.log('studentData')
        console.log(JSON.stringify(studentData))
        const response = await createStudent(studentData, token)
        console.log(response)
    }

    return (
        <div className="newstudent-container">
            <div className='newstudent-body'>
                <h1>Cadastrar Estudante</h1>
                <div className='newstudent-line-container'>
                    <div className='newroom-line blue'>
                        <label className='newstudent-label-name'> <p>Nome</p> <input onChange={e => setStudentName(e.target.value)} /> </label>    
                    </div>
                    <div className='newroom-line red'>
                        <label className='newstudent-label'> <p>Email(a)</p> <input onChange={e => setStudentEmail(e.target.value)}/> </label>                    
                        <label className='newstudent-label'> <p> Classe </p> <input onChange={e => setClassroomName(e.target.value)} /> </label>    
                    </div>
                    <div className='register-room-container'>
                        <button className='register-room-button' onClick={handleCreateStudent}>Cadastrar Sala</button>
                    </div>
                </div>
                
                    
            </div>
            
        </div>

        
    )
}