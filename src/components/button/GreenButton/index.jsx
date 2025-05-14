import PropTypes from 'prop-types';

import './index.css';

export default function GreenButton({text, onClick}) {
    return (
        <button
        onClick={onClick}
        className='green-button'
        >
            {text}
        </button>
    );
}

GreenButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}