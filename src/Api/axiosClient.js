// import axios from "axios";

// const axiosClient = axios.create({        // đây là úp pháp tạo 1 instance / instance giúp thiết lập cấu hình như baseURL , header, Content-Type, timeout
//     // Khi bạn sử dụng axios.create(), bạn có thể cung cấp cấu hình mặc định cho mọi yêu cầu gửi đi từ instance này. Điều này giúp bạn không cần phải cấu hình lại từng yêu cầu HTTP riêng biệt. // đây là cú pháp tạo ra 1 Axios instance để cấu hình cho mọi yêu cầu sẽ gửi đi .
//   baseURL:"https://jsonplaceholder.typicode.com/",  // đây là nơi định nghĩa mọi yêu cầu sẽ được tới 
//  headers: {
//     'Content-Type': 'application/json' // Content-Type : sẽ chỉ định kiểu dữ liệu sẽ được gửi đến server trong phần body 
//                                         // application/json: đây là kiểu dạng json . khi gửi server sẽ biết dữ liệu này dạng json 
//  },
//         timeout: 5000 // thiết lập thời gian chờ tối đa 5 giây 
// })
//   // tạo ra 1 intercepter response để can thiệp 


// // Add a request interceptor
// axiosClient.interceptors.request.use(function (config) {  // thêm 1 instance vào 
//     // Do something before request is sent
// console.log(config);
//     return config;
//   }, function (error) {
//     // Do something with request error
   
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// // ở đây interceptors sẽ xử lý dữ liệu phản hồi từ máy chủ trước khi đến phần xử lý chính của ứng dụng.
// // ví dụ: lỗi 400. interceptos sẽ xử lý lỗi và trả về thông báo hoặc điều hướng trang khác để tiếp tục 
// axiosClient.interceptors.response.use(function (response) {  // định nghĩa để xử lý logic khi máy chủ phản hồi 
//       return response.data;
//     // trả về data
//   }, function (error) {
   
//     return Promise.reject(error);
//   });

//   export default axiosClient;
// ==============================================================================
// import axios  from "axios";

// const axiosClient = axios.create({
//         headers: {
//             'Content-Type': 'application/json',
            
//         },
     
//         baseURL: '/',  // thể hiện đường dẫn gốc 
//         timeout: 5000
// })

// axiosClient.interceptors.request.use(function(request){  // gửi yêu cầu lên server 

//     return request;
// }, function(error){
//     alert("đã bị lỗi "+ error);
//     return Promise.reject(error);
// })
// axiosClient.interceptors.response.use(function(response){

//     return response.data; // trả về data

// }, function(error){
//         return Promise.reject(error);
// })



// export default axiosClient;
//========================================================================
import axios from "axios";




// thực hiện tạo lính gác cổng để xử lý mọi yêu cầu 
// ở đây ta tiến hành thiết lập cấu hình các yêu cầu http mục đích tái sủ dụng 
// 1. trước khi gửi yêu cầu lên server lính gác cổng sẽ thiết lập header
const axiosClient = axios.create({
        // 1. thêm header: ở đây header là thông tin bổ sung được gửi theo với yêu cầu 
        headers: {
                    'Content-Type': 'application/json', // thiết lập dữ liệu gửi đi ở dạng json 
                    'Authorization': 'Bearer your_token'  // Bearer token là phương thức phổ biến để xác thực api
        },
        baseURL: '/',   // ở đây baseURL là nợi định nghĩa url gốc. khi các yêu cầu được gửi 
        timeout: 5000

})
// ở đây interceptors cho phép can thiếp vào yêu cầu và thực hiện một số hđ như kt cấu hình , ghi log ,
// trước khi 1 yêu cầu http được gửi đi 
// + intercepter : giúp chặn lại các yêu cầu trước khi gửi đến server 

axiosClient.interceptors.request.use(function (request){  // nhận vào hai hàm làm hai tham số giống như Promise
    console.log(request);
            return request;
}, function(error){
           
            return Promise.reject(error);
}


)
axiosClient.interceptors.response.use(function (response){
            return response.data;
}, function(error) {
          const errors = new Error();
          errors.code = 404;
          console.log(errors.code);
         return Promise.reject(error);
})


          
export default axiosClient;

