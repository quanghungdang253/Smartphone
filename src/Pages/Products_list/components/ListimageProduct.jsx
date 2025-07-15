// import { Button } from '@mui/material';
// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import Wrapper from './ListimageProductStyle';
// import { HandleImage } from './ListimageProductStyle';
// import {Link} from 'react-router-dom';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import Loading from '../../../Common/components/Loading';

// const ListimageProduct = ({image, customs}) => {   //ở đây {phone} là viết tắt    const InformationPhone = (props)
                           
        
//         useEffect(() => {
//                 setimage(image);
//         },[image])
//         const [preimage , setimage] = useState(image);
//         const [preindex , setindex] = useState(0);
//         useEffect(() => {
//            const Time = setInterval(() => {
//                 setindex((preindex) => {
//                         if(preindex === preimage.length -1){
//                                 return 0;
//                          }else{
//                                 return  preindex + 1;                                                  
//                         }
//                 })
//                          },3000)
//                         return(() => clearInterval(Time));
//         },[preimage.length])
//         const Left = () => {
//                         setindex((preindex) =>(
//                                 (preindex === 0 ? preindex = preimage.length - 1 : preindex - 1) // cách 2
//                         ))
                   
//                 }      
//         const Right = () => {
//                         setindex((preindex) => {
//                                 if(preindex === preimage.length - 1){
//                                         return preindex = 0;
//                                 }
//                                 return preindex + 1;
//                         })     
//         }
//         return(
//             <Wrapper className="container"> 
//                 <HandleImage>
//                    <div className='HandleImage__image'>
//                                 <div className='HandleImage__node'>  
//                                           <button variant='outlined' onClick={() => Left()} className='button__left button'> <FontAwesomeIcon icon={faAngleLeft}/> </button>
//                                          <button variant='outlined'  onClick={() => Right()} className='button__right button'> <FontAwesomeIcon icon={faAngleRight}/> </button>
//                                 </div>
                                        
//                                                 <img src={process.env.PUBLIC_URL+ preimage[preindex]} alt='' className='image'  />                                      
//                   </div>
                
//                         {customs && (
//                                <div className='HandleImage__image'>
//                                 <div className='HandleImage__node'>  
//                                           <button variant='outlined' onClick={() => Left()} className='button__left button'> <FontAwesomeIcon icon={faAngleLeft}/> </button>
//                                          <button variant='outlined'  onClick={() => Right()} className='button__right button'> <FontAwesomeIcon icon={faAngleRight}/> </button>
//                                 </div>
                                        
//                                                 <img src={process.env.PUBLIC_URL+ preimage[preindex]} alt='' className='image'  />                                      
//                   </div>
//                         )} 
                
//                     </HandleImage>    
//           </Wrapper>     
//         )
// }

// export default ListimageProduct;


import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Wrapper from './ListimageProductStyle';
import { HandleImage } from './ListimageProductStyle';

const ListimageProduct = ({ image = [], customs }) => {
  const [preimage, setImage] = useState(image);
  const [preindex, setIndex] = useState(0);

  // Cập nhật ảnh khi props.image thay đổi
  useEffect(() => {
    setImage(Array.isArray(image) ? image : []);
    setIndex(0); // Reset index khi ảnh thay đổi
  }, [image]);

  // Tự động chuyển ảnh
  useEffect(() => {
    if (!Array.isArray(preimage) || preimage.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === preimage.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [preimage]);

  const handleLeft = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? preimage.length - 1 : prevIndex - 1
    );
  };

  const handleRight = () => {
    setIndex((prevIndex) =>
      prevIndex === preimage.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Nếu không có ảnh thì không hiển thị gì
  if (!Array.isArray(preimage) || preimage.length === 0) {
    return null;
  }

  const renderImageSection = () => (
    <div className="HandleImage__image">
      <div className="HandleImage__node">
        <button onClick={handleLeft} className="button__left button">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={handleRight} className="button__right button">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <img
        src={process.env.PUBLIC_URL + preimage[preindex]}
        alt=""
        className="image"
      />
    </div>
  );

  return (
    <Wrapper className="container">
      <HandleImage>
        {renderImageSection()}
        {customs && renderImageSection()}
      </HandleImage>
    </Wrapper>
  );
};

export default ListimageProduct;
