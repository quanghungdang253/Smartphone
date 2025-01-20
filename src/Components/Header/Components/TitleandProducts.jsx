

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
 import Overlay from '../../Overlayer'; // Import the Overlay component
 import Menuheader from '../../Common/Menuheader';
const TitleandProducts = ({shows}) => {
 
    const [isNavVisible, setIsNavVisible] = useState(false);
    
    // Handle menu button click to toggle overlay visibility
    const handleMenuClick = (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to document
        setIsNavVisible((prev) => !prev); // Toggle the visibility of the menu and overlay
        shows(true);
    };

    useEffect(() => {
        // Add click event listener to handle overlay closing
        const handleClickOutside = (event) => {
            if (!event.target.closest('.header__menu')) {
                setIsNavVisible(false); // Hide overlay if click is outside
               shows(false);
            }
        };
            document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
       
            <Header>
                <Link to={'/'} className='Link'>
                    <HeaderTitle>
                        <img
                            src='https://png.pngtree.com/png-clipart/20200710/original/pngtree-phone-store-logo-design-png-image_4242134.jpg'
                            alt=''
                            className='header__image'
                        />
                        <Typography variant='h1'> Quang Hùng Store</Typography>
                    </HeaderTitle>
                </Link>
                <Dropdowncont>
                    <div className='header__menu'>
                        <Button variant="outlined" className='header__iconmenu' onClick={handleMenuClick}>
                                <FontAwesomeIcon icon={faBars} className='iconmenu' fade /> Danh Mục
                        </Button>
                    </div>
                </Dropdowncont>
            
                </Header>
          
            
           
       
    );
};

const Header = styled.div`
        display: flex; 
        align-items: center;    
        gap: 1em;
        font-family: "Merriweather", serif;
        font-weight: 300;
         font-style: normal;
         max-width: 22em;
    .Menuheader {
            position: absolute;
    }
    .Link {
        text-decoration: none;
    }
`;

const HeaderTitle = styled.div`
    display: flex;
    align-items: center;

    .header__image {
        height: 4rem;
        border-radius: 50%;
    }

    h1 {
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
    }
`;

const Dropdowncont = styled.div`
  width:25%;
         .header__iconmenu {
            border: 1px solid red;
            font-weight: 700;
            color: white;
            width: 8rem;
         }
         .iconmenu {
            padding-right: 3px;
         }
`;

export { TitleandProducts };

