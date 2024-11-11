// Overlay.js
import React from 'react';
import styled from 'styled-components';

const Overlay = () => {
    return <StyledOverlay/>;
};

const StyledOverlay = styled.div`
  
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
   z-index: 3;
  
`;

export default Overlay;
