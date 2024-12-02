import React, {Suspense,lazy} from "react";

    const Vd2 = React.lazy(() => import("../components/Vd2"));
    const Vd3 = React.lazy(() => import("../components/Vd3"));
    const SliceImage = React.lazy(() => import("../components/SliceImage"));
    const ShowInfo = React.lazy(() => import("../../../Common/Listproduct/ShowInfo"));
  const  Productads = React.lazy(() => import("../../Home/Components/Productads"))
export {Vd2,Vd3,SliceImage,ShowInfo,Productads};