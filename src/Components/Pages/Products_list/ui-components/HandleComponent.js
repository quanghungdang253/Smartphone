
import React from 'react';
import { Link } from 'react-router-dom';
import { ShowInfo,Productads, ListimageProduct} from './LazyloadingComponent';
import { Suspense } from 'react';
import Loading from '../../../Common/components/Loading';
//=================================imgage==================
import imgSale from '../assets/image-ui-components/img-sale.jpg';
import imgIPhone from '../assets/image-ui-components/imgIphone.jpg';

//=========================================================
import imgbackground from '../assets/image-ui-components/imgbackground.jpg';
import LabelProduct from '../../../Common/label-product/label-product';
import { dark } from '@mui/material/styles/createPalette';
import styled from 'styled-components';
import ShowInfoHome from '../../../Common/Listproduct/show-infor-home';
import styles from '../assets/styles/HandleComponent.module.scss';
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
        <div>
            <ListimageProduct image={data.advertising_images} customs={true}/>
            <ShowInfo namephone={data} enpoint={namephone}  {...props}/>     
        </div>
 </Suspense>
)
const IphoneComponent = ({data, namephone, ...props}) => (
<IphoneComponents>
  <div className='imgIphone'>   
    <img src={imgIPhone} alt='' className='img' /> 
 </div>
    <div className='boxIphone'>   
    <Suspense 
        fallback={(<Loading/>)} 
        className='componentIphone'
    >  
                 <div>
                        <ListimageProduct image={data.advertising_images} customs={true}/>
                        <ShowInfo namephone={data} enpoint={namephone}  {...props}/>     
                  </div>
     </Suspense>
     </div>
    </IphoneComponents>
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
    <BoxHotSale saleImg={imgbackground} className={styles.componentHotSale}> 
        <img src={imgSale} alt='' className= {styles.componentHotSale__imgSale}/>
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
          
           
                <ShowInfoHome   enpoint={namephone}  {...props}/>
           
        </HotSaleComponents> 
    </Suspense>
)
const HotSaleComponents = styled.div `
position: relative;
bottom:0px;
        overflow: hidden;
      overflow:hidden;
      background-color: white;
      border-radius:10px;
    
      .componentSale_1 {
            margin-top: 2rem;
      }
      @media (max-width: 768px) {
            position: relative;
            
      }
     
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

const IphoneComponents = styled.div `
 background-color:#4a4a4a;
.boxIphone {
             margin-left:7%;
            margin-right:7%;
           
}
.imgIphone {
         padding-top:3rem;
        text-align:center;
        width:100%;     
}
.img {
    width: 85rem;
    object-fit:contain;

}

           
                background-repeat: no-repeat;
               

`

export {
            SamsungComponent,
            OppoComponent,
            DefaultComponent,
            hotSaleComponent,
            XiamioComponent,
            IphoneComponent,
            IpadComponent,
            VivoComponent,
            NokiaComponent
        };
