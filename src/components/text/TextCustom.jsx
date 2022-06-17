import React from 'react';
import '../text/Text.css';
import PropTypes from 'prop-types';

const TextCustom = ({
    text,
    size = '20px',
    color = '#ffffff',
    boxWidth = '100%',
    boxHeight = '50px',
}) => {
    return <span className='TextCustom' style={
        {
            fontSize: size,
            color: color,
            width: boxWidth,
            height: boxHeight,
        }}>
        {text}
    </span>;
};

TextCustom.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    boxWidth: PropTypes.string,
    boxHeight: PropTypes.string,
};

export { TextCustom };
