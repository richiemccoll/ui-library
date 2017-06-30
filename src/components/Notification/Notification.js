import React from "react";
import CloseIcon from './Icons';
import { getBackgroundColor, Container } from './UIElements';

const Notification = ({ type, message, closeNotification }) => {
  return (
    <Container type={getBackgroundColor(type)} role="alert">
      {message}
      <CloseIcon handleClose={closeNotification} />
    </Container>
  );
};

export default Notification;
