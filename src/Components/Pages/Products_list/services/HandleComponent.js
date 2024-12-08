
import React from 'react';
import {Vd2,Vd3, ShowInfo,Productads, ListimageProduct} from './LazyloadingComponent';
import { Suspense } from 'react';
import Loading from '../../../Common/components/Loading';

const SamsungComponent = ({data, namephone, ...props}) => (
<Suspense fallback={(<Loading/>)}>  
        <React.Fragment>
                        <Vd2/>
                        <Vd3/>
                        <ListimageProduct image={data.advertising_images}/>
                        <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
        </React.Fragment>
        </Suspense>

)

const OppoComponent = ({data, namephone, ...props}) => (
    <Suspense fallback={(<Loading/>)}>  
        <React.Fragment>
                        <Vd2/>
                        <Vd3/>
                        <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
        </React.Fragment>
        </Suspense>
)
const DefaultComponent = ({data, namephone, ...props}) => (
    <Suspense fallback={(<Loading/>)}>  
    <React.Fragment>
                    {/* <Vd2/>
                    <Vd3/> */}
                    <ShowInfo namephone={data} enpoint={namephone}  {...props}/>
                 
    </React.Fragment>
    </Suspense>
)

export {
            SamsungComponent,
            OppoComponent,
            DefaultComponent
        };
