
// // xử lý hiển thị thông tin chi tiết điện thoại 

import { useEffect, useState } from "react";
import axiosClient from "./axiosClient";
import componentEnpoint from "../Components/Common/componentEnpoint";

function useHandledetailApi(link,id) {   // xử lý hiển thị thông tin chi tiết điên thoại
const [links, setLink] = useState("");
const [loading, setLoading] = useState(true);
const [data,setData] = useState(null);
const [addData , setAddData] = useState(null);

let DataSmartphone = ["datasamsung","datavivo","dataPhone","dataOppo"];

    useEffect(() => {
         if(DataSmartphone.includes(link)){
                    setLink("dataPhone_Smartphone");

         } else {
                setLink("dataPhone_Smartphone");
         }

          
},[link])

useEffect(() => {
     
    const fetchData = async() => {
              if(!link) {
                alert("chưa có enpoint");
                  const dataMap = {
                        datasamsung: () => import('../../src/Components/Pages/Home/dataProduct/Samsung.json')
                  }
                if(dataMap[link]) {
                   const getdata = dataMap[link];
                  
                }
                   
              }
              
             
    }
fetchData();
},[link])

useEffect(() => {   
    if(!links){
        return;
    }
    const FetchAPI = async() => {
        let index = componentEnpoint;
        console.log(index);
        console.log("chỉ số là là : " +index);
        const URL = `/Phonedetails/${links}/${encodeURIComponent(link)}.json`; 
     
      
         
        try { 
            let data = null;
               if(link) {
                         data  =  await axiosClient.get(URL);   
               } else {
                    data = addData[0];
                   
         }
         console.log( "dữ liệu sau khi lấy được "+data);
                const handledata = data.find((data) => data.id === parseFloat(id))  // tìm và trả về phần tử đầu tiên 

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


// import { useEffect, useState } from "react";
// import axiosClient from "./axiosClient";
// import componentEnpoint from "../Components/Common/componentEnpoint";

// function useHandledetailApi(link, id) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [resolvedLink, setResolvedLink] = useState("");

//   // Danh sách các danh mục điện thoại
//   const DataSmartphone = ["datasamsung", "datavivo", "dataPhone", "dataOppo"];

//   // Xác định link phù hợp
//   useEffect(() => {
//     if (DataSmartphone.includes(link)) {
//          setResolvedLink("dataPhone_Smartphone");
//     } else {
//          setResolvedLink(link);
//     }
//   }, [link]);

//   // Tải dữ liệu từ file JSON nếu cần
//   useEffect(() => {
//     const fetchData = async () => {
    
//       const dataMap = {
//             datasamsung: () => import("../../src/Components/Pages/Home/dataProduct/Samsung.json"),
//             datavivo: () => import("../../src/Components/Pages/Home/dataProduct/vivo.json"),
//             dataPhone: () => import("../../src/Components/Pages/Home/dataProduct/dataPhone.json"),
     
//       };
     
//       if(!link){
//         if (dataMap[link]) {
//           alert("đã có dữ liệu ");
//           try {
//             const jsonData = await dataMap[link]();
//             setData(jsonData.default);
          
            
//           } catch (error) {
//             console.error("Lỗi khi tải dữ liệu JSON:", error);
//           }
//         }
//       }
  
     
//     };

//     fetchData();
//   }, [link]);

//   // Fetch API để lấy thông tin chi tiết điện thoại
//   useEffect(() => {
//     if (!resolvedLink || !id) return;

//     const fetchPhoneDetails = async () => {
//       setLoading(true);
//       try {
//         const URL = `/Phonedetails/${resolvedLink}/${encodeURIComponent(link)}.json`;
       

//         let responseData;
//         if (link) {
//                responseData = await axiosClient.get(URL);
//         } else {
//                responseData = data;
//         }

//         if (Array.isArray(responseData)) {
//           const selectedPhone = responseData.find((item) => item.id === parseFloat(id));
//           setData(selectedPhone);
//         } else {
//           console.warn("Dữ liệu không phải là một mảng:", responseData);
//         }
//       } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu từ API:", error);
//         alert("Lỗi lấy dữ liệu!");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPhoneDetails();
//   }, [resolvedLink, id, data]);

//   return [data, loading];
// }

// export default useHandledetailApi;
