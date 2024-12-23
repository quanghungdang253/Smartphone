// import React, { useEffect } from "react";
// import { useState } from "react";
// import axiosClient from "../Api/axiosClient";

// const useSearch = () => {
//     let url = '/Searchdata/categories.json';
//     const [loading,setLoading] = useState(false);   // quản lý trang thái loading
//     const [data,setData] = useState([]);            // // thiết lập dữ liệu 
//     const [query , setQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);

//         const FetchData = async() => {  // thiết lập hàm xử lý lấy dữ liệu 
//                         try {
//                             let data = await axiosClient(url);
//                                 setData(data);
//                                 setLoading(true);
//                                 console.log(data);
//                         }
//                         catch(error) {
//                                     console.log(" Lỗi " +error);
//                         }
                           
//                     }
                  
//         const HandleEvent = () => {
//                 if(!loading) {
//                         FetchData(); 
//                 }
//         }

//         const HandleInput = (event) => {  
//                 const value = event.target.value;
//                 setQuery(value);
//         }

//         const handleSearch  = () => {
//                 if(query.trim() === ''){
//                         setQuery([]);    
//             } else {
//                 let Handledata = data.flatMap((listProduct) => {
//                         return  listProduct.brands.flatMap((list) => {
//                            return     list.products.filter(product => {
//                                         product.name.toLowerCase().includes(query.toLowerCase())
//                                 })
//                                 .map((product) => ({
//                                         ...product,
//                                         category: listProduct.category,
//                                         brand: list.brand
//                                     }))
//                         });
//                 });
               
//              setSuggestions(Handledata);  // trả về mảng nhưng phần tử khớp 

//             }     
//         }    
//                 //1. loại bỏ hết khoảng trắng    
        

//         return {
//             query,
//             suggestions,
//             HandleEvent,
//             HandleInput,
//             handleSearch
          
//         }


// }
// export default useSearch;



// import { useState, useEffect } from "react";
// import axiosClient from "../Api/axiosClient";

// const useSearch = () => {
//     const url = '/Searchdata/categories.json'; // Đường dẫn API
//     const [loading, setLoading] = useState(false);  // Quản lý trạng thái loading
//     const [data, setData] = useState([]);           // Lưu trữ dữ liệu nhận được từ API
//     const [query, setQuery] = useState('');         // Từ khóa tìm kiếm
//     const [suggestions, setSuggestions] = useState([]); // Lưu trữ các gợi ý tìm kiếm

//     // Hàm xử lý lấy dữ liệu từ API
//     const FetchData = async () => {
//         setLoading(true); // Đặt trạng thái loading là true
//         try {
//             const result = await axiosClient(url);
//             setData(result);  // Lưu dữ liệu vào state
//             setLoading(true); // Đặt trạng thái loading là false khi nhận được dữ liệu
//             console.log(result);
//         } catch (error) {
//             console.log("Lỗi khi lấy dữ liệu: ", error);
//             setLoading(false); // Đặt trạng thái loading là false nếu có lỗi
//         }
//     };

//     // Hàm gọi khi input có sự thay đổi
//     const HandleInput = (event) => {
//         const value = event.target.value;
//         setQuery(value); // Cập nhật giá trị từ khóa tìm kiếm
//     };

//     // Hàm gọi khi người dùng bắt đầu tìm kiếm
//     const handleSearch = () => {
//         if (query.trim() === '') {
//             setSuggestions([]); // Nếu không có từ khóa tìm kiếm, xóa gợi ý
//         } else {
//             // Tìm kiếm các sản phẩm khớp với từ khóa
//             const filteredData = data.flatMap((category) =>
//                 category.brands.flatMap((brand) =>
//                     brand.products
//                         .filter((product) =>
//                             product.name.toLowerCase().includes(query.toLowerCase())
//                         )
//                         .map((product) => ({
//                             ...product,
//                             category: category.categories,
//                             brand: brand.brands
//                         }))
//                 )
//             );
//             setSuggestions(filteredData); // Cập nhật gợi ý tìm kiếm
//         }
//     };

//     // Hàm gọi khi input được focus (tạo sự kiện khi focus vào ô tìm kiếm)
//     const HandleEvent = () => {
//         if (!loading && data.length === 0) {
//             FetchData(); // Lấy dữ liệu khi focus vào ô tìm kiếm
//         }
//     };

//     // Chạy FetchData khi component mount
//     useEffect(() => {
//         if (data.length === 0) {
//             FetchData(); // Lấy dữ liệu nếu chưa có
//         }
//     }, []);

//     return {
//         query,
//         suggestions,
//         HandleEvent,
//         HandleInput,
//         handleSearch,
//         loading
//     };
// };

// export default useSearch;


import { useState, useEffect } from "react";
import axiosClient from "../Api/axiosClient";

const useSearch = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const FetchData = async () => {
        setLoading(true); // Đặt trạng thái loading là true khi bắt đầu lấy dữ liệu
        try {
            const result = await axiosClient('/Searchdata/categories.json'); // API lấy dữ liệu
            setData(result); // Lưu dữ liệu vào state
            setLoading(false); // Đặt trạng thái loading là false khi nhận được dữ liệu
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
            setLoading(false); // Đặt trạng thái loading là false nếu có lỗi
        }
    };

    useEffect(() => {
        FetchData();
    }, []); // Gọi FetchData khi component mount

    return {
        data,
        loading,
    };
};

export default useSearch;
