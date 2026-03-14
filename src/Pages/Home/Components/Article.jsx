
import React from 'react';
import { Link } from 'react-router-dom';
import Imagesmartphone from './imageArticle/anh.jpg'
import Mac from './imageArticle/slide.jpg';
import laptop from './imageArticle/udsv-right-laptop.webp';
import styled from 'styled-components';
function Article(props) {
    return (
   
            <div className='h-[475px] shadow-xl'>
                <div className='max-w-[300px] mb-2' >  
                   <Link
                      to="https://quang-hung-store.vercel.app/Detail/dataPhone/2"
                      className='max-w-[300px] h-[160px] '>
                      <img src={Imagesmartphone} alt='' className='Article__image Article__image--first'/>
                  </Link> 
                 </div>
                 <div className='max-w-[300px] h-[160px] mb-2'>  
                  <Link
                      to="https://quang-hung-store.vercel.app/Detail/dataPhone/2"
                      className='Article__Link'>
                      <img src={laptop} alt='' className='max-w-[300px] h-[160px] '/>
                  </Link> 
                  </div>  
                  <div className='max-w-[300px] h-[160px]  '>  
                   <Link
                      to="https://quang-hung-store.vercel.app/Detail/dataPhone/2"
                      className='Article__Link'>
                      <img src={Mac} alt='' className='max-w-[300px] h-[160px] '/>
                  </Link>   
                  </div>   
            </div>
       
    );
}

export default Article;