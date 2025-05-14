
import './index.css';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from 'prop-types';

export default function BackButton({path}) {
    const navigate = useNavigate();
    const handleRedirect = path => {
        navigate(`${path}`)
    }

    return <button 
            onClick={() => handleRedirect(path)}
            className='back-button'>
            <ArrowBackIcon className="custom-arrow-icon"  />Voltar</button>
}


BackButton.propTypes = {
    path: PropTypes.string.isRequired
  }