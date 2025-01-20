import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Customs from './Theme/components/Customs';


 function Setting(props) {
        let theme = props.setting;
         const Closeform = () => {
                    theme(true);
         }  
    return (
        <Container>   
            <button 
                 className='Btn Btn_setting'
                 onClick={() => Closeform()} >
                        <FontAwesomeIcon icon={faGear} className='icon'/>  {/* icon đóng form theme  */ }
             </button>
        </Container>
    );
}
const Container = styled.div`
          .icon{
            color: black;
            height:30px;
            width:30px;
            
          }
          .Btn{
                border: none;
                background:transparent;
          } 

`

export default Setting;




// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear } from '@fortawesome/free-solid-svg-icons';
// import styled from 'styled-components';

// function Setting(props) {
//   const setTheme = props.setting; // Callback nhận từ parent để bật trạng thái
//   const handleClick = () => {
//     setTheme(true); // Mở form
//   };

//   return (
//     <Container>
//       <button 
//         className='Btn Btn_setting'
//         onClick={handleClick}
//       >
//         <FontAwesomeIcon icon={faGear} className='icon' />
//       </button>
//     </Container>
//   );
// }

// const Container = styled.div`
//   position: fixed;
//   z-index: 1000;

//   .icon {
//     color: black;
//     height: 30px;
//     width: 30px;
//   }
  
//   .Btn {
//     border: none;
//     background: transparent;
//   }
// `;

// export default Setting;
