// import axiosClient from "./axiosClient"; // thêm component axiosClient vào 

// const categoryApi = {
//      // getAll : là lấy tất cả 
//      getAll(params) {    // khai báo phương thức trong đối tượng hoặc class ta không cần từ khóa function 
//                const url = '/posts'; // tự động nối url với  baseURL
//                return axiosClient.get(url, {params: params})  // trả về dữ liệu 
//                                              // viết tắt : {params} do key và value giống nhau 
//      }
//      // bất kì enpointer nào khi thêm  một phương thức như get post sẽ tự động nối  baseURL vào 
//      ,
//      // lấy từng sản phẩm 
//      get(id) {
//      //sử dụng template để nhúng biến và biểu thức vào trong một chuỗi 
//      // ` chuỗi ${biến} ` biến và chuỗi được đặt trong dấu backtick ``
//           const url = `/posts/${id}`
//           return axiosClient.get(url)
//      },
//      add(data) {
//              const url = `/posts`;
//              return axiosClient.post(url, data)  
//      },
//       update(data){
//           const url = `/posts/${data.id}`;
//           return axiosClient.patch(url, data);

//       },
//       remove(id) {
//           const url = `/posts/${id}`;
//           return axiosClient.delete(url);
//       }

// };
 
// export default categoryApi;

import React, { useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom';
import axiosClient from './axiosClient';
function CategoryApi(props) {
    const [prestate, Setstate] = useState([])
    const params = useParams();
    const id = params.id;
    const link = params.link;
    useEffect(() => {
        const fetchapiAsync = async() => {
       
                const fetch = await axiosClient.get(`/${link}.json`) // lấy dữ liệu json 
                 const foundproduct = fetch.find((item) => item.id === parseFloat(id) )     // ở đây find sẽ duyệt qua từng phần tử trong mảng và trả về phần tử đầu tiên nếu thỏa điều kiện 
                Setstate(foundproduct);    
    }
    fetchapiAsync();
    },[id, link])
   

    return (
        <div>
         
                       <div key={prestate.id}>
                                <h1> Tên điện thoại : {prestate.name}</h1>
                               
                                <p>  {prestate.description}</p>

                       </div> 
              
        </div>
    );
}

export default CategoryApi;