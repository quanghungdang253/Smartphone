


    import React, { useEffect, useState } from 'react';
import { use } from 'react';
import styled from 'styled-components';
import Dark from './Dark__Bright';
import Themeprovider from '../Themeprovider';
import {faRectangleXmark} from '@fortawesome/free-solid-svg-icons';  // sử dụng thư viên khác vì không hợp lệ trong Font 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Customs(props) {
    const theme = props.setting;
    
  return (
    <Container>
      <div>
          <button onClick={() => theme(false)}>
                        <FontAwesomeIcon icon={faRectangleXmark} shake className='iconClose' />
          </button>
      </div>
            <Dark/>
    </Container>
  );
}
const Container = styled.div`

  margin-right: 60px;
  height: 60%;
  width: 20%;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: black;
  border-top-left-radius: 2rem;
  button{
  margin-left: 1rem;
  margin-top:1rem;
  border:none;
  background:transparent;
  }
  button:hover{
          color:red;
  }
  .iconClose {
        color: white;
  }
`;

export default Customs;


// import React from 'react';
// import styled from 'styled-components';

// function Customs(props) {
//   const close = props.setting; // Nhận callback để thay đổi trạng thái

//   return (
//     <Container>
//       <div>
//         <button onClick={() => close(false)}>X</button> {/* Đóng form khi nhấn nút */}
//       </div>
//     </Container>
//   );
// }

// const Container = styled.div`
//   margin-right: 60px;
//   height: 60%;
//   width: 20%;
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   z-index: 1000;
//   background-color: black;
// `;

// export default Customs;
