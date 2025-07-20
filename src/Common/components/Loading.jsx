// import { Circles } from "react-loader-spinner";
// import { ProgressBar } from "react-loader-spinner";
// import React from 'react';
// import { Oval } from 'react-loader-spinner';
// import styled from "styled-components";
// function Loading(props) {
//   const isLoadingMobie = window.innerWidth < 768;
//     return (
//         <ProgressBars>
//                                         <Circles className="Circles"
//                                                height={isLoadingMobie ? 120 : 200}
//                                                width={isLoadingMobie ? 120 : 200}
//                                                 color='blue'
//                                                 ariaLabel='loading'
                                                
//                                             />
//                                             <h1 className="loading"> Đang tải................</h1>
//         </ProgressBars>
//     );
// }





// function Ovals() {
//   return (
//     <Container>
//       <Oval
//         height={100}
//         width={100}
//         color="blue"
//         visible={true}
//         ariaLabel="oval-loading"
//         secondaryColor="lightblue"
//         strokeWidth={4}
//         strokeWidthSecondary={2}
//       />
//       <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}></p>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   position: fixed;
//   top: 300px;
//   left:700px;
 
//   z-index: 1000;
  
//   /* Tăng tốc độ quay của loader */
//   .react-loader-spinner {
//     animation: rotate 0.05s linear infinite;  /* Giảm thời gian = tăng tốc độ */
//   }

//   @keyframes rotate {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;









// const ProgressBars = styled.div`
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             grid-column-gap: 3rem;
//             position: relative;
//             top: 200px;
//             .Circles {
                   
//             }
//             .loading {
//                 font-size:1.5rem;
//                 font-family: 'Times New Roman', Times, serif
//             }

//             @media (max-width: 768px) {
//                  position: relative;
//             top: 200px;
//             left:100px;
//                .Circles {
//                   width:80px !important;
//                   height:80px !important;
//               }
                  
//             }

// `
// export{ Ovals };

// export default Loading;


// LoadingSkeleton.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Circles } from "react-loader-spinner";
import { ProgressBar } from "react-loader-spinner";

import { Oval } from 'react-loader-spinner';
// Skeleton shimmer effect
const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
`;

const SkeletonItem = styled.div`
  width: ${(props) => props.width || '80%'};
  height: ${(props) => props.height || '1.5rem'};
  margin: 1rem 0;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
       #eeeeee 25%,
    #dddddd 50%,
    #eeeeee 75%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 1.2s infinite linear;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: gray;
  margin-top: 2rem;
`;

function Loading() {
  const isMobile = window.innerWidth < 768;

  return (
    <SkeletonWrapper>
      <SkeletonItem width={isMobile ? '60%' : '400px'} height="20px" />
           <SkeletonItem width={isMobile ? '80%' : '600px'} height="20px" />
          <SkeletonItem width={isMobile ? '90%' : '700px'} height="20px" />
          <SkeletonItem width={isMobile ? '50%' : '300px'} height="20px" />
      <Text>Đang tải dữ liệu...</Text>
    </SkeletonWrapper>
  );
}

export default Loading;




const Container = styled.div`
  display: flex;
    flex-direction: column;
     align-items: center;
      justify-content: center;
  height: 100vh;
`;

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
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Đang tải...</p>
    </Container>
  );
}

export { Ovals };
