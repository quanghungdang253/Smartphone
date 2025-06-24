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
;
