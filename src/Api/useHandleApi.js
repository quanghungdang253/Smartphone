import { useEffect, useState } from "react";
import axiosClient from "./axiosClient";
import { useParams } from "react-router-dom";  // lấy tham số động 
import { Switch } from "@mui/material";
import Loading from "../Components/Common/components/Loading";
function useHandleApi(namephone) {  // xử lý hiển thị các điện thoại 
        const[ endpointInfo, setEnpointinFo] = useState(""); 
  console.log(endpointInfo);
    useEffect(() => {
                  
switch(namephone){
        case "homephone" || "Ipad" || "Iphone" || "Nokia" || "oppo" ||  "samsung" ||  "vivo"||  "Xiamio":
                setEnpointinFo("InformationPhone")
        break;

        default: 
                        setEnpointinFo("InformationPhone")      
        break;
}      
    },[namephone])

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    if(!endpointInfo){
                
    }
        useEffect(() => {
                if (!endpointInfo) {
                        return;
                    }
                const handleGetdata = async() => {  // định nghĩa hàm bất đồng bộ                
             const apiUrl = namephone ?
              `/Information/${endpointInfo}/${namephone}.json`
               : `/Information/InformationPhone/homephone.json`;
        
                                try{
                                        const  getApi = await axiosClient.get(apiUrl);                           
                                        setLoading(true);
                                        setData(getApi);
                                }
                                catch(error){
                                                alert(" có lỗi ");
                                }
                                finally{
                                                setLoading(false);
                                }
                        } 
                        handleGetdata();        
              },[endpointInfo])
              return [data,loading];     
}
         
         
export default useHandleApi;

