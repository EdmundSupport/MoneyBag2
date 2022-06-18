import React from 'react'
import PropTypes from 'prop-types'
import './ImageCustom.css'

const ImageCustom = ({ source, width, height }) => {
    let style = {};
    if (width) style = { ...style, width: width };
    if (height) style = { ...style, height: height };

    return (
        <img className='ImageCustom' src={source} alt="" style={style} />
    )
}

ImageCustom.propTypes = {
    source: PropTypes.elementType,
    width: PropTypes.string,
    height: PropTypes.string,
}

export { ImageCustom };
