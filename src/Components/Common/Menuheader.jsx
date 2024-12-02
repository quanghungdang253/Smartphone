import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Componenticon from './Componenticon';
import Smartphone from './Products/Smartphone';
import Link_phone from './data/Link_phone.json';
import  Link_laptop from './data/Link_laptop.json';
import Link_camera from './data/Link_camera.json'
import { listClasses } from '@mui/material';

function Menuheader({addPadding}) {
  
        const [preindex, setIndex] = useState(null); 
        const [product, setProduct] = useState([]);
        const [prePadding, setPading] = useState(false);
     
    const items = [
        { icon: Componenticon.Iconphone , label: "Điện thoại, Tabled" } ,
        { icon: Componenticon.Iconlaptop , label: "laptop"},
        { icon: Componenticon.Iconclock , label: "Camera , Flycam",} ,
        { icon: Componenticon.Iconhouseholditems , label: "Đồ gia dụng, Điện tử "},
        { icon: Componenticon.IconTV , label: "Tivi"},
        { icon: Componenticon.Iconcomputer , label: "Máy Tính"},
        { icon: Componenticon.IconAccessory , label: "Phụ kiện"},
        { icon: Componenticon.IconCamera , label: "Camera"},
        { icon: Componenticon.IconTech , label: "Tin công nghệ"}
    
    ]
    const Listitem = [
        { id: 0, items: Link_phone },
        { id: 1, items: Link_laptop},
        { id: 2, items: Link_camera},
        { id: 3, items: Link_laptop},
        { id: 4, items: Link_laptop},
        { id: 5, items: Link_laptop},
        { id: 6, items: Link_laptop},
        { id: 7, items: Link_laptop},
        { id: 8, items: Link_laptop},
        { id: 9, items: Link_laptop},
    ]
    return (
        <Wrapper        
                        onMouseEnter={() => setIndex(preindex)}  // hoạt động khi người dùng di chuyển chuôt vào 
                        onMouseLeave={() => setIndex(null)}
        >
                <div className={`Wrapper__label ${addPadding ? "addpadding" : ""} `}> 
                     {/* phương pháp chèn icon thứ nhất  */}
                           
                            {/* <i className='Wrapper__icon icon--phone'
                               style={{backgroundImage: `url(${Iconphone})`, width: "25px", height:"20px", display: "inline-block"}}
                            ></i>  
                                                     */} 
                        {items.map((item,index) => (  // thiết lập xử lý data khi hover                         
                                <div className='Wrapper__label--menu'
                                         key={index}
                                         onMouseEnter={() =>{                                             
                                                setIndex(index);                                         
                                                const fountindex = Listitem.find((listItem) => listItem.id === index);
                                                if(fountindex ){
                                                                setProduct(fountindex.items);
                                                }                                          
                                         }} 
                                                                           >
                                                <div className=''>
                                                        <item.icon className='Wrapper__icon'/>
                                                                        {item.label}    
                                                </div>
                                               <Componenticon.IconarrowRight className='Wrapper__icon'/>
                                </div>                                                 
                           ))}
                        </div>
                
                        <React.Fragment>                                      
                                <div 
                                             className={`showitem ${ preindex !== null ? 'show' : ''}`}
                                             onMouseEnter={() =>{}}
                                             onMouseLeave={() =>{
                                                         setIndex(null);
                                                        } }   
                                >                                                                                                   { preindex !== null &&  <Smartphone value={product} /> } 
                                                 </div>    
                                   
                        </React.Fragment>
                       
        </Wrapper>
    );
}
const Wrapper = styled.div `

        width: 20rem;
        height: 100%;
         display: flex;
         position: relative;
      
        .showitem {
                  position: absolute; 
                  left: 20rem;   
                  opacity: 0;
                  
                  /* visibility: hidden;  */            
                  /* transition: opacity 0.3s ease, visibility 0.3s ease; */    
        }
        .showitem.show {
                        opacity: 1;    
                    
                }
    .Wrapper__label--menu {
 
              background-color: white;
             cursor: pointer;
            padding: 0.8rem ;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: "Lato", sans-serif;
            font-weight: 600;
            font-style: normal;
            

    }
 
    .Wrapper__label--menu:hover {
            background-color: wheat;
            color: red;
    }
   .Wrapper__icon {
   
             width: 24px;
             height: 20px;
             display: inline-block;
             background-repeat: no-repeat;  // không lặp lại ảnh 
             margin-right: 4px;
             background-size: contain;
            
        
   }
 
   .Wrapper__label {
           background-color: white;
            padding: 1rem;
            width: 35rem;
            border-radius: 2rem;
   }
   .Wrapper__label.addpadding {
       padding-top: 1.5rem;
       padding-bottom: 1.5rem;
     
         
   }



`
export default Menuheader;