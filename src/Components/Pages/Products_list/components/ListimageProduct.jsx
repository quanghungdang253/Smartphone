import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const ListimageProduct = ({image}) => {   //ở đây {phone} là viết tắt    const InformationPhone = (props)
                                                                        // const {image} = props
console.log(image);
        const [preimage , setimage] = useState(image);
        const [preindex , setindex] = useState(0);
        useEffect(() => {
           const Time = setInterval(() => {
                setindex((preindex) => {
                        if(preindex === preimage.length -1){
                                return 0;
                         }else{
                                return  preindex + 1;                                                  
                        }
                })
                         },3000)
                        return(() => clearInterval(Time));
        },[preimage.length])
        const Left = () => {
                        setindex((preindex) =>(
                                (preindex === 0 ? preindex = preimage.length - 1 : preindex - 1) // cách 2
                        ))
                   
                }      
        const Right = () => {
                        setindex((preindex) => {
                                if(preindex === preimage.length - 1){
                                        return preindex = 0;
                                }
                                return preindex + 1;
                        })     
        }
        return(
            <Wrapper> 
                    <HandleImage>
                        <div className='HandleImage__image'>
                                <div className='HandleImage__node'>  
                                        <Button variant='outlined' onClick={() => Left()}> ⬅ </Button>
                                        <Button variant='outlined'  onClick={() => Right()}> ➡ </Button>
                                </div>
                              
                                                <img src={process.env.PUBLIC_URL+ preimage[preindex]} alt=''  /> 
                                               
                                               
                                  
                        </div>
                        <div className='HandleImage__image'>
                                <div className='HandleImage__node'>  
                                        <Button variant='outlined' onClick={() => Left()}> ⬅ </Button>
                                        <Button variant='outlined'  onClick={() => Right()}> ➡ </Button>
                                </div>
                              
                                                <img src={process.env.PUBLIC_URL+ preimage[preindex]} alt=''  /> 
                                                  
                        </div>          
                    </HandleImage>
                   
          </Wrapper>     
)

}
const Wrapper = styled.div `
    
     justify-content: center;
      .HandleImage__button:hover{
                        border: 4px solid red;
                }
      .HandleImage__button:active{                              // border chuyển màu đỏ khi nhấn chuột
                        border: 4px solid red;
                }
      .HandleImage__button.selected {
                        border: 4px solid red;
                }

`
const HandleImage = styled.div `
display: flex;
justify-content: center; 
grid-column-gap: 10%;

margin-top:5rem;
overflow: hidden;  // nếu nhiều phần tử thì phần tử bị tràn và sẽ ẩn đi

       
        
.HandleImage__image {
                display: flex;
                align-items:center;
                justify-content: center;
               
}
.HandleImage__image img {
     
                width: 400px;
                height:100px;
                object-fit: contain;
                transition: opacity 0.8s ease-in-out;
}
.HandleImage__node {
            position:absolute;
            display: flex;
            grid-column-gap: 15rem;
       
}
.HandleImage_Slide {
       
                 display: flex;
                 grid-column-gap: 10px;
              
                
}

`
export default ListimageProduct;