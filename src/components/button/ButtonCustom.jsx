import React from 'react';
import './ButtonCustom.css';
import PropTypes from 'prop-types';

const ButtonCustom = ({
    children: text,
    size,
    color,
    bgColor,
    boxWidth,
    boxHeight,
    justify,
    align,
}) => {

    let style = {};
    if (size) style = { ...style, fontSize: size };
    if (color) style = { ...style, color: color };
    if (bgColor) style = { ...style, backgroundColor: bgColor };
    if (boxWidth) style = { ...style, width: boxWidth };
    if (boxHeight) style = { ...style, minHeight: boxHeight };
    if (justify) style = { ...style, justifyContent: justify };
    if (align) style = { ...style, alignItems: align }

    return <button type="button" className='ButtonCustom' style={style}>
        {text}
    </button>;
};

ButtonCustom.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    boxWidth: PropTypes.string,
    boxHeight: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
};

export { ButtonCustom };
