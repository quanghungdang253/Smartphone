import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// Thunk gửi dữ liệu






export const submitInfoClient = createAsyncThunk(
  'infoClient/submitInfoClient',
  async (formData) => {
    const response = await axios.post('https://hungserver2.vercel.app/addUser', formData);
    return response.data;
  }
);

// Thunk lấy dữ liệu
export const fetchInfoClient = createAsyncThunk(
  'infoClient/fetchInfoClient',
  async () => {
    const response = await axios.get('https://hungserver2.vercel.app/getUser');
    return response.data;
  }
);

const infoClientSlice = createSlice({
  name: 'infoClient',
  initialState: {
    value: {
      fullname: "",
      email: "",
      phoneNumber: "",
      HouseAddress: "",
      province: "",
      district: "",
      address: "",
      note: "",
      gender: "",
      payment: "",
    },
    status: 'idle',
    list: [], // để chứa dữ liệu lấy về
  },
  reducers: {
    updateInfoClient: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // Gửi dữ liệu
      .addCase(submitInfoClient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitInfoClient.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitInfoClient.rejected, (state) => {
        state.status = 'failed';
      })

      // Lấy dữ liệu
      .addCase(fetchInfoClient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInfoClient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload; // lưu danh sách client
      })
      .addCase(fetchInfoClient.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { updateInfoClient } = infoClientSlice.actions;
export default infoClientSlice.reducer;
