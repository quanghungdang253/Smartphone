import React, { useEffect, useState } from 'react';
import Search from './Components/Search';
import { TitleandProducts } from './Components/TitleandProducts';
import Navigation_header from './Components/Navigation_header';
import Menuheader from '../Common/Menuheader';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import styled from 'styled-components';
function MainHeader(props) {

let { theme } = useValue();


    const [show, setShow] = useState(false);

    return (
        <Header>  
            <MainHeaders>
                <div className='Wrapper__MainHeader'> 
                  <TitleandProducts shows={setShow}/>
                            <Search/>
                       <Navigation_header/>
                 </div>                             
            </MainHeaders>    
                {show ? ( <div className='Header'>  
                        <Menuheader addPadding={show}/>
                </div>) 
                : (
                            ""
                 )}         
        </Header>
        
    );
}
const Header = styled.div`
      background-color:black;   
       height:100%;
       .Header{
            position: fixed;
            z-index: 5;
            top: 95px;
            left: 137px;
       }
`
const MainHeaders = styled.div`
background-color:black;
position: fixed;
z-index: 5;
width: 100%;


            .Wrapper__MainHeader{
                width: 100%;
              
                display: grid;
                grid-template-columns: 30% 25% 100%;
                margin: 0% 7% 0% 7%;
            }
           
          
         
        
            
`
export default MainHeader;