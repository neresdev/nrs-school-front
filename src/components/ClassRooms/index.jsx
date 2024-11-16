import Dashboard from '../Dashboard';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';

export default function ClassRooms(){
    return (
       <div className="container">
        <div className='classroom-container'>
            <div className='new-room-container'>
                <button className='new-room-button'>Cadastrar Sala</button>
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
        </div>
       </div> 
    )
}