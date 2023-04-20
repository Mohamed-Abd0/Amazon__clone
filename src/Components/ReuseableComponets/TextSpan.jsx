import React from 'react';
import { styled } from '@mui/material/styles';

const TextSpan = ({ children }) => {
  const StyledSpan = styled('span')({
    color: '#007185',
    cursor: 'pointer',
    '&:hover': {
      color: '#e47911',
      textDecoration: 'underline',
    },
  });

  return <StyledSpan>{children}</StyledSpan>;
};

export default TextSpan;
