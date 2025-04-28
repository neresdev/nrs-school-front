import Dashboard from "../Dashboard";
import SearchIcon from '@mui/icons-material/Search';
import './index.css';

export default function Students() {



    return (
        <div className="students-container">
        <div className='students-body'>
            <div className='new-room-container'>
                <button className='new-room-button' >Novo aluno</button>
            </div>
            <div className='dashboards-container'>
                <Dashboard studentsQuantityLabelText="Número de alunos" studentsQuantity="123" />
                <Dashboard studentsQuantityLabelText="Alunos em recuperação" studentsQuantity="456" />
                <Dashboard studentsQuantityLabelText="Alunos alfabetizados" studentsQuantity="789" />
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
                        <th>Turno</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                        </tr>
                    
                </tbody>
            </table>
        </div>
       </div> 
    )
}