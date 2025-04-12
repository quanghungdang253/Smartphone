import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import { indexCart } from '../../../features/cart/cartSlice';
function Navigation_header(props) {
        const selectId = useSelector(state => state.cart.indexCart);

    return (
        <Navigation>
            <div className='Navication__call'> 
                    <Link className='Link ' to='/StoreInfo'> 
                      
                    <FontAwesomeIcon icon={faStore} size="2x" className='icon' />
                            <h1 className='linkIntroduce'> Giới thiệu cửa hàng <br></br> Visual 360°  </h1>
                         
                    </Link>
          </div>
            <div className='Navigation__googleMap'>
                <Link className='Link Link__map' to='/GoogleMap' target='_blank' rel='noopener noreferrer'>   
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
                    <h1>  Cửa hàng gần bạn </h1>
                </Link>
            </div>
            <div className='Navigation__shopping-cart'>
                    <Link className='Link'>
                    <FontAwesomeIcon icon={faTruck} className='icon' />
                        <h1> Tra cứu đơn hàng </h1>
                    </Link>
            </div>
            <div className='Navigation__shopping-cart' >
                    <Link className='LinkShoppingCart'
                         to='/Cart'>
                        <div className='iconCart'> 
                            <div className = {`${selectId === 0 ? 'noColor' :  'index'}`}> {selectId === 0 ? null : selectId}
                             </div>
                            <FontAwesomeIcon icon={faCartShopping} className='icon' /> 
                              <h1 className='textShoppingCart'> Giỏ hàng </h1>
                        </div>
                    </Link>
            </div>
            <div  className='Navigation__User'>
                    <Link className='Link '>
                                    <FontAwesomeIcon icon={faUser} className='icon icon__user'/>
                                    <h1> Đăng Nhập</h1>
                    </Link>
            </div>
        </Navigation>  
    );
}

const Navigation = styled.div `
    font-size: 1rem;
    width: 90em;
   color: white;
   display:flex;
   grid-column-gap:2px;
   align-items: center;

   // =============================phần style chung =================================================
.icon {
                      
                     
                       font-size: 1.2rem;
                    }
                    .Link {
                        padding:5px;
                        display: flex;
                        text-align:center;
                        justify-content:center;
                        align-items:center;
                        grid-column-gap:1px;
                        text-decoration:none;
                        color: white;
                        width: 8rem;
                        border-radius:10px;
                        
                                    
                    }
                    .Link h1 {
                        font-size: 12px;
                        font-weight: 200;
                        font-family: 'Times New Roman', Times, serif;
                      
                       
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
      
}
.Navication__call .call p {
    font-size:0.8rem;
}
.Navication__call:hover {
    background-color: rgb(47, 47, 47);
}
.fa-solid.fa-phone.fa-shake {
        font-size: 1.6rem;
   
}
.call {
        display: flex;
        flex-direction: column;
        grid-row-gap:2px;
}
.linkIntroduce {
    width:9rem;
}
.LinkShoppingCart {
       display: inline-block;
        font-size:10px;
        text-decoration:none;
        color:white;
        padding:5px;
        border-radius:10px;
      
        
}
.LinkShoppingCart:hover {
    background-color:red;

}
.iconCart {
    display:flex;
    align-items:center;
    position:relative;
}
.index {
    position:absolute;
    bottom: 10px;
    left: 5px;
    color: black;
    font-weight: 900;
    height: 15px;
    width: 15px;
    padding: 5px 5px 5px 5px;
    border-radius: 999px;
    background-color: red;
    z-index:1
}
.LinkShoppingCart:hover {
    background-color: rgb(47, 47, 47);
}
.textShoppingCart {
    font-size: 10px;
}

`
export default Navigation_header;