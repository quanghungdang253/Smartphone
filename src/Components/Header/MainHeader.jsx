import React, { useState } from 'react';
import Search from './Components/Search';
import { TitleandProducts } from './Components/TitleandProducts';
import Navigation_header from './Components/Navigation_header';
import Menuheader from '../Common/Menuheader';
import styled from 'styled-components';
function MainHeader(props) {
    const [show, setShow] = useState(false);

    return (
        // <React.Fragment>    : dùng để gộp các phần tử lại để trả về và không tạo thêm phần tử dom
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
      
       .Header{
        position: fixed;
        z-index: 5;
        top: 106px;
        left: 105px;
       }
`
const MainHeaders = styled.div`
position: fixed;
z-index: 5;
width: 100%;

background-color: black;
            .Wrapper__MainHeader{
                width: 100%;
              
                display: grid;
                grid-template-columns: 40% 30% 100%;
                margin: 0% 7% 0% 7%;
            }
           
          
         
        
            
`
export default MainHeader;