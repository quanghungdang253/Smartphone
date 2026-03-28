import React, { useEffect } from 'react';
import Map from './store-map/components/map';
import styled from 'styled-components';
import Introduce from './store-map/components/introduce';

function MainStoreMapInfo(props) {
   
    return (
        <div>
               <div className='max-w-[1440px] mx-auto'>
                      <Introduce/>
                        <Map/>
                       

               </div>    
        </div>
    );
}


export default MainStoreMapInfo;