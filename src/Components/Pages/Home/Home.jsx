import React, { useState } from 'react';
import { Phonedisplay } from './Components/Phonedisplay';
import styled from 'styled-components';
import  Productads from './Components/Productads';
import Menuheader from '../../Common/Menuheader';

import Overlay from '../../Overlayer';
function Home() {
 


// console.log(isOverlayer);
//    setOverlayer(islayer);

    return (
            <MainHome> 
                 <header className='Header'>   
                                <Menuheader/>
                                <Productads/>
                        
                 </header>
                 <div className={`overlayer`}> 
                                <Phonedisplay/>
                 </div>
            </MainHome>
    
    );
}
const MainHome = styled.div `
        .Header {
                        margin: 7% 7% 0% 7%;
                        display: flex;  
                        align-items: center;  
                        grid-column-gap: 10%;
                                 
        }
          
           background: #d4d9d9;
           position: absolute;
           z-index: 2;
        .btn__wrappper {
            position: absolute;
        } 

`

export default Home;



