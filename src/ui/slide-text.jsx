import React, { useState } from 'react';
import styled from 'styled-components';

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: ${props => props.bgGradient || props.bgColor || 'transparent'};
  padding: ${props => props.padding || '10px 0'};
  position: relative;

`;

const MarqueeContent = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${props => props.paused ? 'none' : `marquee ${props.duration} linear infinite`};
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const MarqueeItem = styled.span`
  display: inline-block;
  margin-right: ${props => props.gap || '50px'};
  color: white; /* Màu chữ luôn là trắng */
  font-size: ${props => props.fontSize || '16px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  background: ${props => props.textGradient || 'none'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SlideText = ({
  items = [
    'Giao nhanh - Miễn phí', 
    'Sản phẩm Chính hãng - Xuất VAT đầy đủ', 
    'Thu cũ giá ngon lên đời tiết kiệm'
  ],
  speed = 20,
  direction = 'left',
  gap = '50px',
  fontSize = '14px',
  fontWeight = 'bold',
  bgColor = 'transparent',
  bgGradient = 'linear-gradient(90deg, #f400ab 0% 0%, #02369d 100% 100%)', // Gradient mặc định cho background
  textGradient = 'linear-gradient(90deg, #ffffff, #f5f5f5)', // Gradient mặc định cho chữ
  padding = '10px 0',
  hoverPause = true
}) => {
  const [paused, setPaused] = useState(false);
  const duration = `${speed}s`;
  const duplicatedItems = [...items, ...items];


  console.log(duplicatedItems);
  return (
        <MarqueeContainer
                 bgColor={bgColor}
                 bgGradient={bgGradient}
         padding={padding}
         onMouseEnter={() => hoverPause && setPaused(true)}
      onMouseLeave={() => hoverPause && setPaused(false)}
    >
      <MarqueeContent duration={duration} paused={paused}>
        {duplicatedItems.map((item, index) => (
          <MarqueeItem
            key={`${item}-${index}`}
                 gap={gap}
                 fontSize={fontSize}
                      fontWeight={fontWeight}
            textGradient={textGradient}
          >
            {item}
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default SlideText;