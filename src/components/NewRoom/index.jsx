import './index.css'

export default function NewRoom(){
    return (
        <div className="newroom-container">
            <div className='newroom-body'>
                <h1>Cadastrar Sala</h1>
                <div className='newroom-line-container'>
                    <div className='newrooom-line blue'>
                        <label className='newroom-label'> <p> Turma </p> <input /> </label>    
                        <label className='newroom-label'> <p>Professor(a)</p> <input /> </label>                    
                    </div>
                    <div className='newrooom-line red'>
                        <label className='newroom-label'> <p> Turno </p> <input /> </label>    
                        <label className='newroom-label'> <p>Número da sala</p> <input /> </label>                    
                    </div>
                    <div className='register-room-container'>
                        <button className='register-room-button'>Cadastrar Sala</button>
                    </div>
                    

                </div>
                
                    
            </div>
            
        </div>

        
    )
}