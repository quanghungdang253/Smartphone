
import React from 'react';
import { Link } from 'react-router-dom';
import {Vd2,Vd3, ShowInfo,Productads, ListimageProduct} from './LazyloadingComponent';
import { Suspense } from 'react';
import Loading from '../../../Common/components/Loading';
import imgSale from '../assets/image-ui-components/img-sale.jpg';
import imgbackground from '../assets/image-ui-components/imgbackground.jpg';
import LabelProduct from '../../../Common/label-product/label-product';
import { dark } from '@mui/material/styles/createPalette';
import styled from 'styled-components';
import ShowInfoHome from '../../../Common/Listproduct/show-infor-home';
// ===================== Danh sach SmartPhone ==============================
const XiamioComponent = ({data, namephone, ...props}) => (
      <Suspense fallback={(<Loading/>)}>  

             <ShowInfo namephone={data} enpoint={namephone} {...props}/>
        </Suspense>
)
const NokiaComponent = ({data, namephone, ...props}) => {
        <Suspense fallback={(<Loading/>)}>
                    <ShowInfo namephone={data} enpoint={namephone} {...props}/>
        </Suspense>
}
const SamsungComponent = ({data, namephone, ...props}) => (
<Suspense fallback={(<Loading/>)}>  
      
        <div style={{marginTop: '200px'}}>
                        <ListimageProduct image={data.advertising_images} customs={true}/>
                        <ShowInfo namephone={data} enpoint={namephone}  {...props}/>     
        </div>
 </Suspense>
)
const IphoneComponent = ({data, namephone, ...props}) => (
    <Suspense fallback={(<Loading/>)}>  
          
            <div style={{marginTop: '200px'}}>
                            <ListimageProduct image={data.advertising_images} customs={true}/>
                            <ShowInfo namephone={data} enpoint={namephone}  {...props}/>     
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
const IpadComponent = ({data, namephone, ...props}) => (
    <Suspense fallback={(<Loading/>)}>  
        <React.Fragment>
                    <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
                    <p>fwfwefwefwe</p>
        </React.Fragment>
    </Suspense>
)
const  VivoComponent = ({data, namephone, ...props}) => (
    <Suspense fallback={(<Loading/>)}>  
        <React.Fragment>
                    <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
                    <p>fwfwefwefwe</p>
        </React.Fragment>
    </Suspense>
)
const hotSaleComponent = ({data , dataEnpoint, namephone, ...props}) => 
(
    <BoxHotSale saleImg={imgbackground} className='component'> 
        <img src={imgSale} alt className='img-sale' />
        <HotSaleComponents>  
                <ListimageProduct image={data.advertising_images} customs={true}/>
                     <div className='box boxlabel'> 
                            <LabelProduct labelProduct={data.label_product}/>
                    </div>
                <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
        </HotSaleComponents> 
  </BoxHotSale> 
)
// ===================================================================
//==================================================================================================================================
const DefaultComponent = ({data,  dataEnpoint, namephone,  ...props}) => (
    <Suspense fallback={(<Loading/>)}>  
        <HotSaleComponents> 
                <ListimageProduct image={data.advertising_images} customs={true}/>
                <ShowInfoHome   enpoint={namephone}  {...props}/>
        </HotSaleComponents> 
    </Suspense>
)
const HotSaleComponents = styled.div `
      margin-right: 7%;
      margin-left: 7%;
      background-color: white;
      padding: 2rem 2rem;
      border-radius:10px;
     
`
const BoxHotSale = styled.div `
    background-image: url(${props => props.saleImg});
    padding-top: 2rem;
    border-radius: 10px;
    .box {
        margin-top:1rem;
        margin-bottom:1rem;
    }

`

export {
            SamsungComponent,
            OppoComponent,
            DefaultComponent,
            hotSaleComponent,
            XiamioComponent,
            IphoneComponent,
            IpadComponent,
            VivoComponent
        };
