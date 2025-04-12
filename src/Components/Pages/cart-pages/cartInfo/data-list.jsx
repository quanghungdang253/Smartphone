import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../features/form/formSlice';

const DataList = () => {
  const dispatch = useDispatch();
  const { dataList, status } = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(fetchFormData());
  }, [dispatch]);

  return (
    <div>
      <h2>Dữ liệu đã gửi:</h2>
      {status === 'loading' && <p>Đang tải...</p>}
      {status === 'failed' && <p>Lỗi tải dữ liệu!</p>}
      {dataList.map((item, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', margin: '5px 0' }}>
          <p><strong>{item.name}</strong> - {item.email} - {item.option}</p>
        </div>
      ))}
    </div>
  );
};

export default DataList;
