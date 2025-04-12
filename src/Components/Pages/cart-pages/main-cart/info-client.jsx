import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './info-client.module.scss';
import dataProvince from './data/dataProvince.json';
import Loading from '../../../Common/components/Loading';
import { Ovals } from '../../../Common/components/Loading';
import { ClipLoader } from 'react-spinners';
import { updateInfoClient, submitInfoClient } from '../../../../features/cart/cartApi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { set } from 'nprogress';

function InfoClient({Sum}) {
  const dispatch = useDispatch();
  const [selectedProvince, setSelectedProvince] = useState(null);
  const status = useSelector(state => state.infoClient.status);
 const [loading , setLoading] = useState(false);

  useEffect(() => {
    if (status === 'loading') {
         setLoading(true);
      } else {
        setLoading(false);
      }
    if (status === 'succeeded') {
      Swal.fire({
        icon: 'success',
        title: 'Đặt hàng thành công!',
        text: 'Thông tin đã được gửi.',
      });
    // ;                     dispatch(resetInfoClient())
    } 
    else if (status === 'failed') {
        Swal.fire({
          icon: 'error',
          title: 'Thất bại',
          text: 'Gửi thông tin thất bại.',
        });
      }
    
  }, [status, dispatch]);




  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    address: "",
    province: "",
    district: "",
    note: "",
    gender: "",
    FormOfPayment: "",
    houseNumber: "",
    brothersAndsisters: "",
    nameLogin: "",
    passWord: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    dispatch(updateInfoClient({ [name]: value }));
  };

  const handleProvinceChange = (e) => {
    const selectedCode = e.target.value;
    const province = dataProvince.find(item => item.code === selectedCode);
    setSelectedProvince(province);
    const provinceName = province?.name || "";

    setFormData(prev => ({ ...prev, province: provinceName, district: "" }));
    dispatch(updateInfoClient({ province: provinceName }));
  };

  const handleDistrictChange = (e) => {
    const district = selectedProvince?.districts.find(d => d.code === e.target.value);
    const districtName = district?.name || "";

    setFormData(prev => ({ ...prev, district: districtName }));
    dispatch(updateInfoClient({ district: districtName }));
  };

  const handleSubmit = () => {
    console.log("Form Data gửi lên:", formData);
    dispatch(submitInfoClient(formData));
  };

  return (
    <>  
    {loading ? (
     <div style={{position: 'absolute'}}>
        <Ovals/>
        </div>
    ) : (

        <div className={styles.mainInfo}>
    
    
    <h1 className={styles.name}>THÔNG TIN NGƯỜI MUA</h1>

    <select className={styles.option} name="gender" onChange={handleChange} value={formData.gender}>
      <option value="">Giới tính</option>
      <option value="Anh">Anh</option>
      <option value="Chị">Chị</option>
    </select>

    <div className={styles.columnInfo}>
      <div className={`${styles.columnInfo_one} ${styles.column}`}>
        <input type="text" name='fullname' placeholder="Họ tên" value={formData.fullname} onChange={handleChange} />
        <input type="text" name='phoneNumber' placeholder="Số điện thoại" value={formData.phoneNumber} onChange={handleChange} />
        <input type="text" name='email' placeholder="Email" value={formData.email} onChange={handleChange} />
      
      </div>

      <div className={`${styles.columnInfo_two} ${styles.column}`}>
       
      
       
       
        <input type="text" name='houseNumber' placeholder="Số nhà Tên đường" value={formData.houseNumber} onChange={handleChange} />
        <input type="text" name='address' placeholder="Địa chỉ cụ thể" value={formData.address} onChange={handleChange} />
        <select className={styles.option} onChange={handleProvinceChange}>
          <option value="">Chọn tỉnh/thành phố</option>
          {dataProvince.map(prov => (
            <option key={prov.code} value={prov.code}>{prov.name}</option>
          ))}
        </select>
        {selectedProvince && (
          <select className={styles.option} onChange={handleDistrictChange}>
            <option value="">Chọn quận/huyện</option>
            {selectedProvince.districts.map(dist => (
              <option key={dist.code} value={dist.code}>{dist.name}</option>
            ))}
          </select>
        )}
      </div>
    </div>
    
    <div className={`${styles.columnInfo_three}`}>  
        <input type="text" name='brothersAndsisters' placeholder="Anh/Chị/Em trong gia đình" value={formData.brothersAndsisters} onChange={handleChange} />
        <textarea
             className={styles.note}
            name="note"
            placeholder="Ghi chú thêm"
                value={formData.note}
                onChange={handleChange}
    ></textarea>
     <select className={`${styles.option} ${styles.optionPay}`} name="FormOfPayment" onChange={handleChange} value={formData.FormOfPayment}>
      <option value="">Hình thức thanh toán</option>
      <option value="Thanh toán khi nhận hàng">Thanh toán khi nhận hàng</option>
      <option value="Chuyển khoản">Chuyển khoản</option>
    </select>
    <button onClick={handleSubmit} className={styles.btn}>Đặt Hàng </button>
    <h1> Tổng tiền : <big>  {Sum} </big>  </h1>
    </div>

   

    {/* <input type="text" name="nameLogin" placeholder="Tên đăng nhập" value={formData.nameLogin} onChange={handleChange} />
    <input type="password" name="passWord" placeholder="Mật khẩu" value={formData.passWord} onChange={handleChange} /> */}

   
  </div>


    )}
    
    </>
  );
}

export default InfoClient;
