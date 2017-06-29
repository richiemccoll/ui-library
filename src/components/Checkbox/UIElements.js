import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    backface-visibility: hidden;
    outline: 0;
    vertical-align: baseline;
    font-style: normal;
    min-height: 17px;
    font-size: 1rem;
    line-height: 17px;
    min-width: 17px;
`;

export const Label = styled.label`
  color: black;
  padding: .5em;
  vertical-align: middle;

  ${props =>
    props.disabled &&
    css`
    color: #ddd;
  `}
`;

export const Input = styled.input`
    -moz-appearence: none;
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    border: 1px solid #ddd;
    transition: all 0.25s;
    border-radius: 2px;

    &:checked {
      background-color: #2196F3;
      outline: 0;

      ${props =>
      props.type === "radio" &&
      css`
        background-color: #2196F3;
        border-radius: 15px;
    `
    }
}
    ${props =>
      props.type === "radio" &&
      css`
        border-radius: 15px;
  `}
`;
