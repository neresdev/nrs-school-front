import { useEffect, useState } from 'react';
import Dashboard from '../Dashboard';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
import api from "../../services/api";
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

export default function ClassRooms(){
    const navigate = useNavigate();
    const [classrooms, setClassrooms] = useState([]);
    const {token} = useToken();

    const handleRedirectToNewClassroom = () => {
        navigate('/new-classroom');
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
                <button className='new-room-button' onClick={handleRedirectToNewClassroom}>Cadastrar Sala</button>
            </div>
            <div className='dashboards-container'>
                <Dashboard studentsQuantityLabelText="Número de alunos" studentsQuantity="123" />
                <Dashboard studentsQuantityLabelText="Alunos em recuperação" studentsQuantity="456" />
                <Dashboard studentsQuantityLabelText="Alunos alfabetizados" studentsQuantity="789" />
            </div>
            <div className='search-classroom-container'>
                <input type='text' placeholder='Busque uma sala' className='search-classrooms-input' />
                <button className='button-search-classrooms'> <SearchIcon  className='icon-search-classrooms'/> <p className='label-search-classrooms'>Buscar</p> </button>
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
                    {classrooms.map(classrom => (
                        <tr key={classrom.classroomName}>
                            <td>{classrom.classroomName}</td>
                            <td>{classrom.teacher}</td>
                            <td>{extractShift(classrom.shift)}</td>
                            <td>{classrom.classNumber}</td>
                        </tr>
                    ))}
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