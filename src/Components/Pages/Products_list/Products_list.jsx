
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowInfo from '../../Common/Listproduct/ShowInfo';
import useHandleApi from '../../../Api/use-handle-api';
import categoryComponentsConfig from './ui-components/HandleComponent';
import Productads from '../Home/Components/product-image';
import RenderbyCategory from './ui-components/RenderbyCategory';
import styled from 'styled-components';
import { useValue } from '../../../Context/Settings/Theme/ThemeContext';
import { Helmet } from 'react-helmet';
import Loading from '../../Common/components/Loading';

function Products_list(props) { 
  const logic = props.logic; 
  const dataEnpoint = props.dataEnpoint;
  const [state , setState] = useState(logic);
  const params = useParams();
  let namephone = params.namephone;
 const { theme } = useValue();
  const [data, loading] = useHandleApi(namephone);
  function handle(){
           setState(true);
  }
  useEffect(() => {   // xử lý logic hiển thị 
    if(!state){
              handle();
}
  },[state])
 if(!data){
              <Loading/>
 }
  return (
    <Product> 
        {!data ? (
                  <Loading/>
           ) : (
          <div className='Render-product'>
                  <RenderbyCategory logic={state} dataEnpoint={dataEnpoint} namephone={namephone} data={data} {...props}/>
          </div>
      )}
    </Product>
  );
}
const Product = styled.div `
     .Render-product {
      margin-top:10%;
         margin-left: 7%;
         margin-right: 7%;
     }

`
export default Products_list;


