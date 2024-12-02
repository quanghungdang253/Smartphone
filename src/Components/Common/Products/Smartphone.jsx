import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menuheader from '../Menuheader';
import { Typography } from '@mui/material';
import createTheme from '@mui/material';
function Smartphone(props) {
    const value = props.value;
    console.log(value);
    
  

    return (
        <Wrapper>
             <PhoneCompany className='tabchoose'> 
                  <Typography variant='h6'> Hãng điện thoại </Typography>
                  {value.phonecompany && value.phonecompany.length > 0 ?  (
                    value.phonecompany.map((list) => (
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
        </Wrapper>
    );
    
}
const Wrapper = styled.div`
            padding: 2rem;
            position: absolute;
            z-index: 999;
            display: flex;
            grid-column-gap: 2rem;
            width: 60rem; 
            height: 27.5rem;   
            border-radius: 2rem;
            background-color: white;
            .Link {
                text-decoration: none;
                color: black;
                font-weight: 350;
                padding: 0.5rem 0.5rem 0.5rem 0;
            }
            .Link:hover {
                color: red;
            }
            .tabchoose {
                display: flex;
                flex-direction: column;
                justify-content: start;
               
            }
        
` 
const PhoneCompany = styled.div `

           

`
const Price = styled.div`



`

export default Smartphone;
