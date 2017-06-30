import styled from 'styled-components';

export const getBackgroundColor = type => {
  switch (type) {
    case "error":
      return "red";
    case "warning":
      return "#777";
    case "success":
      return "#00E676";
    default:
      return "#c5c5c5";
  }
};

export const IconContainer = styled.span`
  position: absolute;
  right: 0;
  margin-right: 16px;
`;

export const Container = styled.div`
  width: 90%;
  padding: 8px;
  height: 24px;
  position: relative;
  background-color: ${props => props.type};
  border-radius: 2px;
`;