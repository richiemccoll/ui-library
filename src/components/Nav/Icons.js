import React from 'react';

export const Icon = ({ isExpanded }) => {
  return (
    <span>
      {isExpanded
        ? <svg
            id="i-close"
            viewBox="0 0 32 32"
            width="18"
            height="18"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            style={{'color': 'white'}}
          >
            <path d="M2 30 L30 2 M30 30 L2 2" />
          </svg>
        : <svg
            id="i-menu"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="currentcolor"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            style={{'color': 'white'}}
          >
            <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
          </svg>}
    </span>
  );
};
