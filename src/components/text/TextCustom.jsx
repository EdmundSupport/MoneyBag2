import React from 'react';
import { textStyle } from './textStyle.js';
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
    const style = {
        ...textStyle,
        fontSize: (size ? size : textStyle.fontSize),
        color: (color ? color : textStyle.color),
        width: (boxWidth ? boxWidth : textStyle.width),
        minHeight: (boxHeight ? boxHeight : textStyle.minHeight),
        justifyContent: (justify ? justify : textStyle.justifyContent),
        alignItems: (align ? align : textStyle.alignItems),
    };

    console.log(style);
    return <span style={style}>
        {text}
    </span>;
};

TextCustom.propTypes = {
    children: PropTypes.element,
    size: PropTypes.string,
    color: PropTypes.string,
    boxWidth: PropTypes.string,
    boxHeight: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
};

export { TextCustom };
