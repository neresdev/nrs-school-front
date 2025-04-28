import { useState } from 'react'
import './index.css'
import api from '../../services/api';
import useToken from '../../hooks/useToken';
import { toast, ToastContainer } from 'react-toastify';
import { messageFromErrorCode } from '../../utils/apiUtils';

const generateRegistration = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 7; i++) {
      const index = Math.floor(Math.random() * letters.length);
      result += letters[index];
    }
    return result;
  }

async function createStudent(data, token){
    let response = await api.post('/student/create', data,  {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    }).then(data => data).catch(data => data.response);
    return response;
}

export default function NewStudent(){
    const [studentName, setStudentName] = useState();
    const [studentEmail, setStudentEmail] = useState();
    const [classroomName, setClassroomName] = useState();
    const [isCreateStudentError, setIsCreateStudentError] = useState(null);
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
        const response = await createStudent(studentData, token);
        if(response.status >= 400 && response.status <= 499) {
            console.log(response.data)
            
            toast.error(messageFromErrorCode(response.data.errorCode), {
                position: "top-right",
                autoClose: 5000,
            });
            setIsCreateStudentError(true);
            return;
        }
        toast.success('Estudante cadastrado com sucesso!', {
            position: "top-right",
            autoClose: 5000,
        });        
    }
    
    return (
        <form onSubmit={handleCreateStudent}>
            { isCreateStudentError != null && <ToastContainer />}
            
            <div className="newstudent-container">
                <div className='newstudent-body'>
                    <h1>Cadastrar Estudante</h1>
                    <div className='newstudent-line-container'>
                        <div className='newroom-line blue'>
                            <label className='newstudent-label-name'> <p>Nome</p> <input onChange={e => setStudentName(e.target.value)} /> </label>    
                        </div>
                        <div className='newroom-line red'>
                            <label className='newstudent-label'> <p>Email(a)</p> <input type="email" onChange={e => setStudentEmail(e.target.value)}/> </label>                    
                            <label className='newstudent-label'> <p> Classe </p> <input onChange={e => setClassroomName(e.target.value)} /> </label>    
                        </div>
                        <div className='register-student-container'>
                            <button className='register-student-button'>Cadastrar Sala</button>
                        </div>
                    </div>
                    
                        
                </div>
                
            </div>
        </form>
    )
}