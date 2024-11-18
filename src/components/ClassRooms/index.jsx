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
            <table className='table-classsrooms' cellSpacing={"0"}>
                <tr>
                    <th className='table-classrooms-first-th'>Turma</th>
                    <th>Professor(a)</th>
                    <th>Turno</th>
                    <th className='table-classrooms-last-th'>Número</th>
                </tr>
                <tr>
                    <td>5°A</td>
                    <td>Mônica Torres</td>
                    <td>Tarde</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>4°B</td>
                    <td>Paulo Garzón</td>
                    <td>Manhã</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>3°A</td>
                    <td>Luís Gustavo</td>
                    <td>Noite</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td>6°C</td>
                    <td>Maria Silva</td>
                    <td>Tarde</td>
                    <td>19</td>
                </tr>
            </table>
        </div>
       </div> 
    )
}