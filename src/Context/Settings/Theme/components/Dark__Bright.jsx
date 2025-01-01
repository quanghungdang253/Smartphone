import React, { useEffect, useState } from 'react';
import Darks from '../icon/Sang.jpg';
import styled from 'styled-components';
import { useValue } from '../ThemeContext';
import Bright from '../icon/Sao-Moc2.jpg'


function Dark(props) {
    const {theme, Dark_Bright} = useValue();
    
    
    return (
                <Container>
                        <div className='Container__button'>  
                            <div className='Button'>  
                                <button onClick={() => Dark_Bright()}>  
                                    <img src={Darks} alt='' className='image1' />
                                      <div className='Text__button'> 
                                         <h1 className='Name__button'> Bright(Sáng) </h1>
                                        <input type='radio' className='radio ratio__button1' checked={theme} />
                                     </div>
                                </button>
                            </div>
                            <div className='Button'>  
                                <button onClick={() => Dark_Bright()}>  
                                    <img src={Bright} alt='' className='image1' />
                                    <div className='Text__button'> 
                                         <h1 className='Name__button'> Dark(Tối) </h1>
                                         <input type='radio' className='radio ratio__button1' checked={!theme} />
                                     </div>
                                </button>
                            </div>
                        </div>
                           
                </Container>
    );
}

const Container = styled.div`

    img {
        border-top-left-radius: 2rem;
    }
   .Button{
                width:200px;
                height:150px;    
                background-color:white; 
               
              
   }
 
           
 .Container__button {
                display: flex;
                flex-direction: column;
                align-items:center;
                grid-row-gap: 2rem;
 }
            .image1{
                    width:100%;
                    height:100%;
            }
            .radio{
                    width:25px;
                    height:25px;
                    z-index:1000;
            }
            .Text__button {
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        grid-column-gap:5px;
            }
            .Name__button {
                        font-size:1rem;
                        font-weight:700;
                        color:black;
            }

`
export default Dark;