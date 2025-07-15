import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import Componenticon from './Componenticon';
import Smartphone from './Products/Smartphone';
import {Listitem} from './name-product';
import { useValue } from '../Context/Settings/Theme/ThemeContext';
import {ReactComponent as IconarrowRight} from "./icon/arrowRight.svg";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import items from './name-product';


function Menuheader({addPadding}) {
  let {theme} = useValue();
        const [preindex, setIndex] = useState(null); 
        const [product, setProduct] = useState([]);
        const [prePadding, setPading] = useState(false);
     

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
                                    }}          >
                                <div className={`label_icon ${!theme ? 'color__Bright' : 'color__Dark'}`}>                                       
                                                                        {item.icon }
                                                                        {item.label}    
                                                </div>
                                                <FontAwesomeIcon icon={faChevronRight} 
        className={`Wrapper__icon ${theme ? 'color__Dark' : 'color__Bright'}`}/>      
 </div>                                    ))}
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
            color:white;
        }
        .color__Dark {
                fill: white;
                color: black;
                font-weight:600;
        }
        //=========================================================================
        max-width: 20rem;
        height: 100%;
         display: flex;
       
      
   
       .label_icon {
            display:flex;
            grid-column-gap:15px;
            font-size:inherit;
         
       }
        .showitem {
                  width:58rem;
                  position: absolute;
                  margin-left:16rem;
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
             width: 8px;
             height: 18px;
             display: inline-block;
             background-repeat: no-repeat;  // không lặp lại ảnh 
             margin-right: 4px;
             background-size: contain;
          
             font-weight: 600;
   }
 
   .Wrapper__label {
           font-size: 0.8rem;
            padding: 0.8rem;
            width: 16rem;
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