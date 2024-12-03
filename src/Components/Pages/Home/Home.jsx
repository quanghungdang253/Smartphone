import React, { useState } from 'react';
import { Phonedisplay } from './Components/Phonedisplay';
import styled from 'styled-components';
import  Productads from './Components/Productads';
import Menuheader from '../../Common/Menuheader';
import Products_list from '../Products_list/Products_list';
import Overlay from '../../Overlayer';
import ShowInfo from '../../Common/Listproduct/ShowInfo';
import { Helmet } from 'react-helmet-async';
import Article from './Components/Article';
function Home({home}) {
 


// console.log(isOverlayer);
//    setOverlayer(islayer);

    return (
            <MainHome> 
            <Helmet>
                        <title> Quang Hùng Store </title>
            </Helmet>
                 <header className='Header'>   
                                <Menuheader/>
                                <Productads/>
                                <Article/>
                        
                 </header>
                 <div className={`overlayer`}> 
                            <Products_list/>
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



