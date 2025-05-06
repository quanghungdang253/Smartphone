

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
 import Overlay from '../../Overlayer'; // Import the Overlay component
 import Menuheader from '../../Common/Menuheader';
 import titleImage from '../icon/titles.jpg';
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
                            src={titleImage}
                            alt=''
                            className='header__image'
                        />
                        <Typography variant='h1' className='title'> Quang Hùng Store</Typography>
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
         max-width: 20em;
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
     
        width:25%;
        object-fit:cover;
        border-radius: 10px;
       
    }
    h1 {
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
    }
    .title {
        font-family: "Lato", serif;
        color: white;
        font-size:20px;
        font-weight: 900;
     
    }
`;

const Dropdowncont = styled.div`
  width:25%;
     
              
        
         .header__iconmenu {
            background-color:black;   
            border: 1px solid red;
            font-weight: 700;
            color: white;
            width: 7rem;
            font-size: 11px;
             line-height:5px;
         }
         .iconmenu {
            padding-right: 3px;
            font-size: 17px;
         }
`;


export { TitleandProducts };

