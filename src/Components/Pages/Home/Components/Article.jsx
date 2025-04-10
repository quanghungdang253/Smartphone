
import React from 'react';
import { Link } from 'react-router-dom';
import Imagesmartphone from './imageArticle/anh.jpg'
import Mac from './imageArticle/Macwebp.webp';
import laptop from './imageArticle/udsv-right-laptop.webp';
import styled from 'styled-components';
function Article(props) {
    return (
        <Container>
            <div className='Article'>
                <div className='first-image'>  
                   <Link
                      to="https://quang-hung-store.vercel.app/Detail/dataPhone/2"
                      className='Article__Link'>
                      <img src={Imagesmartphone} alt='' className='Article__image Article__image--first'/>
                  </Link> 
                 </div>
                 <div className='first-image'>  
                  <Link
                      to="https://quang-hung-store.vercel.app/Detail/dataPhone/2"
                      className='Article__Link'>
                      <img src={laptop} alt='' className='Article__image'/>
                  </Link> 
                  </div>  
                  <div className='first-image'>  
                   <Link
                      to="https://quang-hung-store.vercel.app/Detail/dataPhone/2"
                      className='Article__Link'>
                      <img src={Mac} alt='' className='Article__image'/>
                  </Link>   
                  </div>   
            </div>
        </Container>
    );
}

const Container = styled.div`
     box-shadow:   0 1px 2px 0  rgba(60,64,67,.1),
                   0 2px 6px 2px  transparent;        
     height:473px;
     width:100%;
     padding-left:5px;
     padding-right:5px;                       
             
.Article {
     display: flex;
     flex-direction:column;
     justify-content:space-between;
     height:100%;
}
.Article__image {
     width:100%;
     border-radius:1rem;
     height:100%;                        
}
.first-image {
    object-fit:contain;
    max-width:300px;
    height:150px;               
    box-shadow:   0 1px 2px 0 rgba(60,64,67,.1),                     
                  0 2px 6px 2px black;
    border-radius:1rem;                                                                              
}
      .Article__Link {
      
       
       
      }
      .Article__image--first {
                    width:100%;
                    height:150px;
                    object-fit:fill;
      }

`
export default Article;