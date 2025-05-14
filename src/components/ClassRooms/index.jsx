import { useEffect, useState } from 'react';
import Dashboard from '../Dashboard';
import './index.css';
import api from "../../services/api";
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import GreenButton from "../button/GreenButton";


export default function ClassRooms(){
    const navigate = useNavigate();
    const [classrooms, setClassrooms] = useState([]);
    const [searchPattern, setSearchPattern] = useState('');
    const {token} = useToken();

    const handleRedirectToNewClassroom = () => {
        navigate('/new-classroom');
    }

    const handleRedirectToClassroom = classroomId => {
        navigate(`/classroom-students?id=${classroomId}`);
    }

    useEffect(() => {
        api
          .get("/classrooms", {
            headers: {
                'Authorization': `Bearer ${token}`
                
            }
          })
          .then((response) => {
            setClassrooms(response.data);
        })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, [token]);

    return (
       <div className="classroom-container">
        <div className='classroom-body'>
            <div className='new-room-container'>
                <GreenButton onClick={handleRedirectToNewClassroom} text="Cadastrar Sala" />
            </div>
            <div className='dashboards-container'>
                <Dashboard studentsQuantityLabelText="Número de alunos" studentsQuantity="123" />
                <Dashboard studentsQuantityLabelText="Alunos em recuperação" studentsQuantity="456" />
                <Dashboard studentsQuantityLabelText="Alunos alfabetizados" studentsQuantity="789" />
            </div>
            <div className='search-classroom-container'>
                <input type='text' placeholder='Busque uma sala' className='search-classrooms-input' onChange={e => setSearchPattern(e.target.value)}/>
            </div>
            <table className='table-classsrooms' cellSpacing={"0"}>
                <thead>
                    <tr>
                        <th>Turma</th>
                        <th>Professor(a)</th>
                        <th>Turno</th>
                        <th>Número</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    searchPattern !== '' ? 
                    classrooms.filter(classroom => classroom.classroomName.startsWith(searchPattern)).map(classroom => (
                        <tr className='classroom-tr' onClick={() => handleRedirectToClassroom(classroom.classroomId)} key={classroom.classroomName}>
                            <td>{classroom.classroomName}</td>
                            <td>{classroom.teacher}</td>
                            <td>{extractShift(classroom.shift)}</td>
                            <td>{classroom.classNumber}</td>
                        </tr>)
                    )
                        : classrooms.map(classroom => (
                        <tr className='classroom-tr' onClick={() => handleRedirectToClassroom(classroom.classroomId)} key={classroom.classroomName}>
                            <td>{classroom.classroomName}</td>
                            <td>{classroom.teacher}</td>
                            <td>{extractShift(classroom.shift)}</td>
                            <td>{classroom.classNumber}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
       </div> 
    )
}

const extractShift = (shift) => {
    switch (shift.toString()){
        case '1':
            return 'Manhã'
        case '2':
            return 'Tarde'
        case '3':
            return 'Noite'
        default :
            return 'Ainda não atribuído'
    }
       

}