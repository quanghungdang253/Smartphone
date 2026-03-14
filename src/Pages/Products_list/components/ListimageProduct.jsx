import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from "../assets/styles/ListimageProduct.module.scss";
import Loading from '../../../ui/Loading';
import { div } from '@tensorflow/tfjs';

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
        <div >  
            <div className="flex justify-between"> 
                 <div className='relative'>
                        <img 
                         src={process.env.PUBLIC_URL + preimage[preindex]} 
                          alt='' 
                          className={StyleSheet.imageSale}
                                 class='w-full'
                        />

                         <div className='absolute top-1/2 left-0 w-full flex justify-between px-4 -translate-y-1/2'>
                                <button onClick={() => Left()} class="swiper-button-prev shadow-bottom-400 absolute left-0 z-10 flex h-14 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-r-full border-neutral-100 bg-white/80 p-0 transition-all duration-150 after:hidden hover:bg-white/100 md:h-18 md:w-9 top-1/2">
                                        <FontAwesomeIcon icon={faAngleLeft}/>
                               </button>
                                <button 
                                        onClick={() => Right()} 
                                        class="swiper-button-next shadow-bottom-400 absolute right-0 z-10 flex h-14 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-l-full border-neutral-100 bg-white/80 p-0 transition-all duration-150 after:hidden hover:bg-white/100 md:h-18 md:w-9 top-1/2">
                                         <FontAwesomeIcon icon={faAngleRight}/>
                                </button>
                         </div>
                 </div>
                
                        {customs && (
                  <div className={styles.slideImageTwo}>   

                                   <img src={process.env.PUBLIC_URL+ preimage[preindex]} alt='' className='image'  /> 

                            <div className='absolute top-1/2 left-0 w-full flex justify-between px-4 -translate-y-1/2'> 
                                          <button  onClick={() => Left()} className='text-white text-3xl bg-black/40 px-3 py-2 rounded'>
                                                         <FontAwesomeIcon icon={faAngleLeft}/> 
                                                         
                                           </button>
                                           
                                          <button  onClick={() => Right()} className='text-white text-3xl bg-black/40 px-3 py-2 rounded' >
                                                        <FontAwesomeIcon icon={faAngleRight}/> 
                                                        
                                         </button>
                          </div>
                                                    

                 </div>
                        )} 
                  
                </div>     
        </div>
        
        )
}

export default ListimageProduct;

