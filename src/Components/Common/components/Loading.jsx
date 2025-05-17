import { Circles } from "react-loader-spinner";
import { ProgressBar } from "react-loader-spinner";
import React from 'react';
import { Oval } from 'react-loader-spinner';
import styled from "styled-components";
function Loading(props) {
  const isLoadingMobie = window.innerWidth < 768;
    return (
        <ProgressBars>
                                        <Circles className="Circles"
                                               height={isLoadingMobie ? 120 : 200}
                                               width={isLoadingMobie ? 120 : 200}
                                                color='blue'
                                                ariaLabel='loading'
                                                
                                            />
                                            <h1 className="loading"> Đang tải................</h1>
        </ProgressBars>
    );
}





function Ovals() {
  return (
    <Container>
      <Oval
        height={100}
        width={100}
        color="blue"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="lightblue"
        strokeWidth={4}
        strokeWidthSecondary={2}
      />
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}></p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  top: 300px;
  left:700px;
 
  z-index: 1000;
  
  /* Tăng tốc độ quay của loader */
  .react-loader-spinner {
    animation: rotate 0.05s linear infinite;  /* Giảm thời gian = tăng tốc độ */
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;









const ProgressBars = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column-gap: 3rem;
            position: relative;
            top: 200px;
            .Circles {
                   
            }
            .loading {
                font-size:1.5rem;
                font-family: 'Times New Roman', Times, serif
            }

            @media (max-width: 768px) {
                 position: relative;
            top: 200px;
            left:100px;
               .Circles {
                  width:80px !important;
                  height:80px !important;
              }
                  
            }

`
export{ Ovals };

export default Loading;