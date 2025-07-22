import { useEffect, useState } from "react";
import axiosClient from "../Api/axiosClient";
import { useParams } from "react-router-dom";  // lấy tham số động 
import { Switch } from "@mui/material";
import Loading from "../Common/components/Loading";
function useHandleApi(namephone) {  // xử lý hiển thị các điện thoại 
        console.log("teb moi ưefwefew "+namephone);
        const[ endpointInfo, setEnpointinFo] = useState(""); 

        let CategoryInformation = ["Tivi", "Đồ Gia Dụng", "Loa", "Máy giặt", "Đồng hồ", "Nồi chiên không dầu","Máy lọc nước","Tai nghe","Smartphone","Nồi cơm điện","Camera", "Máy hút bụi","Máy nước nóng","Tủ lạnh","Tủ đông","Laptop"];

        let PhoneBrands = ["homephone", "Ipad" , "IPhone", "Nokia","samsung", "vivo", "Xiamio","benco","tcl","tecno","realme","oppo","mobel","masstel","itel","honor"];

        let CameraBrands = ["Camera Dahua", "Camera Hikvision","Camera Tiandy","Camera Panasonic"];
        let Laptop = ["Laptop Al","Laptop Gaming","Laptop học tập văn phòng"]
        let EarBrands = ["Tai Nghe JBL","Tai nghe B&O","Tai nghe Apple","Tai nghe Harman Kardon","Tai nghe Sony", "Tai nghe Focal"]
        let filteres = ["Máy lọc nước Samsung","Máy lọc nước Toshiba","Máy lọc nước LG","Máy lọc nước Kangaroo","Máy lọc nước Sunhouse","Máy lọc nước Điện giải","Máy lọc nước Hòa phát","Máy lọc nước Karofi"];
        let Tv = ["Ti vi Samsung 4K","Ti vi Sony","Ti vi Xiamio","Tivi LG","Ti vi TCL","Ti vi Casper","Ti vi Toshiba","Ti vi Hisense"]
        let computer = ["Apple (MacBook)", "Asus","HP","Dell", "Microsoft","Lenovo","Acer","MSI"];

        let Clock = ["Đồng hồ Orient","Đồng hồ Casio","Đồng hồ","Đồng hồ Citizen","Đồng hồ Tissot","Đồng hồ Frederique Constant","Đồng hồ Titan","Đồng hồ Tommy Hilfiger",""]
       let Ipad = [""]
          
    useEffect(() => {
                 
                     if(CategoryInformation.includes(namephone)){
                          setEnpointinFo("InformationCategory");  
                    }
                    else if(CameraBrands.includes(namephone)){
                            setEnpointinFo("InformationCamera");
                    }
                    else if(EarBrands.includes(namephone)){
                                setEnpointinFo("InformationEarphone");
                    }else if(Laptop.includes(namephone)){
                                setEnpointinFo("InformationLaptop");
                    }else if(Tv.includes(namephone)){
                                setEnpointinFo("InformationTelevison");
                    }else if(filteres.includes(namephone)){
                                setEnpointinFo("InformationFilter");
                    }else if(  computer.includes(namephone)){
                                setEnpointinFo("InformationComputer");
                    }else if(PhoneBrands.includes(namephone)){
                                setEnpointinFo("InformationPhone");
                    }
                    else if(Clock.includes(namephone)){
                                setEnpointinFo("InformationClock");
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
                         
                            console.log(namephone);
        console.log(  `/Information/${endpointInfo}/${encodeURIComponent(namephone)}.json`)
                        
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

