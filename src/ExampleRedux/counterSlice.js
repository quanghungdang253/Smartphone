import React from "react";
// thực hiện import thư viện tạo reducer với action 
// redux là một thư viện quản lý trạng thái toàn bộ ứng dụng một cách tập trung và có thể đoán trước được 
// redux hoạt động dựa trên 3 nguyên tắc  
// 1 .  tất các các state của một ứng dụng được lưu ở một store duy nhất 
// 2 . không được sữa trực tiếp state mà thông qua action 
// 3 . 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "", // tên của slide hay tên mà phần bạn đang quản lý 
    initialState: {value: 0},
    
})