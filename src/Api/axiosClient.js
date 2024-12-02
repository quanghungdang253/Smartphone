// cấu hình lính gác cổng axiosClient 
import axios from "axios";

const axiosClient = axios.create({  // tạo ra axiosClient
        baseURL: '/',
        headers: {
            "Content-Type": 'application/json',
              'Authorization': 'Bearer your_token'

        },
        timeout: 5000
})
axiosClient.interceptors.request.use(function(request){  // nhận vào hai tham số là res
            return request;

}, function(error){   // khi sử dụng axios sẽ tự trả về đối tượng error 
        return Promise.reject(error);
})

axiosClient.interceptors.response.use(function(response){
        return response.data;   // trả về dữ liệu 
}, function(error){
            if(error.response){
                        if(error.response.status === 404 ){
                                    alert("Lỗi 404 : Not Fount")
                                    return Promise.reject(error);
                            }
                            else if(error.response.status === 401) {
                                alert("Lỗi 401: Yêu cầu của Client k được phép truy cập vào tài nguyên. Do thiếu thông tin xác thực ")
                            }
                            else if(error.response.status === 400) {
                                alert("yêu cầu của CLient không hợp lệ ")
                            }
            }
            return Promise.reject(error);  // sử dụng catch() để bắt lỗi trong component khác 
})

export default axiosClient;

// import axios from "axios";

// // Tạo axiosClient với cấu hình cơ bản
// const axiosClient = axios.create({
//     baseURL: '/', // Cập nhật baseURL đúng với API của bạn
//     headers: {
//         "Content-Type": "application/json",
//         'Authorization': `Bearer ${localStorage.getItem('access_token')}`  // Lấy token từ localStorage hoặc từ môi trường
//     },
//     timeout: 5000,
// });

// // Cấu hình interceptors cho request và response
// axiosClient.interceptors.request.use(
//     function(request) {
//         // Có thể thêm logic xử lý trước khi gửi request
//         return request;
//     },
//     function(error) {
//         return Promise.reject(error);
//     }
// );

// axiosClient.interceptors.response.use(
//     function(response) {
//         return response.data;  // Trả về dữ liệu từ response
//     },
//     function(error) {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 404:
//                     alert("Lỗi 404: Không tìm thấy tài nguyên.");
//                     break;
//                 case 401:
//                     alert("Lỗi 401: Thiếu quyền truy cập.");
//                     break;
//                 case 400:
//                     alert("Lỗi 400: Yêu cầu không hợp lệ.");
//                     break;
//                 default:
//                     alert(`Có lỗi xảy ra: ${error.response.status}`);
//                     break;
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// export default axiosClient;
