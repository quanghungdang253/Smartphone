
// // xử lý hiển thị thông tin chi tiết điện thoại 

import { useEffect, useState } from "react";
import axiosClient from "./axiosClient";
import componentEnpoint from "../Components/Common/componentEnpoint";

function useHandledetailApi(link,id) {   // xử lý hiển thị thông tin chi tiết điên thoại
const [links, setLink] = useState("");
const [loading, setLoading] = useState(true);
const [data,setData] = useState(null);
const [addData , setAddData] = useState(null);

let DataSmartphone = ["dataSamsung","dataVivo","dataPhone","dataOppo","dataIphone"];
let dataClock = ["dataCasio", "dataCitizen","dataFrederique","dataG-Shock","dataOrient","dataTissot","dataTitan","dataTommy"];
let dataListProduct = ["Đồ gia dụng","Loa","Laptop","Tai nghe","Tivi"];
let DataSaleHome = ["saleProduct1","saleProduct2","saleProduct3","saleProduct4","saleProduct5","saleProduct6","saleProduct7","saleProduct8"];
const DataSaleProductHome_1 = ["saleProductHomeA_0", "saleProductHomeA_1","saleProductHomeA_2","saleProductHomeA_3","saleProductHomeA_4","saleProductHomeA_5","saleProductHomeA_6","saleProductHomeA_7"];
const DataSaleProductHome_2 = ["saleProductHomeB_0", "saleProductHomeB_1", "saleProductHomeB_2", "saleProductHomeB_3","saleProductHomeB_4","saleProductHomeB_5","saleProductHomeB_6","saleProductHomeB_7","saleProductHomeB_8","saleProductHomeB_9","saleProductHomeB_10"]
const DataSaleProductHome_3 = ["saleProductHomeC_0", "saleProductHomeC_1", "saleProductHomeC_2", "saleProductHomeC_3","saleProductHomeC_4","saleProductHomeC_5","saleProductHomeC_6","saleProductHomeC_7","saleProductHomeC_8","saleProductHomeC_9","saleProductHomeC_10"];
const dataComputer = ["dataApple","dataAsus","dataHP","dataDell","dataMicrosoft","dataLenovo","dataAcer","dataMSI"];
const dataCamera = ["dataDahua","dataHikvision","dataTiandy","dataPanasonic","dataHuviron","dataEzviz","dataImou","dataUNV"];
const dataTelevision = ["dataSamsung4K","dataSony","dataXiamio","dataLG","dataLG","dataTCL","dataCasper","dataToshiba","dataHisense"]

    useEffect(() => {
         if(DataSmartphone.includes(link)){
                    setLink("dataPhoneSmartphone");

         }else if(DataSaleHome.includes(link)) {
                    setLink("dataSaleHome");
         }else if(DataSaleProductHome_1.includes(link)){
                    setLink("dataSaleHome_1");
         }else if(DataSaleProductHome_2.includes(link)) {
                    setLink("dataSaleHome_2");
         }else if(DataSaleProductHome_3.includes(link)){
                    setLink("dataSaleHome_3");
         }else if(dataListProduct.includes(link)) {
                    setLink("dataListProduct");
         }else if(dataClock.includes(link)){
                    setLink("dataClock");
         }else if(dataComputer.includes(link)){
                    setLink("dataComputer");
         }else if(dataCamera.includes(link)){
                    setLink("dataCamera");
         }else if(dataTelevision.includes(link)){
                 setLink("dataTelevision");
         }
          
},[link])
useEffect(() => {  
    if(!links){
        return;
    }
    const FetchAPI = async() => {
        let index = componentEnpoint;
  

      
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
