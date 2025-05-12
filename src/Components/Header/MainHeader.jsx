import React, { useEffect, useState } from 'react';
import Search from './Components/Search';
import { TitleandProducts } from './Components/TitleandProducts';
import Navigation_header from './Components/Navigation_header';
import Menuheader from '../Common/Menuheader';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import AdvertisiPhoto from './Components/advertising-photo';
import styled from 'styled-components';
import Vd1 from '../../vd';
import styles from './styles/main-header.module.scss';
import Overlay from '../Overlayer';

function MainHeader(props) {

let { theme } = useValue();


    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    return (
        <div className={styles.header}> 
      
            <div className={styles.mainHeaders}>
         
           <AdvertisiPhoto/>
                <nav className={styles.wrapperMainHeader}> 
                 {/* <div className={styles.responsive__header}>   */}
                     <TitleandProducts shows={setShow}/>
                            <Search  shows={setShow1}/>
                 {/* </div>  */}
                       <Navigation_header/>
                 </nav>               
            </div> 
          
                {show ? ( 
                    <div className={styles.menuHeader}>  
                                <Menuheader addPadding={show}/>
                        </div>) 
                : (
                            ""
                 )}  
                 {(show || show1) && (     
                            <Overlay/>
                        )} 
                        
        </div>
        
    );
}
export default MainHeader;