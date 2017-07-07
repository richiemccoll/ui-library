import React from 'react';
import PropTypes from 'prop-types';
import { IconContainer } from './UIElements';

const CloseIcon = ({ handleClose }) => {
  return (
    <IconContainer onClick={handleClose}>
      <svg
        id="i-close"
        viewBox="0 0 32 32"
        width="16"
        height="16"
        fill="none"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M2 30 L30 2 M30 30 L2 2" />
      </svg>
    </IconContainer>
  );
};

export default CloseIcon;

CloseIcon.propTypes = {
  handleClose: PropTypes.func.isRequired
}