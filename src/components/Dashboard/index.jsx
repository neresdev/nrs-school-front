import './index.css'
import PropTypes from 'prop-types';

export default function Dashboard({studentsQuantityLabelText, studentsQuantity, dashboardClassname}){
    return (
        <div className={dashboardClassname != null ? dashboardClassname : 'dashboard'}>
            <h2 className='quantity-label'>{studentsQuantityLabelText}</h2>
            <h1 className='quantity'>{studentsQuantity}</h1>
        </div>  
    )
}

Dashboard.propTypes = {
    studentsQuantityLabelText: PropTypes.string.isRequired,
    studentsQuantity: PropTypes.string.isRequired,
    dashboardClassname: PropTypes.string.isRequired
  }