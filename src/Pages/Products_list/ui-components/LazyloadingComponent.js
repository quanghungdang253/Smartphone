import React, {Suspense,lazy} from "react";


    const  ListimageProduct = React.lazy(() => import("../components/ListimageProduct"))
    const ShowInfo = React.lazy(() => import("../../../Common/Listproduct/ShowInfo"));
   
  const  Productads = React.lazy(() => import("../../Home/Components/product-image"))
export {ShowInfo,Productads, ListimageProduct};