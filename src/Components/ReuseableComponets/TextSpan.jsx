import React from 'react';
import { styled } from '@mui/material/styles';

const TextSpan = ({ children, ActionFn }) => {
  const StyledSpan = styled('span')({
    fontSize: '14px',
    lineHeight: '20px',
    color: '#007185',
    cursor: 'pointer',
    '&:hover': {
      color: '#e47911',
      textDecoration: 'underline',
    },
  });

  return <StyledSpan onClick={ActionFn}>{children}</StyledSpan>;
};

export default TextSpan;
