import { useState } from 'react'
import './index.css'
import api from '../../services/api';
import useToken from '../../hooks/useToken';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import BackButton from "../button/GreenBackButton";

async function createClassroom(data, token){
    return api.post('/classrooms/create', data,  {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    }).then(res => res).catch(err => err.response);
}

export default function NewRoom(){
    const {token} = useToken();
    const navigate = useNavigate();
    const[classroomName, setClassroomName] = useState();
    const[teacher, setTeacher] = useState();
    const[shift, setShift] = useState();
    const[classNumber, setclassNumber] = useState();
    const[capacity, setCapacity] = useState();

    const handleCreateClassroom = async e => {
        e.preventDefault();
        
        if(parseInt(shift) !== 1 && parseInt(shift) !== 2 && parseInt(shift) !== 3 ) {
            toast.error('Turno inválido!');
            return;
        }

        const classroomData = {
            classroomName,
            teacher,
            shift,
            classNumber,
            capacity
        }
        const response = await createClassroom(classroomData, token);
        if (response.status >= 200 && response.status <= 299) {
            toast.success('Sala cadastrada com sucesso!');
            navigate('/classrooms');
        } else {
            toast.error('Erro ao cadastrar sala.');
        }
    }

    return (
        <div className="newroom-container">
            <ToastContainer />
            <div className='newroom-body'>
                <div className='back-button-container'>
                    <BackButton path="/classrooms" />
                </div>
                <h1>Cadastrar Sala</h1>
                <div className='newroom-line-container'>
                    <div className='newrooom-line blue'>
                        <label className='newroom-label'> <p> Turma </p> <input onChange={e => setClassroomName(e.target.value)} /> </label>    
                        <label className='newroom-label'> <p>Professor(a)</p> <input onChange={e => setTeacher(e.target.value)}/> </label>                    
                    </div>
                    <div className='newrooom-line'>
                        <label className='newroom-label'> <p> Turno </p> <input onChange={e => setShift(e.target.value)}/> </label>    
                        <label className='newroom-label'> <p>Número da sala</p> <input onChange={e => setclassNumber(e.target.value)}/> </label>                    
                    </div>
                    <div className='newrooom-line'>
                        <label className='newroom-label'> <p>Capacidade da sala</p> <input onChange={e => setCapacity(e.target.value)}/> </label>    
                        <div className='register-classroom-label'> 
                            <button className='register-room-button' onClick={handleCreateClassroom}>Cadastrar Sala</button>
                        </div>
                    </div>
                    </div>
                </div>
                
                    
            </div>
        
        
    )
}
