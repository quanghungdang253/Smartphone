import React, { useContext, useState } from 'react';
import { Phonedisplay } from './Components/Phonedisplay';
import styled from 'styled-components';
import  Productads from './Components/Productads';
import Menuheader from '../../Common/Menuheader';
import Products_list from '../Products_list/Products_list';
import Overlay from '../../Overlayer';
import ShowInfo from '../../Common/Listproduct/ShowInfo';
import { Helmet } from 'react-helmet-async';
import Article from './Components/Article';
import { Context } from '../../../Context/Settings/Theme/ThemeContext';
import { useValue } from '../../../Context/Settings/Theme/ThemeContext';
function Home({home}) {
 const {theme} = useValue();
    return (
            <MainHome style={{backgroundColor: theme ? '#EEEEEE' : "#111111"}}> 
                <div className='Mainheader'> 
                        <Helmet>
                                <title> Quang Hùng Store </title>
                        </Helmet>
                         <header className='Header Style'>   
                                 <Menuheader/>
                                 <Productads/>
                                 <Article/>
                         </header>
                 </div>
                        <div className={"overlayer Productlist"}> 
                                        <Products_list/>
                         </div>
            </MainHome>
    
    );
}
const MainHome = styled.div `


    position: absolute;
    z-index: 2;
    // ======================================thiết lập theme ================================


    //==================================================================================
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



