import React from 'react';
import Image3d from './store-info/components/image3D';
import styled from 'styled-components';

function MainStoreInfo(props) {
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