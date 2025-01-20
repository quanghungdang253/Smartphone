import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import Componenticon from './Componenticon';
import Smartphone from './Products/Smartphone';
import Link_phone from './data/Link_phone.json';
import  Link_laptop from './data/Link_laptop.json';
import Link_camera from './data/Link_camera.json';
import Link_earphone from './data/Link_earphone.json';
import { listClasses } from '@mui/material';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import {ReactComponent as IconarrowRight} from "./icon/arrowRight.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faClock, faCogs, faDesktop, faLaptop, faHome, faHeadphones, faCamera, faTv, faNewspaper,  faSnowflake  } from '@fortawesome/free-solid-svg-icons';

function Menuheader({addPadding}) {
  let {theme} = useValue();
        const [preindex, setIndex] = useState(null); 
        const [product, setProduct] = useState([]);
        const [prePadding, setPading] = useState(false);
     
    const items = [
            { icon:  <FontAwesomeIcon icon={faMobile} />, label:  "Điện thoại, Tabled" } ,
            { icon: <FontAwesomeIcon  icon={faLaptop} /> , label: "Laptop"},
            { icon:  <FontAwesomeIcon icon={faCamera} />, label:  "Camera , Flycam" } ,
            { icon:  <FontAwesomeIcon icon={ faHome} />, label: "Đồ gia dụng, Điện tử" } ,
            { icon:  <FontAwesomeIcon icon={faTv} />,      label: "Tivi" } ,
            { icon:  <FontAwesomeIcon icon={faDesktop} />, label: "Máy Tính" } ,
            { icon:  <FontAwesomeIcon icon={faHeadphones} />, label: "Phụ kiện, Tai nghe" } ,
            { icon:  <FontAwesomeIcon icon={faClock} />, label: "Đồng hồ" } ,
            { icon: <FontAwesomeIcon  icon={ faSnowflake} />, label: "Điện tử, điện máy"},
            { icon:  <FontAwesomeIcon icon={faNewspaper} />, label: "Tin công nghệ" } ,    
    ]
    const Listitem = [
        { id: 0, items: Link_phone },
        { id: 1, items: Link_laptop},
        { id: 2, items: Link_camera},
        { id: 3, items: Link_laptop},
        { id: 4, items: Link_laptop},
        { id: 5, items: Link_laptop},
        { id: 6, items: Link_earphone},
        { id: 7, items: Link_laptop},
        { id: 8, items: Link_laptop},
        { id: 9, items: Link_laptop},
    ]
    console.log(items[0].icon);
    return (
                <Wrapper        
                        onMouseEnter={() => setIndex(preindex)}  // hoạt động khi người dùng di chuyển chuôt vào 
                        onMouseLeave={() => setIndex(null)}
                      className= "show" 
                >
      
                <div className={`Wrapper__label ${addPadding ? "addpadding" : ""} ${theme ? 'Bright' : 'Dark'} `}> 
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
                                                <div  className={`label_icon ${theme ? 'color__Bright' : 'color__Dark'}`}>
                                               
                                                                        {item.icon }
                                                                        {item.label}    
                                                </div>
                                        <IconarrowRight className={
                                                `Wrapper__icon ${theme ? 'color__Bright' : 'color__Dark'}`}/>
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
                                                        
                                >          
                                { preindex !== null &&  <Smartphone value={product} /> } 
                                                 </div>    
                                   
                        </React.Fragment>
                       
        </Wrapper>
    );
}
const Wrapper = styled.div `

        // ==============================phần theme ==============================
        .Bright {
            background-color:white;
        }
        .Dark {
                background-color:black;
        }
        .color__Bright {
            color:black;
        }
        .color__Dark {
                fill: white;
                color: white;
        }
        //=========================================================================
        width: 20rem;
        height: 100%;
         display: flex;
       
      
   
       .label_icon {
            display:flex;
            grid-column-gap:10px;
       }
        .showitem {
                  width:58rem;
                  position: absolute;
                  margin-left:20rem;
                  opacity: 0;
                

               
                  
        }
        .showitem.show {
                        opacity: 1; 
                        
                      
                       
                         

                }
    .Wrapper__label--menu {
            
             cursor: pointer;
             padding: 0.8rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: "Lato", sans-serif;
            font-weight: 400;
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
         
            padding: 0.8rem;
            width: 35rem;
            height:100%;
            border-radius: 2rem;
            box-shadow: 0 1px 2px 0 rgba(60,64,67,.1),                   
                        0 2px 6px 2px rgba(60,64,67,.15);
                     
                         
      
   }
   .Wrapper__label.addpadding {
       padding-top: 1.5rem;
       padding-bottom: 1.5rem;
     
         
   }



`
export default Menuheader;