import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, sendFormData, fetchFormData, resetForm } from '../features/form/formSlice';

const FormComponent = () => {
  const dispatch = useDispatch();
  const { formData, status } = useSelector((state) => state.form);

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(sendFormData(formData));
    dispatch(resetForm());
    dispatch(fetchFormData()); // Refresh dữ liệu
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        key !== 'option' ? (
          <div key={key}>
            <label>{key}:</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ) : null
      ))}
 
      <div>
        <label>Option:</label>
        <select name="option" value={formData.option} onChange={handleChange} required>
          <option value="">--Chọn--</option>
          <option value="option1">Lựa chọn 1</option>
          <option value="option2">Lựa chọn 2</option>
          <option value="option3">Lựa chọn 3</option>
        </select>
      </div>

      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Đang gửi...' : 'Gửi dữ liệu'}
      </button>
    </form>
  );
};

export default FormComponent;
