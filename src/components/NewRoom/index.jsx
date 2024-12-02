import './index.css'

export default function NewRoom(){
    return (
        <div className="newroom-container">
            <div className='newroom-body'>
                <h1>Cadastrar Sala</h1>
                <div className='newroom-line-container'>
                    <div className='newrooom-line'>
                        <label className='newroom-label'> <p> Turno </p> <input /> </label>    
                        <label className='newroom-label'> <p>Professor(a)</p> <input /> </label>                    
                    </div>
                    <div className='newrooom-line'>
                        <label className='newroom-label'> <p> Turno </p> <input /> </label>    
                        <label className='newroom-label'> <p>Professor(a)</p> <input /> </label>                    
                    </div>
                </div>
                
                    
            </div>
            
        </div>

        
    )
}