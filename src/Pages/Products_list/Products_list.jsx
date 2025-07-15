
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowInfo from '../../Common/Listproduct/ShowInfo';
import useHandleApi from '../../Api/use-handle-api';
import categoryComponentsConfig from './ui-components/HandleComponent';
import Productads from '../Home/Components/product-image';
import RenderbyCategory from './ui-components/RenderbyCategory';
import styled from 'styled-components';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import { Helmet } from 'react-helmet';
import styles from './Product_list.module.scss';
import Loading from '../../Common/components/Loading';
import Breadcrumb from '../../Common/location/location';
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
          <div className={styles.Render__product}>
                  <RenderbyCategory logic={state} dataEnpoint={dataEnpoint} namephone={namephone} data={data} {...props}/>
          </div>
      )}
    </Product>
  );
}
const Product = styled.div `
     .Render__product {
       
     }

`
export default Products_list;


