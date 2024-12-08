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
                 <header className='Header Style'>   
                                <Menuheader/>
                                <Productads/>
                                <Article/>
                        
                 </header>
                 <div className={"overlayer Productlist"}> 
                            <Products_list/>
                 </div>
            </MainHome>
    
    );
}
const MainHome = styled.div `

    background: #d4d9d9;
    position: absolute;
    z-index: 2;
  
        .Header {
                        padding:2rem 2rem;
                        margin: 5% 7% 0% 7%;
                        display: flex;  
                        align-items: center;  
                        grid-column-gap: 5%;
                        height: 505px;
                       
                                 
        }
        .Productlist {
                    
        }
        .Style {
            background-color:white;
        }
     
          
         
        .btn__wrappper {
             position: absolute;
        } 

`

export default Home;



