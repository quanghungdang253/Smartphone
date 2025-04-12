import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menuheader from '../Menuheader';
import { Typography } from '@mui/material';
import createTheme from '@mui/material';
function Smartphone(props) {
             const value = props.value;
  
    return (
        <Wrapper>
             <PhoneCompany className='tabchoose'> 
               
                  {value.phonecompany && value.phonecompany.length > 0 ?  (
                    <>  
                    <Typography variant='h6'> {value.name }  </Typography>
                    {
                    value.phonecompany.map((list) => (
                         <Link  
                                className='Link'
                                to={`/label/${list.name}`} 
                                 key={list.id}> 
                                 
                                    {list.name}     
                                    <img src={list.image} className={'image--menu'}/>                             
                         </Link>      
                    ))}
                    </>
                  ): (
                    <p>{alert("chữa lấy data")}</p>
                  )}               
            </PhoneCompany>
            <Price className='tabchoose'> 
                       <Typography variant='h6'> Mức giá </Typography>
                    {value.price.map((list,id) => (
                            <Link
                             key={list.id}
                              className='Link'
                              > {list.price_level}
                             </Link>
                    ))}
            </Price>  
            <PhoneCompany className='tabchoose'> 
                  <Typography variant='h6'> Điện thoại hot 2025 </Typography>
                  {value.phonecompany && value.phonecompany.length > 0 ?  (
                    value.hot__phone.map((list) => (
                         <Link  
                                className='Link'
                                to={`/label/${list.name}`} 
                                 key={list.id}> 
                                 
                                    {list.name}     
                                                           
                         </Link>      
                    ))
                  ): (
                    <p>{alert("chữa lấy data")}</p>
                  )}               
            </PhoneCompany>
            
        </Wrapper>
    );
    
}
const Wrapper = styled.div`
            padding: 2rem;
            position: absolute;
            z-index: 999;
            display: flex;
            grid-column-gap: 2rem;
            width: 100%; 
            height: 27.5rem;   
            border-radius: 2rem;
            background-color: white;
            box-shadow:   0 1px 2px 0 
                          rgba(60,64,67,.1),
                          0 2px 6px 2px
                          rgba(60,64,67,.15);
                          
            .Link {
             
                text-decoration: none;
                color: black;
                font-weight: 500;
                padding: 0.5rem 0.5rem 0.5rem 0;
                display: flex;
                align-items:center;
                justify-content:space-between;
                border-radius:10px;

            }
            .Link:hover {
                color: red;
                background-color:wheat;
            }
            .tabchoose {
                display: flex;
                flex-direction: column;
                justify-content: start;
               
            }
` 
const PhoneCompany = styled.div `
          .image--menu {
              width: 35px;
              height: 30px;
              object-fit: contain;
        }
`
const Price = styled.div`



`

export default Smartphone;
