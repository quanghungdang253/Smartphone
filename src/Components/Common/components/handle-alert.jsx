import React from 'react';
import { Toast } from 'bootstrap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
function HandleAlert(props) {
  
        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Sản phẩm đã được thêm vào giỏ hàng.',
          confirmButtonText: 'Đóng',
          background: '#f8f9fa',
          iconColor: '#28a745', // Màu icon thành công (xanh lá)
          customClass: {
            popup: 'shadow-lg rounded',
          },
      html: '<a href="/Cart" style="color: #007bff;">Xem giỏ hàng</a>'
        });
      




   
}

export default HandleAlert;