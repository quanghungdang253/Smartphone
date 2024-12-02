import { useEffect, useState } from "react";
import axiosClient from "./axiosClient";
import { useParams } from "react-router-dom";  // lấy tham số động 
import { Switch } from "@mui/material";
function useHandleApi(namephone) {  // xử lý hiển thị các điện thoại 

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
              useEffect(() => {
                        const handleGetdata = async() => {  // định nghĩa hàm bất đồng bộ 
                              const apiUrl = namephone ? `/InformationDisplay/${namephone}.json` : `/InformationDisplay/homephone.json`;
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
              },[])
              return [data,loading];     
}
         
         
export default useHandleApi;

