import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Customs from './Theme/components/Customs';
function Setting(props) {
  const [control, setControl] = useState(false);

    return (
        <Container>   
            <button 
            className='Btn Btn_setting'
             onClick={() => setControl((pre) => !pre)}           >
                  <FontAwesomeIcon icon={faGear} className='icon'/>
            </button>
            {control && <Customs/>}
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