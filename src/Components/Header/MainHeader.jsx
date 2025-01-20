import React, { useEffect, useState } from 'react';
import Search from './Components/Search';
import { TitleandProducts } from './Components/TitleandProducts';
import Navigation_header from './Components/Navigation_header';
import Menuheader from '../Common/Menuheader';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import styled from 'styled-components';
import Vd1 from '../../vd';
import Overlay from '../Overlayer';
function MainHeader(props) {

let { theme } = useValue();


    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    return (
        <Header>  
            <MainHeaders>
                <div className='Wrapper__MainHeader'> 
                     <TitleandProducts shows={setShow}/>
                             <Search  shows={setShow1}/> 
                       <Navigation_header/>
                 </div>               
            </MainHeaders> 
          
                {show ? ( <div className='Header'>  
                        <Menuheader addPadding={show}/>
                </div>) 
                : (
                            ""
                 )}  
                 {(show || show1) && (     
                            <Overlay/>
                        )} 
                        
        </Header>
        
    );
}
const Header = styled.div`
    
       max-width:100%;
    
       .Header{
        margin-left:8.5rem;
            position: fixed;
            z-index:1100;
            top: 95px;
           
       }
`
const MainHeaders = styled.div`
background-color:black;
padding-top:0.5rem;
padding-bottom:0.5rem;
position: fixed;
top:0;
z-index: 999 ;
width:100%;

.Wrapper__MainHeader{
                margin-left: auto;
                margin-right:auto;
                width: 1450px;
                position: relative;
                z-index:1000;
                display: grid;
                grid-template-columns: 31% 28.5% 30%; 
            }
           
          
         
        
            
`
export default MainHeader;