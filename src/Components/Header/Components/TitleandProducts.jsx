

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
        <header>
            <Wrapheader>
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
            
                </Wrapheader>
            {isNavVisible && 
                         <div className='abc'> 
                                <Overlay />
                         </div> 
                    } {/* Render the overlay based on the state */}
            
           
        </header>
    );
};

const Wrapheader = styled.div`
        display: flex; 
        align-items: center;
        gap: 1em;
        font-family: "Merriweather", serif;
        font-weight: 300;
         font-style: normal;
         width: 100%;
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
        height: 5rem;
        border-radius: 100%;
    }

    h1 {
        font-size: 1.5rem;
        color: red;
        font-weight: 700;
    }
`;

const Dropdowncont = styled.div`
         .header__iconmenu {
            border: 2px solid;
            font-weight: 500;
         }
         .iconmenu {
            padding-right: 3px;
         }
`;

export { TitleandProducts };

