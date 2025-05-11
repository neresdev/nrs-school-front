import CustomArrowIcon from "../../icons/CustomArrowIcon";
import './index.css';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function BackButton({path}) {
    const navigate = useNavigate();
    const handleRedirect = path => {
        navigate(`${path}`)
    }

    return <button 
                className='back-button'
                onClick={() => handleRedirect(path)}
            > <CustomArrowIcon /> Voltar</button>
}


BackButton.propTypes = {
    path: PropTypes.string.isRequired
  }