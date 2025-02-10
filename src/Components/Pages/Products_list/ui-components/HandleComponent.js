
import React from 'react';
import { Link } from 'react-router-dom';
import {Vd2,Vd3, ShowInfo,Productads, ListimageProduct} from './LazyloadingComponent';
import { Suspense } from 'react';
import Loading from '../../../Common/components/Loading';
import imgSale from '../assets/image-ui-components/img-sale.jpg';
import imgbackground from '../assets/image-ui-components/imgbackground.jpg';
import { dark } from '@mui/material/styles/createPalette';
import styled from 'styled-components';
// ====================================Điện thoại================================================================

const SamsungComponent = ({data, namephone, ...props}) => (
<Suspense fallback={(<Loading/>)}>  
      
        <div style={{marginTop: '200px'}}>
                
                        <ListimageProduct image={data.advertising_images} customs={true}/>
                        <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
                        <Link to={'http://localhost:3000/'} > Home </Link>
                       
        </div>
 </Suspense>

)
const OppoComponent = ({data, namephone, ...props}) => (
        <Suspense fallback={(<Loading/>)}>  
            <React.Fragment>
        
                        <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
                        <p>fwfwefwefwe</p>
            </React.Fragment>
        </Suspense>
)
const hotSaleComponent = ({data , namephone, ...props}) => 
(

    <BoxHotSale saleImg={imgbackground} className='component'> 
        <img src={imgSale} alt />
        
        <HotSaleComponents>  
         
                <ListimageProduct image={data.advertising_images} customs={true}/>
                <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
         
                     
                       
        
        </HotSaleComponents> 
  </BoxHotSale> 
)
//==================================================================================================================================
const DefaultComponent = ({data, namephone, ...props}) => (

    <Suspense fallback={(<Loading/>)}>  
            <React.Fragment>
                 
                    <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
                    <p>dqwdqwdqwdw</p>
                   
            </React.Fragment>
    </Suspense>
)

const HotSaleComponents = styled.div `
           margin-right: 7%;
           margin-left: 7%;
     
       


`
const BoxHotSale = styled.div `
                background-image: url(${props => props.saleImg})

`
// .component {
//         background-image: url(${props => props.saleImg});
             
               
//        }
export {
            SamsungComponent,
            OppoComponent,
            DefaultComponent,
            hotSaleComponent
        };
