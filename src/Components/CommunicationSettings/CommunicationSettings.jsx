import React, { useState } from 'react';
import styles from './CommunicationSettings.module.scss'
import ContactInformation from '../ContactInformation/ContactInformation';
import Setting from '../../Context/Settings/Setting';
import Customs from '../../Context/Settings/Theme/components/Customs';
import { useContext } from 'react';
import { red } from '@mui/material/colors';
import styled from 'styled-components';
function CommunicationSettings(props) {
  const [open, setOpen] = useState(false);
  
    return (
       <Container>
                            <ContactInformation setting={setOpen}/>  {/* truyền cho ContactInformation một cái hàm  */}
                {open && (
                        <div>
                                <Customs setting={setOpen}/>    
                        </div>
                )}
                </Container>
    );
}
const Container = styled.div`
        .Setting{
               
        }


`
export default CommunicationSettings;




// import React, { useState } from 'react';
// import styled from 'styled-components';
// import ContactInformation from '../ContactInformation/ContactInformation';
// import Setting from '../../Context/Settings/Setting';
// import Customs from '../../Context/Settings/Theme/components/Customs';

// function CommunicationSettings() {
//   const [open, setOpen] = useState(false); // Quản lý trạng thái mở/đóng form

//   return (
//     <Container>
//       <ContactInformation />
//       <div className='Setting'>
//         <Setting setting={setOpen} /> {/* Truyền callback để mở form */}
//       </div>
//       {open && (
//         <Customs setting={setOpen} /> 
//       )}
//     </Container>
//   );
// }

// const Container = styled.div`
//   .Setting {
//     position: relative;
//     z-index: 1500;
//     top: 600px;
//     right: 0;
//     bottom: 0;
//   }
// `;

// export default CommunicationSettings;
