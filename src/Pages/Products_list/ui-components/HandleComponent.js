
import React from 'react';
import { Link } from 'react-router-dom';
import { ShowInfo,Productads, ListimageProduct} from './LazyloadingComponent';
import { Suspense } from 'react';
import Loading from '../../../Common/components/Loading';
//=================================imgage==================
import imgSale from '../assets/image-ui-components/img-sale.jpg';
import imgIPhone from '../assets/image-ui-components/imgIphone.jpg';
import Criteria from '../../../Common/components/criteria';
//=========================================================
import imgbackground from '../assets/image-ui-components/imgbackground.jpg';
import LabelProduct from '../../../Components/label-product/label-product';
import { dark } from '@mui/material/styles/createPalette';
import styled from 'styled-components';
import ShowInfoHome from '../../../Components/Listproduct/show-infor-home';
import styles from '../assets/styles/HandleComponent.module.scss';
import ImgSlide from '../components/Img-sale';
import imgSaleSamsung from '../assets/image-ui-components/img-sale.jpg';
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
        <SamsungComponents  saleImg={imgbackground}         className='componentSamsung'>
         <div className='imgSale'>    
                 <ImgSlide img={imgSaleSamsung} className="img"/>
         </div>
            <ListimageProduct image={data.advertising_images} customs={true}/>
               <div className='Criteria'> 
                    <Criteria />
              </div>
            <ShowInfo namephone={data} enpoint={namephone}  {...props}/>     
        </SamsungComponents>
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
                        <Criteria />
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
       <VivoComponentStyle>   
          <React.Fragment>
                    <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
                    <p>fwfwefwefwe</p>
           </React.Fragment>
        </VivoComponentStyle>
    </Suspense>
)
const hotSaleComponent = ({data , dataEnpoint, namephone, ...props}) => 
(
       <HotSaleComponents>  
    <BoxHotSale 
        saleImg={imgbackground} 
        className={styles.componentHotSale}
    > 
        <img src={imgSale} alt='' className= {styles.componentHotSale__imgSale}/>
     
                <ListimageProduct image={data.advertising_images} customs={true}/>
                     <div className='box boxlabel'> 
                            <LabelProduct labelProduct={data.label_product}/>
                    </div>
                <ShowInfo namephone={data} enpoint={namephone}  {...props}/> 
  </BoxHotSale> 
    </HotSaleComponents> 
)
// ===================================================================
//==================================================================================================================================
const DefaultComponent = ({data, dataEnpoint, namephone, ...props}) => (

  <Suspense fallback={<Loading />}>
  
    <DefaultComponentStyle saleImg={imgbackground} className={
        dataEnpoint === undefined ? 'imgHome' : 'imgSale'
    }>

      <ShowInfoHome enpoint={namephone} {...props} />
    </DefaultComponentStyle>
  </Suspense>
);

const VivoComponentStyle = styled.div `
        margin-top: 12rem;

`

const DefaultComponentStyle = styled.div`
     .imgHome {
         margin-top: 0px;
     }
     .imgSale {
        margin-top: 12rem;
     }
    .imgSale {
         background-color:red;
         max-width:30em;
         margin-top: 30em;
     }

`


const HotSaleComponents = styled.div `
      margin-top: 10em;
    .imgSale {
         background-color:red;
         max-width:30em;
     }
        background-image: url(${props => props.saleImg});
     
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
      @media (max-width: 1024px) {
                   background-image: url("") !important;
                   .imgSale {
                    background-color:red;
                        max-width:30em;
                }
                .img {
                       width:100%;
                       
                }
        }
`
const SamsungComponents = styled.div `
margin-top:12rem;
.imgSale {
        display: block;
        background-color:transparent;
}
        background-image: url(${props => props.saleImg});
        @media (max-width: 1024px) {
                   background-image: url("") !important;
                   .imgSale {
                    background-color:red;
                        max-width:30em;
                }
                .img {
                       width:100%;
                       
                }
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
