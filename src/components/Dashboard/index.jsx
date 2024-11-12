import './index.css'
import PropTypes from 'prop-types';

export default function Dashboard({studentsQuantityLabelText, studentsQuantity}){
    return (
        <div className='dashboard'>
            <h2 className='students-quantity-label'>{studentsQuantityLabelText}</h2>
            <h1 className='students-quantity'>{studentsQuantity}</h1>
        </div>  
    )
}

Dashboard.propTypes = {
    studentsQuantityLabelText: PropTypes.string.isRequired,
    studentsQuantity: PropTypes.string.isRequired
  }