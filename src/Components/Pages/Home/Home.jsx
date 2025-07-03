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
import imgSlide from './Components/image/img-product-image/slide.gif';
import { ToggleProvider } from '../Products_list/context/context-boolean';
// ================================image ==================================
import imagebackground from './Components/Section/image/background.jpg';
import image from './Components/Section/image/khai-xuan-trai.jpg';
import styles from './style/home.module.scss';
import SlideImageMobie from './Components/slide-image-mobie/slide-image-mobie';

import MenuResponsiveMobile from '../../Common/menu-responsive-mobile/menu-responsive-mobile';

function Home({home}) {
 const {theme} = useValue();
     const [logic , setLogic] = useState(false);
     

    return (
       
            <MainHome 
                style={{backgroundColor: theme ? '#EEEEEE' : "#111111"}}
                bgImage={imagebackground}
                className={styles.MainHome}
        > 
                        <div className={styles.containerImage}>  
                                 <div> 
                                        <img src={image} alt className={`${styles.childImage} ${styles.imageLeft}`} />
                                </div>
                                <div> 
                                        <img src={image} alt className={`${styles.childImage} ${styles.imageRight}`} />
                                </div>
                        </div>
                <div className={styles.Mainheader}> 
                        <Helmet>
                                <title> Quang Hùng Store </title>
                        </Helmet>
                         <header className={styles.Box__header}> 
                             <div className={`${styles.Header} ${styles.Styles}`}>  
                                <div className={styles.slideMobie}> 
                                        <SlideImageMobie />
                             </div>
                                <div className={styles.menuWeb}>    
                                         <Menuheader/>
                                 </div>
                            
                                 <div className={styles.Productads}> 
                                        <Productads/>
                                </div>
                                  {/* <div className={styles.FormSection__Web}>     
                                                 <FormSection />   
                                 </div> */}
                                 <div className={styles.Article}> 
                                         <Article/>
                                 </div>
                             </div>
                             <div className={styles.imgSlide}> 
                                  <img src={imgSlide} alt='' />
                             </div>
                              <div className={styles.form__section}>
                                        <FormSection Toggle={setLogic} />
                              </div>
                            
                         </header>
                       
                         <div className={`${styles.overlayer} ${styles.Productlist}`}> 
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


`

export default Home;



