
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
