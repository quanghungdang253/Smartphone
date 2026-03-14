import React, { useContext, useState } from 'react';
import { Phonedisplay } from './Components/Phonedisplay';
import styled from 'styled-components';
import  Productads  from './Components/product-image';
import Menuheader from '../../Common/Menuheader';
import Products_list from '../Products_list/Products_list';
// import Overlay from '../../Overlayer';
import SlideText from '../../ui/slide-text';
import ShowInfo from '../../Components/Listproduct/ShowInfo';
import { Helmet } from 'react-helmet-async';
import Article from './Components/Article';
import { Context } from '../../Context/Settings/Theme/ThemeContext';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import FormSection from './Components/Section/form-section';
import { ToggleProvider } from '../Products_list/context/context-boolean';
// ================================image ==================================
import imagebackground from './Components/Section/image/background.jpg';
import image from './Components/Section/image/khai-xuan-trai.jpg';
import styles from './home.module.scss';
import SlideImageMobie from './Components/slide-image-mobie/slide-image-mobie';

import MenuResponsiveMobile from '../../Common/menu-responsive-mobile/menu-responsive-mobile';

function Home({home}) {
 const {theme} = useValue();    // sáng tối 
     const [logic , setLogic] = useState(false);
     

    return (
                <div className={`max-w-[1440px] mx-auto ${styles.mainHome}`}> 
                        <Helmet>
                                <title> Quang Hùng Store </title>
                        </Helmet> 
                      
                        
                          <div className={`lg:h-[475px] flex justify-between mb-4 mt-4 ${styles.mainHome__rowOne}`}>  
                                    <Menuheader/>
                                    <Productads/>
                                    <Article/>
                                
                          </div>
                          <div className='mt-2 mb-2 lg:mt-0 mb-0'>    <SlideText padding="4px" fontSize="12px" />      </div>
                          <div> 
                                        <SlideImageMobie /> 
                                        
                          </div>
                                   
                          <div className="mt-40 lg:mt-4">     <FormSection Toggle={setLogic} />  </div> 
                           
                          <div>    
                                   <ToggleProvider>  
                                           <Products_list logic={logic}/>
                                   </ToggleProvider>    
                          </div>                
                 </div>       
         
    );
}

export default Home;



