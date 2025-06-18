// import { useEffect, useState } from "react";
// const getCurrentUserFromLocal = () => {
//   if (typeof window !== "undefined" && window.localStorage) {
//     try {
//       const item = localStorage.getItem("currentUser");
//       return item ? JSON.parse(item) : null;
//     } catch (error) {
//       console.error("Lỗi đọc localStorage:", error);
//       return null;
//     }
//   }
//   return null;
// };


// function useStatusUser(datas, refreshFlag = 0){
// const [data , setData] = useState(() => 
//   getCurrentUserFromLocal()
//         // let getData = localStorage.getItem("currentUser");
         
//         // return JSON.parse(getData);
// )
// console.log(datas);
// console.log(data);

//  useEffect(() => {
//     try {
//       if (!data) {
//         let cloneData = localStorage.getItem("currentUser");
      
//         if (cloneData) {
//           setData(JSON.parse(cloneData));
//         } else {
//           setData(null); // ✅ Nếu không còn localStorage thì phải reset data
//         }
//       } else {
//         localStorage.setItem("currentUser", JSON.stringify(data));
//         setData(data);
//       }
//     } catch {
//       setData(null);
//     }
//   }, [datas, refreshFlag]);

//     return [data];
// }

// export default useStatusUser;

import { useEffect, useState } from "react";

// ✅ Hàm đọc localStorage an toàn
const getCurrentUserFromLocal = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const item = localStorage.getItem("currentUser");
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Lỗi đọc localStorage:", error);
      return null;
    }
  }
  return null;
};

// ✅ Custom Hook
function useStatusUser(datas, refreshFlag = 0) {
  const [data, setData] = useState(() => getCurrentUserFromLocal());

  useEffect(() => {
    try {
      const storedData = getCurrentUserFromLocal();

      if (storedData) {
        setData(storedData);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật dữ liệu từ localStorage:", error);
      setData(null);
    }
  }, [datas, refreshFlag]);

  // ✅ Đồng bộ localStorage khi data thay đổi
  useEffect(() => {
    try {
      if (data) {
        localStorage.setItem("currentUser", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Lỗi khi lưu vào localStorage:", error);
    }
  }, [data]);

  return [data];
}

export default useStatusUser;
