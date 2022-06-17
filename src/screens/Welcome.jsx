import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { welcomeStyle } from './WelcomeStyle';
import { TextCustom } from '../components/text/TextCustom';

const Welcome = () => {
    return (
        <div style={welcomeStyle}>
            <div className='Welcome-title'>
                <TextCustom justify='left'>
                    La mejor menera de
                    <br />
                    enviar tu dinero.
                </TextCustom>

            </div>
            <div className="Welcome-descript">

            </div>
            <div className="Welcome-button">

            </div>
        </div>
    )
}

Welcome.propTypes = {

}

export { Welcome };
