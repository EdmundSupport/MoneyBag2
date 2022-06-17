import React from 'react';
import { buttonStyle } from './buttonStyle.js';
import PropTypes from 'prop-types';

const ButtonCustom = ({
    text,
    size = '20px',
    color = '#ffffff',
    boxWidth = '100%',
    boxHeight = '50px',
}) => {
    const style = {
        ...buttonStyle,
        fontSize: size,
        color: color,
        width: boxWidth,
        height: boxHeight
    };

    return <button type="button" style={style}>
        {text}
    </button>;
};

ButtonCustom.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    boxWidth: PropTypes.string,
    boxHeight: PropTypes.string,
};

export { ButtonCustom };
