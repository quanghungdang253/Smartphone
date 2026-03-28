import React from 'react';
import Image3d from './store-info/components/image3D';
import styled from 'styled-components';
import { useEffect } from 'react';
function MainStoreInfo(props) {
     useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        },[])
    return (
    <div>  
        <div>
                <Image3d/>
        </div>
    </div>
    );
}

export default MainStoreInfo;