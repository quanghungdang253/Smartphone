
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './show-protuct.module.scss';
import imgUser from '../../img/user.jpg'
import imgInfo from '../../img/imginfor.png';
import imgcart from '../../img/imgcart.jpg';
import InforOrder from '../infor-order/infor-order';
import InforClient from '../infor-client/infor-client';
import qr from '../../img/images.png';
import imgGoogleplay from '../../img/googlePlay.jpg';
import imgAppStore from '../../img/appStore.jpg';
import useStatusUser from '../../../../../hooks/use-status-user';
import { useNavigate } from 'react-router-dom';
function ShowProduct() {
  const navigate = useNavigate();
const[getData , setGetData] = useState(() => {
        let getDataLocal = localStorage.getItem("data");
        return JSON.parse(getDataLocal);
});


  const location = useLocation();
  const product = location.state?.product
  const [index , setIndex] = useState(0);
  useEffect(() => {
    window.scrollTo({
       top: 0,
       behavior:"smooth"
    })
       if(!product){
         let newData = localStorage.getItem("data");
            setGetData(JSON.parse(newData));
       }else {
            localStorage.setItem("data",JSON.stringify( product));
           setGetData(product);
       }
        
  },[product])
  const handleLogout = () => {
      localStorage.removeItem("currentUser");
        localStorage.removeItem("data");
        // let dataLocal = localStorage.getItem("data");
         localStorage.removeItem("value");
         window.dispatchEvent(new Event("user-status-changed"));
        navigate("/LookProduct")

  }


console.log("dữ liêu nhận được "+ getData);
console.log("dữ liệu product "+ product);
  return (
    <div className="
         mt-[11em]
      
         gap-[5em]
        
         sm:flex
         sm:flex-col
         lg:flex-row
         lg:ml-[7%]
         lg:mr-[7%]
        "
         
        >
      <div className='bg-slate-100 shadow-2xl pt-1 pl-2 pr-2 rounded-2xl' >   
         <div className="flex gap-6 items-center pt-2 pb-2 p-3  ">
              <img src={imgUser} alt="" className="w-[3rem]" />
              <div>
                  <h1 className='font-bold text-[18px]'>
                  Anh/Chị: 
                  {
                   getData && getData[1] ? (
                        getData[1].fullname
                    ) : (
                      product &&  product[1] ? product[1].fullname : "Không có dữ liệu"
                    )
                  }
                
                </h1>
              </div>
          </div>
        <div className='
          sm:bg-yellow-100 
              w-[20em]
              p-3 flex 
              gap-4
                    lg:flex-col
         
          
        '
          
         >
             <div 
              className={` ${index === 0 ? "bg-slate-300" : "hover:bg-slate-300"}  flex flex-col cursor-pointer  items-center justify-center p-2 rounded-xl text-[12px]
              sm:flex-col
              lg:flex-row
              lg:text-[16px]
              `
              
              }
              onClick={() => setIndex(0)}
              >
                 <img src={imgcart} alt="" className='w-10 mr-4' />
                 Đơn hàng đã mua
             </div>
             <div 
              className={`
              ${index === 1 ? "bg-slate-300" : "hover:bg-slate-300"}
                cursor-pointer
                text-center
                flex flex-col items-center justify-center
                text-[12px]
                p-2 rounded-xl
                sm:
                lg:text-[16px]
                lg:flex-row
                `
              }
              onClick={() => setIndex(1)}
              >
             <img src={imgInfo} alt="" className='w-10 mr-4' />
              Thông tin địa chỉ
             </div>
             <div className='bg-red-500 p-[1rem] rounded-lg text-center text-white font-bold cursor-pointer' onClick={() => handleLogout()} > Đăng xuất </div>
        </div>
        <div className='p-4 bg-yellow-100 rounded-2xl hidden
          lg:block
        '>
              <h1 className='font-bold'> Tổng điểm tích lũy : 0 điểm </h1>
              <h2 className='font-bold'> Tải app Quang Hùng Store Quà tặng Vip</h2>
              <div className='flex item-center  w-[20rem] mt-4'>
                    Tích và sử dụng điểm cho khách hàng thân thiết .
                    <img src={qr} alt="" className='w-[5rem]' />
              </div>
              <div className='flex items-center gap-10'>
                    <img src={imgAppStore} alt="" className='w-[8rem]' />
                    <img src={imgGoogleplay} alt=""  className='w-[9rem]'/>
              </div>

        </div>
    </div>

     <div>
        {index === 0 ? (
            <div>
                  <InforOrder data={getData}/>
            </div>
        ) : index === 1 ? (
             <div> 
             
                <InforClient data={getData}/>

             </div>
        ) : null}
     </div>
    </div>
  );
}

export default ShowProduct;


 {/* <span> Đơn hàng đã mua </span>
              <span> Từ  16/9/2024 - 16/6/2025  </span>

      {getData ? (
        <div>
          <div>
         
            Thông tin sản phẩm
          </div>
          <p>Tên: {getData[1]?.fullname}</p>
          <p>Số điện thoại: {getData[1]?.phoneNumber}</p>
        </div>
      ) : (
        <p>Không có dữ liệu</p>
      )} */}











// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from './show-protuct.module.scss';

// function ShowProduct() {
//   const [getData, setGetData] = useState(null);
//   const location = useLocation();
//   const product = location.state?.product;
    

//   useEffect(() => {
//   // localStorage.removeItem("data")
//     try {
//       if (!product) {
//         const newData = localStorage.getItem("data");
//         if (newData) {
//           setGetData(JSON.parse(newData));
//         }
//       } else {
//         localStorage.setItem("data", JSON.stringify(product));
//         setGetData(product);
//       }
//     } catch (error) {
//       console.error("Error parsing data:", error);
//       setGetData(null);
//     }
//   }, [product]);

//   return (
//     <div className={styles.mainProduct}>
//       {getData ? (
//         <div>
//           <h2>Thông tin sản phẩm</h2>
//           <p>Tên: {getData.fullname || getData[1]?.fullname}</p>
//           <p>Số điện thoại: {getData.phoneNumber || getData[1]?.phoneNumber}</p>
//         </div>
//       ) : (
//         <p>Không có dữ liệu</p>
//       )}
//     </div>
//   );
// }

// export default ShowProduct;

