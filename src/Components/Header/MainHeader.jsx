import React, { useContext, useEffect, useState } from 'react';
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
import MenuResponsiveMobile from '../Common/menu-responsive-mobile/menu-responsive-mobile';
import FormSection from '../Pages/Home/Components/Section/form-section';
import  Breadcrumb from '../Common/location/location';
import { BreadcrumbContext } from '../../Context/share-data-bread-crumb/share-data-bread-crumb';
// ==========thực hiện lấy đường dẫn hiện tại để xử lý logic hiển thị ============
import { useLocation } from 'react-router-dom';
function MainHeader(props) {

let { theme } = useValue();
//===============================thực hiện xử lý nhận dữ liệu=======================
const {pathname} = useLocation();

const {breadcrumb} = useContext(BreadcrumbContext);
const {Nameproduct} = breadcrumb;


    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [showMenuMobie , setShowMenuMobie] = useState(false);
    return (
        <div className={styles.header}> 
            <div className={styles.mainHeaders}>
           <AdvertisiPhoto/>
                <nav className={styles.wrapperMainHeader}> 
                 {/* <div className={styles.responsive__header}>   */}
                     <TitleandProducts shows={setShow}  showmenu={setShowMenuMobie}/>
                            <Search  shows={setShow1}/>
                 {/* </div>  */}
                       <Navigation_header/>
                 </nav>  
                  {pathname !== '/' ? (
                     <Breadcrumb  nameProduct={Nameproduct}/>  
                  ) : (null)}
                         
            </div> 
      
                {show ? ( 
                <div>  
                    <div className={styles.menuHeader}>  
                                <Menuheader addPadding={show}/>
                    </div>
                 
                 
                </div>
                
                ) 
                : (
                            ""
                 )}
                 {
                          <div className={`${styles.menuMobie} ${showMenuMobie ? styles.show : styles.hide}`} > 
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