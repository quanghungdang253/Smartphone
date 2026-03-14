import React, { useContext, useEffect, useState } from 'react';
import Search from './Components/Search';
import { TitleandProducts } from './Components/TitleandProducts';
import Navigation_header from './Components/Navigation_header';
import Menuheader from '../../Common/Menuheader';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import AdvertisiPhoto from './Components/advertising-photo';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './assets/styles/main-header.module.scss';
import Overlay from '../../Components/Overlayer';
import MenuResponsiveMobile from '../../Common/menu-responsive-mobile/menu-responsive-mobile';
import FormSection from '../../Pages/Home/Components/Section/form-section';
import  Breadcrumb from '../../Components/location/location';
import { BreadcrumbContext } from '../../Context/share-data-bread-crumb/share-data-bread-crumb';
// ==========thực hiện lấy đường dẫn hiện tại để xử lý logic hiển thị ============
import { useLocation } from 'react-router-dom';
import MenuMobie from './Components/menuMobie';
function MainHeader(props) {

let { theme } = useValue();
//===============================thực hiện xử lý nhận dữ liệu=======================
const {pathname} = useLocation();
const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);
const {breadcrumb} = useContext(BreadcrumbContext);
const {Nameproduct} = breadcrumb;

    
    const [showMenuMobie , setShowMenuMobie] = useState(false);

   
    return (
        <div className={styles.header}> 
           <div className={styles.header__rowOne}>     
              <div className={styles.AdvertisiPhoto}>
                        <AdvertisiPhoto/>
                 <nav> 
                         <div className={`lg:pt-4  max-w-[1440px] mx-auto flex items-center gap-12 h-[6rem]  ${styles.MenuDesktop}`}>   
                                <div className={styles.titleDesktop}>      
                                    <TitleandProducts shows={setShow} showmenu={setShowMenuMobie} />                                    
                                 </div>
                                <div className={styles.headerInput}>  
                                    <div className={styles.headerInput__menuMobie}>     
                                        <MenuMobie 
                                             shows={setShow} 
                                             showmenu={setShowMenuMobie}
                                        />
                                     </div>
                                          < Search  shows={setShow1}/>
                                 </div>
                                  <Navigation_header/>
                         </div>

                     {/* phần xử lý hiển thị trên điện thoại  */}


                     <div>
                             <div className={styles.MenuMobie}>  
                               <div className={styles.menuMobie__rowOne}>      
                                     <TitleandProducts  shows={setShow} showmenu={setShowMenuMobie} />                                                                                                                     
                              </div>
                              <div className={styles.menuMobie__rowTwo}>                   
                                     <MenuMobie  shows={setShow} showmenu={setShowMenuMobie}  />
                                     <Search  shows={setShow1}/>
                                  
                                    <div className={styles.btnCart}>   
                                        <Link to='/Cart' className={styles.linkCart}>  
                                             <FontAwesomeIcon icon={faCartShopping} className="text-[1.2rem]" />
                                        </Link>
                                    </div>
                             </div>
                           </div>
                       </div>
                 </nav>  
            </div> 

        </div>
            <div>
                    {pathname !== '/' ? (
                                <Breadcrumb  nameProduct={Nameproduct}/>  
                  ) : (null)}
            </div>
      
                {show ? ( 
                    <div className={styles.mainMenu}>  
                          <div className={styles.menuHeader}>  
                                <Menuheader 
                                    addPadding={show}/>
                          </div>
                    </div>
                
                ) 
                : (
                            ""
                 )}
                 {
                          <div 
                            className={`${styles.menuMobie} ${showMenuMobie ? styles.show : styles.hide}`} > 
                                <MenuResponsiveMobile Showmenu={setShowMenuMobie} />
                                
                            </div>
                    
                 }
                 {(show || show1) && (    
                        <div className={styles.Overlay}>  
                                <Overlay/>
                        </div>
                        )}       
        </div>
        
    );
}
export default MainHeader;