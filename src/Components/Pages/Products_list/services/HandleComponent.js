
import React from 'react';
import {Vd2,Vd3, ShowInfo,Productads, ListimageProduct} from './LazyloadingComponent';
import { Suspense } from 'react';
import Loading from '../../../Common/components/Loading';
import { dark } from '@mui/material/styles/createPalette';
// ====================================Điện thoại================================================================

const SamsungComponent = ({data, namephone, ...props}) => (
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
            </React.Fragment>
        </Suspense>
)
//==================================================================================================================================
const DefaultComponent = ({data, namephone, ...props}) => (

    <Suspense fallback={(<Loading/>)}>  
            <React.Fragment>
                   
                    <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
            </React.Fragment>
    </Suspense>
)


export {
            SamsungComponent,
            OppoComponent,
            DefaultComponent
        };
