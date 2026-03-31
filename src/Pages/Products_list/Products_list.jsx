
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowInfo from '../../Components/Listproduct/ShowInfo';
import useHandleApi from '../../hooks/use-handle-api';
import categoryComponentsConfig from './ui-components/HandleComponent';
import Productads from '../Home/Components/product-image';
import RenderbyCategory from './ui-components/RenderbyCategory';
import styled from 'styled-components';
import EmptyProduct from './emptyProduct';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import { Helmet } from 'react-helmet';

import Loading from '../../ui/Loading';
import Breadcrumb from '../../Components/location/location';



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

  useEffect(() => {   
    if(!state){
      handle();       
    }
  },[state]);

  if(loading){
    return <Loading/>
  }

  if(!data || data.length === 0){
    return <EmptyProduct />
  }


  return (
    <div> 
      <RenderbyCategory 
        logic={state} 
        dataEnpoint={dataEnpoint} 
        namephone={namephone} 
        data={data} 
        {...props}
      />
    </div>
  );
}


export default Products_list;


