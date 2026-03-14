import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menuheader from '../Menuheader';

import { Typography } from '@mui/material';
import createTheme from '@mui/material';
import { div } from '@tensorflow/tfjs';
function Smartphone(props) {
             const value = props.value;
                console.log("giá trị nhận được là : " + value);
          if(!value){
              return;
          }
       
          
    return (
        <Wrapper>
             <div class=' lg:flex flex-col justify-start p-2' > 
                  {value.phonecompany && value.phonecompany.length > 0 ?  (
                    <>  
                    <h1 className='font-bold font-sans lg: mb-2'> {value.name }  </h1>
                    
                  <div className='grid grid-cols-3 gap-2'   >  
                     
                   {    value.phonecompany.map((list) => (
                         <Link       
                                  
                                className=''                    
                                to={`/label/${list.name}`} 
                                 key={list.id}> 
                               
                            
                                  <img 
                                    src={list.image} 
                                    className='w-[90px] h-[50px] object-contain p-2 rounded-[4px] shadow-xl'
                                     style={{ border: '0.1px solid black  ' }}     
                                    
                                />    
                                                                                                           
                         </Link>      
                    ))
                  }
              </div>


                  <Price className='tabchoose'> 
                           <h1 className='font-bold font-sans lg: mb-2 mt-6'> Mức giá   </h1>
                   
                         {value.price && value.price.length > 0 ? (
                          
                          <div className='grid grid-cols-2 '>                                
                             {value.price.map((list,id) => (
                             <Link key={list.id} className='shadow-xl p-2 border border-black-600 mb-2 mr-2 font-bold'> 
                                 {list.price_level}
                            </Link>
                              ))}                          
                         </div>
                            
                      ) : (
                            <p>Đang lấy dữ liệu...</p>
                          )}  
                  </Price>





                    </>
                  ): (
                    <p>đang lấy dữ liệu </p>
                  )}               
            </div>
    
 
            <PhoneCompany className='tabchoose'> 
                  <h1 className='font-bold font-sans lg: mb-2 mt-2'   > {value.nameOne} </h1>
                  {value.hot__sale && value.hot__sale.length > 0 ?  (
                    value.hot__sale?.map((list) => (
                         <Link  
                            
                                className='Link'
                                to={`/label/${list.name}`} 
                                 key={list.id}> 
                                   
                                    {list.name}     

                                    <img src={list.image} alt="" className='max-w-10 ' />       
                         </Link>      
                    ))
                  ): (
                    <p>Đang lấy dữ liệu </p>
                  )}               
            </PhoneCompany>


                 <PhoneCompany className='tabchoose'> 
                  <h1 className='font-bold font-sans lg: mb-2 mt-2' > {value.nameTwo} </h1>
                  {value.hot__product && value.hot__product.length > 0 ?  (
                    value.hot__product.map((list) => (
                         <Link  
                          
                                 className=' flex items-center gap-2 mb-4 '
                                to={`/label/${list.name}`} 
                                 key={list.id}> 
                                   <h1>   {list.name}       </h1>  
                                  <span className=' bg-red-600 text-white p-2'> Hot </span>
                                 
                                                           
                         </Link>      
                    ))
                  ): (
                    <p>Đang lấy dữ liệu </p>
                  )}               
            </PhoneCompany>
            
        </Wrapper>
    );
    
}
const Wrapper = styled.div`
            position: absolute;
            z-index: 999;
            display: flex;
            grid-column-gap: 2rem;
            width: 100%; 
            height: 27.5rem;   
            border-radius: 0.5rem;
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
           
` 
const PhoneCompany = styled.div `
     
`
const Price = styled.div`



`

export default Smartphone;
