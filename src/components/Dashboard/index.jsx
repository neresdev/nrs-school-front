import './index.css'
import PropTypes from 'prop-types';

export default function Dashboard({labelText, labelValue, dashboardClassname}){
    return (
        <div className={dashboardClassname != null ? dashboardClassname : 'dashboard'}>
            <h2 className='quantity-label'>{labelText}</h2>
            <h1 className='quantity'>{labelValue}</h1>
        </div>  
    )
}

Dashboard.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelValue: PropTypes.string.isRequired,
    dashboardClassname: PropTypes.string.isRequired
  }