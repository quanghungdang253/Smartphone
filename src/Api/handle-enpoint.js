import { useEffect, useState } from "react";
import Loading from "../Common/components/Loading";
import ShowInfo from "../Common/Listproduct/ShowInfo";
import { useSVGOverlay } from "react-leaflet/SVGOverlay";



function ChildComponent(props){
    const nameEnpoint = props.nameEnpoint;
   const [enpoint, setnpoint] = useState();
            setnpoint(nameEnpoint);

       useEffect(() => {
        // Giả sử đây là dữ liệu từ API hoặc xử lý logic

    
        // Truyền giá trị lên component cha
   
      }, [nameEnpoint]);
  return;
  
  }

  export default ChildComponent;
