import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
function Navigation_header(props) {
    return (
        <Navigation>
            <div className='Navication__call'> 
                    <Link className='Link'> 
                         <FontAwesomeIcon icon={faPhone} className='icon' />   
                        <div>        
                            <h1> Gọi mua hàng </h1>
                            <h1> 123456789 </h1>
                         </div>  
                    </Link>
          </div>
            <div className='Navigation__googleMap'>
                <Link className='Link Link__map'>   
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
                    <h1> Địa chỉ cửa hàng </h1>
                </Link>
            </div>
            <div className='Navigation__shopping-cart'>
                    <Link className='Link'>
                    <FontAwesomeIcon icon={faTruck} className='icon' />
                        <h1> Tra cứu đơn hàng </h1>
                    </Link>
            </div>
            <div className='Navigation__shopping-cart'>
                    <Link className='Link'>
                    <FontAwesomeIcon icon={faCartShopping} className='icon' />
                        <h1> Giỏ hàng </h1>
                    </Link>
            </div>
            <div  className='Navigation__User'>
                    <Link className='Link Link__User'>
                                    <FontAwesomeIcon icon={faUser} className='icon icon__user'/>
                                    <h1> Đăng Nhập</h1>
                    </Link>
            </div>
        </Navigation>  
    );
}

const Navigation = styled.div `
    font-size: 1.3rem;
    max-width: 90em;
   color: white;
   display:flex;
   align-items: center;

   // =============================phần style chung =================================================
.icon {
                       color:red;
                       font-size:inherit;
                    }
                    .Link {
                        padding: 8px 2px 8px 2px;
                        display: flex;
                        text-align:center;
                        justify-content:center;
                        align-items:center;
                        grid-column-gap:2px;
                        text-decoration:none;
                        color: white;
                        width: 7rem;
                        border-radius:10px;
                        
                                    
                    }
                    .Link h1 {
                        font-size: 0.7rem;
                       
                    }
                    .Link:hover {
                            background-color: rgb(47, 47, 47);
                    }
                   


   //===================================================================

   // ==================icon ==============================
                        .icon__user {
                            border:1px solid white;
                            padding:5px;
                            border-radius:999px;
                        }



   //=================================================
.Link__map {
            width:6rem;
      
}
.Link__User {
    width:7rem;
    padding:2px;
    border-radius:5px;
    border: 1px solid white;
}

.Navication__call {
        display: flex;
        width: 100px;
}
.Navication__call .call p {
    font-size:0.8rem;
}
.fa-solid.fa-phone.fa-shake {
        font-size: 1.6rem;
   
}
.call {
        display: flex;
        flex-direction: column;
        grid-row-gap:2px;
}


`
export default Navigation_header;