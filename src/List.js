// import React from 'react';
// import { Link } from 'react-router-dom';

// function List() {
//   // Giả sử đây là dữ liệu danh sách điện thoại
//   const phones = [
//     { id: 1, name: 'iPhone 14', price: 1000 },
//     { id: 2, name: 'Samsung Galaxy S22', price: 900 },
//     { id: 3, name: 'Google Pixel 7', price: 850 },
//   ];

//   return (
//     <div>
//       <h1>Danh sách điện thoại</h1>
//       <ul>
//         {phones.map(phone => (
//           <li key={phone.id}>
//             {/* Link dẫn đến chi tiết điện thoại */}
//             <Link to={`/phone/${phone.id}`}>
//               {phone.name} - {phone.price} USD
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default List;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Phone = [
//       { id: 1, name: "Thông tin iPhone 7 plus",},
//       { id: 2, name: "Thông tin iPhone 8 plus",},
//       { id: 3, name: "Thông tin iPhone 9 plus",},
//       { id: 4, name: "Thông tin iPhone 10 plus"},
//       { id: 5, name: "Thông tin iPhone 11 plus"}
// ]


// function List(props) {
//   return (
//     <div>
//           <ul>
//               {Phone.map((phone) => (
//                    <li key={phone.id}>
//                           <Link to={`/Listphone/${phone.id}`}> {phone.name}  </Link>
//                    </li>

//               ))}
              
//           </ul>
//     </div>
//   );
// }

// export default List;


// bài tập về kĩ thuật Memoization trong reacjs

// bài 1 . tính giai thừa  sử dụng memoization để tối ưu hó hiệu suất 
function memozation(){
            const catche = {}; // tạo bộ nhớ đệm 

          return function factorial(n){
                    if(n in catche){  // kiểm tra xem n có trong bộ nhờ các che không 
                                console.log(  ` Lấy từ cache ${n}`);
                                return catche[n];  // nếu tồn tại trả về kết quả đã lưu 
                    }
          }
}

