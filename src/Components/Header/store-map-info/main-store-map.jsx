import React, { useEffect } from 'react';
import Map from './store-map/components/map';
import styled from 'styled-components';
import Introduce from './store-map/components/introduce';

function MainStoreMapInfo(props) {
   
    return (
        <Header>
               <div className='Container'>
                      <Introduce/>
                        <Map/>
                       

               </div>    
        </Header>
    );
}

const Header = styled.div `
            .Container {
                        margin-left: 7%;
                        margin-right:7%;
                       
            }


`
export default MainStoreMapInfo;