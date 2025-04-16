import { useState } from 'react'
import './index.css'
import api from '../../services/api';
import useToken from '../../hooks/useToken';

async function createClassroom(data, token){
        
    api.post('/create/classroom', data,  {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
}

export default function NewRoom(){
    const {token} = useToken();
    const[classroomName, setClassroomName] = useState();
    const[teacher, setTeacher] = useState();
    const[shift, setShift] = useState();
    const[classNumber, setclassNumber] = useState();
    const[capacity, setCapacity] = useState();

    const handleCreateClassroom = async e => {
        e.preventDefault();
        
        if(parseInt(shift) !== 1 && parseInt(shift) !== 2 && parseInt(shift) !== 3 ) {
            alert('Invalid shift!')
            return;
        }

        const classroomData = {
            classroomName,
            teacher,
            shift,
            classNumber,
            capacity
        }
        await createClassroom(classroomData, token)
    }

    return (
        <div className="newroom-container">
            <div className='newroom-body'>
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
                        <button className='register-room-button' onClick={handleCreateClassroom}>Cadastrar Sala</button> 
                    </div>
                    </div>

                </div>
                
                    
            </div>
        
        
    )
}
