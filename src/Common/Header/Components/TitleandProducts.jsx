

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faUser, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
 import Overlay from '../../../Components/Overlayer'; // Import the Overlay component
 import Menuheader from '../../Menuheader';
//  import '../styles/TitleandProducts/TitleandProducts-responsive.scss';
 import styles from '../assets/styles/TitleandProducts.module.scss';
 import titleImage from '../assets/icon/titles.jpg';
const TitleandProducts = ({shows ,showmenu}) => {
 
    const [isNavVisible, setIsNavVisible] = useState(false);
    
    // Handle menu button click to toggle overlay visibility
    const handleMenuClick = (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to document
        setIsNavVisible((prev) => !prev); // Toggle the visibility of the menu and overlay
        shows(true);
        showmenu(true);
    };

    useEffect(() => {
     
        const handleClickOutside = (event) => {
            if (!event.target.closest('.header__menu')) {
                setIsNavVisible(false); 
               shows(false);
             
            }
        };
            document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
            <Header className={styles.Header}>
             <div className={styles.Header__main_1}> 
                <div className={styles.row_one}>  
                <Link to='/'> 
                  <img
                          src={titleImage}
                          alt=''
                          className={styles.image_mobie }  
                  />
                   </Link>  
                </div>
                <div className={styles.row_two}> 
                    <Link className={styles.Link}> 
                     <p className={styles.text}> 
                            Quang Hùng Store
                     </p>
                    </Link>
                </div> 
                  <div className={styles.row_three}>
                     <Link className={styles.Link} to="/Login">
                      <FontAwesomeIcon className={`${styles.icon} ${styles.icon__user}`} icon={faUser} />
                         <h1>Đăng nhập</h1>
                      </Link>
                </div>            
             </div>
              <div className={styles.Header__main_2} >
                <Link to={'/'} className='Link'>
                    <div className={styles.Header__Title}>
                        <img
                            src={titleImage}
                            alt=''
                            className={styles.header__image}
                        />
                        <Typography variant='h1' className={styles.title}> Quang Hùng Store</Typography>
                    </div>
                </Link>
                <Dropdowncont className={styles.Header__Dropdowncont}>
                    <div className={styles. header__menu}>
                    <img
                            src={titleImage}
                            alt=''
                            className={styles.header__image_responsive}
                        />
                        <button variant="outlined" className={styles.header__iconmenu} onClick={handleMenuClick}>
                                <FontAwesomeIcon icon={faBars} className={styles.iconmenu} />

                                <span className={styles.menu}>  </span>
                                <span className={styles.category}> Danh mục </span>
                        </button>
                    </div>
                </Dropdowncont>
                 </div>
                </Header>
        
    );
};

const Header = styled.div`
      
    .Menuheader {
            position: absolute;
    }
    .Link {
        text-decoration: none;
    }
`;

const HeaderTitle = styled.div`
   

   
   
   
`;

const Dropdowncont = styled.div`

     
              
       
`;


export { TitleandProducts };

