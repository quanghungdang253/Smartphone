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
import FormSection from './Components/Section/form-section';
function Home({home}) {
 const {theme} = useValue();
    return (
            <MainHome style={{backgroundColor: theme ? '#EEEEEE' : "#111111"}}> 
                <div className='Mainheader'> 
                        <Helmet>
                                <title> Quang Hùng Store </title>
                        </Helmet>
                         <header className='Box__header'> 
                             <div className='Header Style'>    
                                 <Menuheader/>
                                 <Productads/>
                                 <Article/>
                             </div>
                              <div className='form__section'>
                                 <FormSection/>
                              </div>
                         </header>
                       
                 </div>
                 <div>
                                
                 </div>
                        <div className={"overlayer Productlist"}> 
                                        <Products_list/>
                         </div>
            </MainHome>
    
    );
}
const MainHome = styled.div `
    margin-left: 7%;
    margin-right: 7%;

      width: 100%;
      background-color:black;
      padding-top:1rem;
    z-index: 2;
    // ======================================thiết lập theme ================================
  //==================================================================================
        .Header {
        padding:1rem 2rem 1rem 1rem;
         margin-top:6rem;
         display: flex;  
          align-items: center;  
         justify-content:center;
         grid-column-gap: 5%;
         height: 505px;   
         max-width:1450px;
         margin-left: auto;
         margin-right:auto;  
         box-sizing: border-box;

        }
        .form__section {
                max-width: 1450px;
            
                margin-top: 1rem;
                margin-bottom:2rem;
                
        }
        .Productlist {
                      margin-top:19rem;
        }
        .Style {
                        background-color:white;
        }
     
          
         
        .btn__wrappper {
                                position: absolute;
        } 

`

export default Home;



