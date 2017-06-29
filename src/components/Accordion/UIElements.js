import styled from 'styled-components';

export const Container = styled.ul`
  width: 90%;
  position: relative;
  background-color: #f2f2f2;
  padding: 16px;
  transition: .2s background-color linear;
  list-style: none;
  box-shadow: 1px 1px 1px 1px #f2f2f2;

  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

export const IconContainer = styled.span`
  position: absolute;
  right: 0;
  margin-right: 16px;
`;