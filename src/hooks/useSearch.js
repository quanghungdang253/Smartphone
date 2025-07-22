


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
