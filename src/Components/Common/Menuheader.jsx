import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Componenticon from './Componenticon';
import Smartphone from './Products/Smartphone';


function Menuheader({addPadding}) {
        const [preindex, setIndex] = useState(null); // thiết lập giá trị ban đầu là null không xác định 
        const [prePadding, setPading] = useState(false);
    const items = [
        {icon: Componenticon.Iconphone , label: "Điện thoại, Tabled" } ,
        {icon: Componenticon.Iconlaptop , label: "laptop"},
        {icon: Componenticon.Iconclock , label: "Camera",} ,
        {icon: Componenticon.Iconhouseholditems , label: "Đồ gia dụng, Điện tử "},
        {icon: Componenticon.IconTV , label: "Tivi"},
        {icon: Componenticon.Iconcomputer , label: "Máy Tính"},
        {icon: Componenticon.IconAccessory , label: "Phụ kiện"},
        {icon: Componenticon.IconCamera , label: "Camera"},
        {icon: Componenticon.IconTech , label: "Tin công nghệ"}
    
    ]
    const Listitem = [
        {       index: 0,
                items: <Smartphone/>
        },
        {       index: 1,
                items: <Smartphone/>
        },
        {       index: 2,
                items: <Smartphone/>
        },
        {       index: 3,
                items: <Smartphone/>
        },
        {       index: 4,
                items: <Smartphone/>
        },
        {       index: 5,
                items: <Smartphone/>
        },
        {       index: 6,
                items: <Smartphone/>
        },
        {       index: 7,
                items: <Smartphone/>
        }
       
        
    ]

    return (
        <Wrapper>
                <div className={`Wrapper__label ${addPadding ? "addpadding" : ""} `}> 
                     {/* phương pháp chèn icon thứ nhất  */}
                           
                            {/* <i className='Wrapper__icon icon--phone'
                               style={{backgroundImage: `url(${Iconphone})`, width: "25px", height:"20px", display: "inline-block"}}
                            ></i>  
                                                     */} 
                        {items.map((item,index) => (
                                        <div className='Wrapper__label--menu'
                                         key={index}
                                         onMouseEnter={() => setIndex(index)}
                                         onMouseLeave={() => setIndex(null)}                                       >
                                         
                                                <div className=''>
                                                        <item.icon className='Wrapper__icon'/>
                                                        {item.label}    
                                                </div>
                                               <Componenticon.IconarrowRight className='Wrapper__icon'/>
                                        </div>
                                                                                   
                           ))}
                        </div>
                        <React.Fragment> 
                                {Listitem.map((item,index) => (  
                                      
                                        <div key={index}
                                         className={`showitem ${index === preindex ? 'show' : ''}`}
                                         onMouseEnter={() => setIndex(index)}
                                         onMouseLeave={() => setIndex(null)}        
                                       
                                         > 
                                                        {item.items}
                                             {console.log(index)}
                                             {console.log(preindex)}
                                        </div>
                                ))}
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