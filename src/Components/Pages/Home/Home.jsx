import React, { useContext, useState } from 'react';
import { Phonedisplay } from './Components/Phonedisplay';
import styled from 'styled-components';
import  Productads  from './Components/product-image';
import Menuheader from '../../Common/Menuheader';
import Products_list from '../Products_list/Products_list';
import Overlay from '../../Overlayer';
import ShowInfo from '../../Common/Listproduct/ShowInfo';
import { Helmet } from 'react-helmet-async';
import Article from './Components/Article';
import { Context } from '../../../Context/Settings/Theme/ThemeContext';
import { useValue } from '../../../Context/Settings/Theme/ThemeContext';
import FormSection from './Components/Section/form-section';

import { ToggleProvider } from '../Products_list/context/context-boolean';
// ================================image ==================================
import imagebackground from './Components/Section/image/background.jpg';
import image from './Components/Section/image/khai-xuan-trai.jpg';
import styles from './style/home.module.scss';
function Home({home}) {
 const {theme} = useValue();
     const [logic , setLogic] = useState(false);
     

    return (
       
            <MainHome 
                style={{backgroundColor: theme ? '#EEEEEE' : "#111111"}}
                bgImage={imagebackground}
        > 
                        <div className={styles.containerImage}>  
                                 <div> 
                                        <img src={image} alt className={`${styles.childImage} ${styles.imageLeft}`} />
                                </div>
                                <div> 
                                        <img src={image} alt className={`${styles.childImage} ${styles.imageRight}`} />
                                </div>
                        </div>
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
                                 <FormSection Toggle={setLogic} />
                              </div>
                            
                         </header>
                         <div className={"overlayer Productlist"}> 
                           <ToggleProvider>  
                                        <Products_list logic={logic}/>
                                        </ToggleProvider>
                        </div>
                       
                 </div>
                 <div>
                                
                 </div>
                       
            </MainHome>
    );
}
const MainHome = styled.div `

   background-image: url(${props => props.bgImage});
      width: 100%;
      background-color:black;
      padding-top:1rem;
      z-index: 2;
    // ======================================thiết lập theme ================================
  //==================================================================================
  .Box__header {
        margin-left: 7%;
        margin-right: 7%;
  }
 
.Header {
          padding:1rem 2rem 1rem 1rem;
          margin-top:3rem;
          display: flex;  
          align-items: center;  
          justify-content:center;
          grid-column-gap: 5%;
          height: 505px;   
          max-width:1450px; 
          box-sizing: border-box;
}
.form__section {
         max-width: 1450px;
         margin-top: 1rem;
         margin-bottom:2rem;           
}
.Productlist {
        margin-top:23rem;
}
.Style {
         background-color:white;
}   
.btn__wrappper {
                                position: absolute;
        } 

`

export default Home;



