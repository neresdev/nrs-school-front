import Dashboard from '../Dashboard';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';

export default function ClassRooms(){
    return (
       <div className="classroom-container">
        <div className='classroom-body'>
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
            <div className='classrooms-container'>
                <div className='classrooms-header'>
                    <p>Turma</p>
                    <p>Professor(a)</p>
                    <p>Turno</p>
                    <p>Número</p>
                </div>

                <div className='classrooms-body'>
                    <p>5°A</p>
                    <p>Mônica Torres</p>
                    <p>Tarde</p>
                    <p>1</p>
                </div>
                <div className='classrooms-body'>
                    <p>4°B</p>
                    <p>Paulo Garzón</p>
                    <p>Manhã</p>
                    <p>13</p>
                </div>
                <div className='classrooms-body'>
                    <p>3°A</p>
                    <p>Luís Gustavo</p>
                    <p>Noite</p>
                    <p>17</p>
                </div>
                <div className='classrooms-body'>
                    <p>6°C</p>
                    <p>Maria Silva</p>
                    <p>Tarde</p>
                    <p>19</p>
                </div>
                
            </div>
        </div>
       </div> 
    )
}