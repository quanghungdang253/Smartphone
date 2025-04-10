import { useEffect, useState } from "react";
import axiosClient from "./axiosClient";
import { useParams } from "react-router-dom";  // lấy tham số động 
import { Switch } from "@mui/material";
import Loading from "../Components/Common/components/Loading";
function useHandleApi(namephone) {  // xử lý hiển thị các điện thoại 
        const[ endpointInfo, setEnpointinFo] = useState(""); 
        let CategoryInformation = ["Tivi", "Đồ Gia Dụng", "Loa", "Máy giặt", "Đồng hồ", "Nồi chiên không dầu","Máy lọc nước","Tai nghe","Smartphone","Nồi cơm điện","Camera", "Máy hút bụi","Máy nước nóng","Tủ lạnh","Tủ đông","Laptop"];

        let PhoneBrands = ["homephone", "Ipad" , "IPhone", "Nokia","samsung", "vivo", "Xiamio","benco","tcl","tecno","realme","oppo","mobel","masstel","itel","honor"];

        let CameraBrands = ["Camera Dahua", "Camera Hikvision","Camera Tiandy","Camera Panasonic"];
        let Laptop = ["Laptop Al","Laptop Gaming","Laptop học tập văn phòng"]
        let EarBrands = ["Tai Nghe JBL","Tai nghe B&O","Tai nghe Apple","Tai nghe Harman Kardon","Tai nghe Sony", "Tai nghe Focal"]
        //=============================danh sách các sản phẩm =============================
      
           // let productCatalog: danh mục sản phẩm 
           
    useEffect(() => {
                 
                     if(CategoryInformation.includes(namephone)){
                          setEnpointinFo("InformationCategory");
                        
                    }
                    else if(CameraBrands.includes(namephone)){
                            setEnpointinFo("InformationCamera");
                    }
                    else if(EarBrands.includes(namephone)){
                                setEnpointinFo("InformationEarphone");
                    }
                    
                
                    else{
                          setEnpointinFo("InformationPhone");
                    }
    },[namephone])

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
  
        useEffect(() => {
                if (!endpointInfo) {
                                return;
                    }
                const handleGetdata = async() => {  // định nghĩa hàm bất đồng bộ     
                        // let decodedName = namephone ? decodeURIComponent(namephone) : null;
                        const apiUrl = namephone ?
                            `/Information/${endpointInfo}/${encodeURIComponent(namephone)}.json`
                            : `/Information/${endpointInfo}/homephone.json`;  
                         
        
                        
                                try{
                                            const  getApi = await axiosClient.get(apiUrl);                           
                                            setLoading(true);
                                            setData(getApi);
                                }
                                catch(error){
                                               setLoading(true);
                                }
                                finally{
                                                setLoading(false);
                                   }
                        } 
                        handleGetdata();        
              },[endpointInfo,namephone])
              return [data,loading];     
}
         
         
export default useHandleApi;

