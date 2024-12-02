
// // xử lý hiển thị thông tin chi tiết điện thoại 

import { useEffect, useState } from "react";
import axiosClient from "./axiosClient";

function useHandledetailApi(link,id) {   // xử lý hiển thị thông tin chi tiết điên thoại
console.log(link);
    const URL = `/Phonedetails/${link}.json`;   // lấy 
    console.log(URL);
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState(null);
  
  
useEffect(() => {   
    const FetchAPI = async() => {
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
},[link,id])
                    return [data,loading];  //trả về một mảng 
                   // custom hook trả về data và trang thái loading 
  // ở đây trả về dữ liệu 1 sản phẩm được chon thôi 
}

export default useHandledetailApi;

// import { useEffect, useState } from "react";

// function useHandledetailApi(link, id) {   // xử lý hiển thị thông tin chi tiết điện thoại

//     console.log("Link:", link);
//     const URL = `/${link}.json`;   // Lấy đường dẫn tới dữ liệu

//     // Khai báo state cho loading và data
//     const [loading, setLoading] = useState(true); // Bắt đầu là đang tải
//     const [data, setData] = useState(null); // Ban đầu data là null

//     useEffect(() => {   
//         const FetchAPI = async () => {
//             try {
//                 setLoading(true); // Đánh dấu bắt đầu việc tải dữ liệu
//                 const response = await fetch(URL); // Gửi yêu cầu lấy dữ liệu
//                 const fetchedData = await response.json();  // Dữ liệu trả về là mảng JSON

//                 // Tìm sản phẩm có id trùng với id trong URL
//                 const handledata = fetchedData.find((item) => item.id === parseFloat(id));

//                 if (handledata) {
//                     setData(handledata); // Cập nhật dữ liệu nếu tìm thấy
//                 } else {
//                     alert("Không tìm thấy sản phẩm");
//                 }
//             } catch (error) {
//                 alert("Lỗi khi lấy dữ liệu: " + error.message); // Hiển thị lỗi nếu không thể lấy dữ liệu
//             } finally {
//                 setLoading(false); // Đánh dấu kết thúc việc tải dữ liệu
//             }
//         };

//         FetchAPI(); // Gọi hàm FetchAPI khi hook được gọi

//     }, [link, id]);  // Lắng nghe sự thay đổi của link và id

//     return [data, loading]; // Trả về data và loading
// }

// export default useHandledetailApi;
