
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ShowInfo,Productads, ListimageProduct} from './LazyloadingComponent';
import { Suspense } from 'react';
import Loading from '../../../ui/Loading';
//=================================imgage==================
import imgSale from '../assets/image-ui-components/img-sale.jpg';
import imgIPhone from '../assets/image-ui-components/imgIphone.jpg';
import Criteria from '../../../ui/criteria';
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
    <div className={styles.component}>  

         <Suspense fallback={(<Loading/>)}>  
              <ShowInfo namephone={data} enpoint={namephone} {...props}/>
          </Suspense>

    </div>
)
const NokiaComponent = ({data, namephone, ...props}) => {

        <Suspense fallback={(<Loading/>)}>
                    <ShowInfo namephone={data} enpoint={namephone} {...props}/>
        </Suspense>

}


const SamsungComponent = ({ data, namephone, ...props }) => {

    const [product, setProduct] = useState([]);

    // khi data thay đổi thì reset lại dữ liệu hiển thị
    useEffect(() => {
        if (data?.data) {
            setProduct(data.data);
        }
    }, [data]);

    function handleData(customData) {
        setProduct(customData);
    }

    return (
        <Suspense fallback={<Loading />}>
            <div
                className={`${styles.componentSamsung} ${styles.component}`}
                style={{ backgroundImage: `url(${imgbackground})` }}
            >

                <ImgSlide img={imgSaleSamsung} />

                <ListimageProduct
                    image={data?.advertising_images}
                    customs={true}
                />

                <Criteria
                    data={data}
                    sendResult={handleData}
                />

                <ShowInfo
                    namephone={data}
                    enpoint={product}
                    {...props}
                />

            </div>
        </Suspense>
    );
};


const IphoneComponent = ({data, namephone, ...props}) => {


    const [product, setProduct] = useState([]);

    // khi data thay đổi thì reset lại dữ liệu hiển thị
    useEffect(() => {
        if (data?.data) {
            setProduct(data.data);
        }
    }, [data]);

    function handleData(customData) {
        setProduct(customData);
    }


    return (
            <div className={`${styles.componentIphone} ${styles.component}`}>
        <img src={imgIPhone} alt='' className='img' /> 
    <div className='boxIphone'>   
    <Suspense 
        fallback={(<Loading/>)} 
        className='componentIphone'
    >  
        <div>
            <ListimageProduct image={data.advertising_images} customs={true}/>
        <Criteria
                    data={data}
                    sendResult={handleData}
                />
            <ShowInfo namephone={data} enpoint={namephone}  {...props}/>     
        </div>
     </Suspense>
     </div>
    </div>

    )


}
const OppoComponent = ({data, namephone, ...props}) => (
        <Suspense fallback={(<Loading/>)}>  
          <div className={`${styles.componentOppo} ${styles.component}`}>
                 <ShowInfo namephone={data} enpoint={namephone}  {...props}/>   
          </div>
          
        </Suspense>
)
const IpadComponent = ({data, namephone, ...props}) => (
    <Suspense fallback={(<Loading/>)}>  
        <div className={`${styles.componentIpad} ${styles.component}`}>  
                    <ShowInfo 
                        namephone={data} 
                        enpoint={namephone}  
                        {...props}
                    />
        </div>
    </Suspense>
)
const  VivoComponent = ({data, namephone, ...props}) => (
    <Suspense fallback={(<Loading/>)}>  
       <div className={`${styles.componentVivo} ${styles.component}`}>  
          <React.Fragment>
                    <ShowInfo 
                        namephone={data} 
                        enpoint={namephone}  
                        {...props}/>
           </React.Fragment>
      </div>
    </Suspense>
)
const hotSaleComponent = ({data , dataEnpoint, namephone, ...props}) => 
(
            <div className={`${styles.componentHotSale} ${styles.component}`}>  
                <div className={styles.imageSale}>     
                          <img src={imgSale} alt='' className= {styles.componentHotSale__imgSale}/>
                </div>

                <ListimageProduct 
                    image={data.advertising_images} 
                    customs={true}
                />

                <LabelProduct labelProduct={data.label_product}/>
                    
                <ShowInfo namephone={data} enpoint={namephone}  {...props}/> 
            </div> 
     
)
// ===================================================================
//==================================================================================================================================
const DefaultComponent = ({data, dataEnpoint, namephone, ...props}) => (

  <Suspense fallback={<Loading />}>
   <div className={`${styles.DefaultComponent} ${styles.component}`}>       
  
        <div 
          
            className={
                dataEnpoint === undefined ? 'imgHome' : 'imgSale'
        }>
            <ShowInfoHome 
                 enpoint={namephone} 
                         {...props}
             />
        </div>

    </div>
  </Suspense>
);

const VivoComponentStyle = styled.div `
        margin-top: 12rem;

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
