import Dashboard from "../Dashboard";
import SearchIcon from '@mui/icons-material/Search';
import './index.css';
import { useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";
import api from "../../services/api";
import { useEffect, useState } from "react";

export default function Students() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [students, setStudents] = useState([]);
    const [classroomData, setClassroomData] = useState();
    const {token} = useToken();
    const classroomId = queryParams.get('id')

    useEffect(() => {
        api.get(`/students/${classroomId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
                
            }
            })
            .then((response) => {
                setStudents(response.data);
        })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        api.get(`/classrooms/${classroomId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
                
            }
            })
            .then((response) => {
                
                setClassroomData(response.data);
        })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        }, [token, classroomId]);

    return (
        <div className="students-container">
        <div className='students-body'>
            <div className='new-room-container'>
                <button className='new-room-button' >Novo aluno</button>
            </div>
            <div className='students-dashboards-container'>
                <Dashboard studentsQuantityLabelText="Sala" studentsQuantity={classroomData?.classroomName} dashboardClassname="students-dashboard"/>
                <Dashboard studentsQuantityLabelText="Quantidade de alunos" studentsQuantity={students.length} dashboardClassname="students-dashboard"/>
                <Dashboard studentsQuantityLabelText="Alunos em recuperação" studentsQuantity="6" dashboardClassname="students-dashboard"/>
            </div>
            <div className='search-students-container'>
                <input type='text' placeholder='Busque um aluno' className='search-students-input' />
                <button className='button-search-students'> <SearchIcon  className='icon-search-students'/> <p className='label-search-students'>Buscar</p> </button>
            </div>
            <table className='table-classsrooms' cellSpacing={"0"}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Matrícula</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.registration}>
                            <td>{student.studentName}</td>
                            <td>{student.registration}</td>
                            <td>{student.studentEmail}</td>
                        </tr>
                    ))}
                        
                    
                </tbody>
            </table>
        </div>
       </div> 
    )
}