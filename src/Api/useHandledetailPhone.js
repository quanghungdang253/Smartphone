
// // xử lý hiển thị thông tin chi tiết điện thoại 

import { useEffect, useState } from "react";
import axiosClient from "./axiosClient";


function useHandledetailApi(link,id) {   // xử lý hiển thị thông tin chi tiết điên thoại
const [links, setLink] = useState("");
const [loading, setLoading] = useState(true);
const [data,setData] = useState(null);
let DataSmartphone = ["datasamsung","datavivo","dataPhone","dataOppo"];

    useEffect(() => {
         if(DataSmartphone.includes(link)){
                    setLink("dataPhone_Smartphone");

         } else {
                setLink("dataPhone_Smartphone");
         }

          
},[links])

useEffect(() => {   
    if(!links){
        return;
    }
    const FetchAPI = async() => {
       
        const URL = `/Phonedetails/${links}/${encodeURIComponent(link)}.json`; 
        console.log(URL);
      
         
        try {
                const data = await axiosClient.get(URL);  // cách 1: sd lính gác cổng 
                // const Requests = await fetch(URL);     // cách 2 : sử dụng fetchapi
                // const data = await Requests.json();  // trả về mảng dữ liệu object 
                 // hàm find sẽ xử lý và trả về phần tử đầu tiên khi thỏa điều kiện 
                const handledata = data.find((data) => data.id === parseFloat(id))
                 setData(handledata);          
                    
       } catch {
                 alert("Lỗi lấy data");    
                    }
         finally{
                    setLoading(false);
        }   
    }
    FetchAPI();
},[link,id,links])
                    return [data,loading];  //trả về một mảng 
                   // custom hook trả về data và trang thái loading 
  // ở đây trả về dữ liệu 1 sản phẩm được chon thôi 
}

export default useHandledetailApi;
