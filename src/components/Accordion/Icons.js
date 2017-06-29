import React from 'react';
import { IconContainer } from './UIElements';

export const Icons = ({ isOpen }) => {
  return (
    <IconContainer>
      {isOpen
        ? <svg
            id="i-chevron-top"
            viewBox="0 0 32 32"
            width="16"
            height="16"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M30 20 L16 8 2 20" />
          </svg>
        : <svg
            id="i-chevron-bottom"
            viewBox="0 0 32 32"
            width="16"
            height="16"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M30 12 L16 24 2 12" />
          </svg>}
    </IconContainer>
  );
};