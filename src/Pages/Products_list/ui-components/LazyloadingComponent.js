import React, {Suspense,lazy} from "react";


    const  ListimageProduct = React.lazy(() => import("../components/ListimageProduct"))
    const ShowInfo = React.lazy(() => import("../../../Components/Listproduct/ShowInfo"));
   
  const  Productads = React.lazy(() => import("../../Home/Components/product-image"))
export {ShowInfo,Productads, ListimageProduct};