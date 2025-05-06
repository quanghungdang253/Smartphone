import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../../Common/components/Loading';



const ListimageProduct = ({image, customs}) => {   //ở đây {phone} là viết tắt    const InformationPhone = (props)
                           
        
        useEffect(() => {
                setimage(image);
        },[image])
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
                                          <Button variant='outlined' onClick={() => Left()} className='button__left button'> <FontAwesomeIcon icon={faAngleLeft}/> </Button>
                                         <Button variant='outlined'  onClick={() => Right()} className='button__right button'> <FontAwesomeIcon icon={faAngleRight}/> </Button>
                                </div>
                                        
                                                <img src={process.env.PUBLIC_URL+ preimage[preindex]} alt=''  /> 
                                       
                                                     
                  </div>
                        {customs && (
                                <div className='HandleImage__image'>
                                <div className='HandleImage__node'>  
                                        <Button variant='outlined' onClick={() => Left()}> <FontAwesomeIcon icon={faAngleLeft}  className="button"/> </Button>
                                        <Button variant='outlined'  onClick={() => Right()}> <FontAwesomeIcon icon={faAngleRight} className="button"/> </Button>
                                </div>
                              
                                <img src={process.env.PUBLIC_URL+ preimage[preindex]} alt=''  />                     
                        </div>
                        )}
                                 
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
overflow: hidden;  // nếu nhiều phần tử thì phần tử bị tràn và sẽ ẩn đi
.HandleImage__image {
width:100%;
height: 100px;
position:relative;
display: flex;
align-items:center;
justify-content: center;
border-radius: 5px;
border: 0.5px solid rgba(22, 22, 22, 0.1);
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1),
                                        0 2px 6px 2px rgba(0, 0, 0, 0.15);                  
}
.Link {
display:inline-block;
width:100%;
display:flex;
justify-content:center;
height:115px;  
}
.HandleImage__image img {
        transition: opacity 0.5s ease-in-out;
        transform: scale(0.95);
        cursor: pointer;
        height: 100%;
        width:100%;
        object-fit: cover;
                transition: opacity 0.8s ease-in-out;
}
.HandleImage__node {
        position:absolute;
        display:flex;
        grid-column-gap:19rem;
        z-index: 100;
        justify-content:space-evenly;
       
}
.HandleImage_Slide {
        display: flex;
        grid-column-gap: 10px;              
}

.button {
        border: none;
        color:black;     
}

`
export default ListimageProduct;