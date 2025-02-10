import React, { useEffect, useState } from 'react';
import Search from './Components/Search';
import { TitleandProducts } from './Components/TitleandProducts';
import Navigation_header from './Components/Navigation_header';
import Menuheader from '../Common/Menuheader';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import styled from 'styled-components';
import Vd1 from '../../vd';
import styles from './style/main-header.module.scss';
import Overlay from '../Overlayer';

function MainHeader(props) {

let { theme } = useValue();


    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    return (
        <div className={styles.header}>  
            <div className={styles.mainHeaders}>
                <nav className={styles.wrapperMainHeader}> 
                     <TitleandProducts shows={setShow}/>
                             <Search  shows={setShow1}/> 
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