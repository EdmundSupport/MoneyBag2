import React from 'react';
// import PropTypes from 'prop-types';
import './Welcome.css';
import { TextCustom } from '../components/text/TextCustom';
import { ButtonCustom } from '../components/button/ButtonCustom';
import { ImageCustom } from '../components/image/ImageCustom';

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="Welcome-img">
        <ImageCustom source="./assets/img/bgs/background_v1.png" />
      </div>
      <div className="Welcome-title">
        <TextCustom>
          La mejor menera de
          <br />
          enviar tu dinero.
        </TextCustom>
      </div>
      <div className="Welcome-description">
        <TextCustom>
          El mejor metodo de enviar y recibir dinero. <br />
          Coneta tu dinero, tus amigos y tu familia.
        </TextCustom>
      </div>
      <div className="Welcome-button">
        <ButtonCustom justify="center" onClick={null}>
          Empecemos
        </ButtonCustom>
      </div>
    </div>
  );
};

Welcome.propTypes = {};

export { Welcome };
