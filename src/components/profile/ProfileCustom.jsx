import React from 'react';
// import PropTypes from 'prop-types'
import { TextCustom } from '../text/TextCustom';
import { ImageCustom } from '../image/ImageCustom';
import { ButtonCustom } from '../button/ButtonCustom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const ProfileCustom = (props) => {
  return (
    <div className="ProfileCustom">
      <div className="ProfileCustom-Name">
        <TextCustom>Edmundo Guerrero</TextCustom>
      </div>
      <div className="ProfileCustom-Image">
        <ImageCustom source="./assets/img/avi/avatar.png" />
      </div>
      <div className="ProfileCustom-Logout">
        <ButtonCustom>
          <FontAwesomeIcon icon={solid('user-secret')} />

          {/* <FontAwesomeIcon icon="fa-solid fa-check-square" /> */}
        </ButtonCustom>
      </div>
    </div>
  );
};

// ProfileCustom.propTypes = {

// }

export { ProfileCustom };
