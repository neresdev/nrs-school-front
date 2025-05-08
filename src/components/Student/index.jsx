import { useEffect, useState } from 'react'
import './index.css'
import api from '../../services/api';
import useToken from '../../hooks/useToken';
import { toast, ToastContainer } from 'react-toastify';
import { messageFromErrorCode } from '../../utils/apiUtils';
import EditIcon from '@mui/icons-material/Edit';
import { useLocation } from "react-router-dom";

async function updateStudent(data, token){
    let response = await api.put('/student/update', data,  {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    }).then(res => res).catch(err => err.response);
    console.log(response);
    
    return response;
}

export default function Student(){
    const [studentName, setStudentName] = useState('');
    const [isEditingStudentName, setIsEditingStudentName] = useState(false);
    const [studentEmail, setStudentEmail] = useState('');
    const [isEditingStudentEmail, setIsEditingStudentEmail] = useState(false);
    const [classroomName, setClassroomName] = useState('');
    const [isEditingClassroomName, setIsEditingClassroomName] = useState(false);
    const [registration, setRegistration] = useState('');
    const [isUpdateStudentError, setIsUpdateStudentError] = useState(null);
    const [classrooms, setClassrooms] = useState([]);
    const {token} = useToken();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const studentUrlRegistration = queryParams.get('registration');    


    useEffect(() => {
            api
              .get(`/student/${studentUrlRegistration}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                    
                }
              })
              .then((response) => {
                const responseData = response.data;
                setStudentName(responseData.studentName);
                setStudentEmail(responseData.studentEmail);
                setClassroomName(responseData.classroomName);
                setRegistration(responseData.registration);
                
            })
              .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
              });

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

          }, [token, studentUrlRegistration]);
    
    
    const getInvalidFields = () => {
        const invalidFields = [];
        
        if(!validField(studentName)) invalidFields.push('Nome');
        if(!validField(studentEmail)) invalidFields.push('Email');
        if(!validField(classroomName)) invalidFields.push('Classe');
        return invalidFields;
        
    }

    const validField = field => {
        return (field !== null && field !== undefined && field.trim() !== "");
    }

    const handleUpdateStudent = async e => {
        e.preventDefault();
        const invalidFields = getInvalidFields();
        if (invalidFields.length != 0) {
            const errorMessage = `Campos inválidos: ${invalidFields.join(', ')}`
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 5000,
            });
            setIsUpdateStudentError(true);
            return;
        }

        const studentData = {
            studentName,
            studentEmail,
            classroomName,
            registration
        }

        const response = await updateStudent(studentData, token);
        if(response.status >= 400 && response.status <= 499) {
            
            toast.error(messageFromErrorCode(response.data.errorCode), {
                position: "top-right",
                autoClose: 5000,
            });
            setIsUpdateStudentError(true);
            return;
        }
        toast.success('Estudante atualizado com sucesso!', {
            position: "top-right",
            autoClose: 5000,
        }); 
        setIsUpdateStudentError(false)
    }
    return (
        <form onSubmit={handleUpdateStudent}>
            { isUpdateStudentError != null && <ToastContainer />}
            <div className="student-container">
                <div className='student-body'>
                    <h1>Estudante: {registration}</h1>
                    <div className='student-line-container'>
                        <div className='student-line blue'>
                            <label className='student-label-name'> 
                                <p>Nome <EditIcon className='edit-icon' onClick={() => setIsEditingStudentName(!isEditingStudentName)} /></p>
                                <input 
                                    onChange={e => setStudentName(e.target.value)}
                                    className={!isEditingStudentName ? 'input-disabled' : ''}
                                    disabled={!isEditingStudentName}
                                    value={studentName}
                                />
                            </label>
                        </div>
                        <div className='student-line red'>
                            <label className='student-label'>
                                <p>Email(a) <EditIcon className='edit-icon' onClick={() => setIsEditingStudentEmail(!isEditingStudentEmail)} /></p>
                                <input 
                                    type="email"
                                    onChange={e => setStudentEmail(e.target.value)}
                                    className={!isEditingStudentEmail ? 'input-disabled' : ''}
                                    disabled={!isEditingStudentEmail}
                                    value={studentEmail}
                                />
                            </label>                    
                            <label className='student-label'> 
                                <p> Classe  <EditIcon className='edit-icon' onClick={() => setIsEditingClassroomName(!isEditingClassroomName)} /></p>
                                <select
                                    onChange={e => setClassroomName(e.target.value)} 
                                    disabled={!isEditingClassroomName}
                                    value={classroomName}
                                >
                                    {
                                    classrooms.map(classroom => (
                                        <option 
                                            key={classroom.classroomId}
                                            value={classroom.classroomName}
                                        >
                                                {classroom.classroomName}
                                        </option>
                                    ))}
                                </select>
                            </label>    
                        </div>
                        <div className='register-student-container'>
                            <button className='register-student-button'>Atualizar dados</button>
                        </div>
                    </div>
                    
                        
                </div>
                
            </div>
        </form>
    )
}