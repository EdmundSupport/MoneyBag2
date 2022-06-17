import React from 'react';
import './TextCustom.css';
import PropTypes from 'prop-types';

const TextCustom = ({
    children: text,
    size,
    color,
    boxWidth,
    boxHeight,
    justify,
    align,
}) => {

    let style = {};
    if (size) style = { ...style, fontSize: size };
    if (color) style = { ...style, color: color };
    if (boxWidth) style = { ...style, width: boxWidth };
    if (boxHeight) style = { ...style, minHeight: boxHeight };
    if (justify) style = { ...style, justifyContent: justify };
    if (align) style = { ...style, alignItems: align }

    return <span className='TextCustom' style={style}>
        {text}
    </span>;
};

TextCustom.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string,
    color: PropTypes.string,
    boxWidth: PropTypes.string,
    boxHeight: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
};

export { TextCustom };
