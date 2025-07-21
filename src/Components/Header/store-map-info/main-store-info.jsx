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
    <Container>  
        <div className='Container'>
                <Image3d/>
        </div>
    </Container>
    );
}
const Container = styled.div `
height:10000px;
        margin-top:2.7%;

`
export default MainStoreInfo;