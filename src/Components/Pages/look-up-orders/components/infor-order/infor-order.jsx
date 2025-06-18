import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBackward,faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

function InforOrder({data}) {
    const [indexProduct , setIndexProduct] = useState(0);
    const [product , setProduct] = useState(null);
    const [dataDetail , setDataDetail] = useState(null);


    let  dataBtn = [
         {
            id: 0 , content: "Tất cả", data: data
         },
          {
            id: 1 , content: "Chờ xử lý", data: null
         },
          {
            id: 2 , content: "Đã xác nhận", data: data
         },
          {
            id: 3 , content: "Đang chuyển hàng", data: null
         },
          {
            id: 4 , content: "Đang giao hàng ", data: null
         },
          {
            id: 5 , content: "Đã hủy", data: null
         },
          {
            id: 6 , content: "Thành công", data: null
         }
    ]
 let flex = "flex justify-between";


useEffect(() => {
    let findProduct  = dataBtn.find(item => item.id === indexProduct);
    if(findProduct){
        setProduct(findProduct)
    }else {
         setProduct(null);
    }
},[indexProduct,data])


const resultMoney  = (downPrice , prePrice) => {
        const numberA = parseInt(downPrice.replace(/\./g, ""), 10);
        const numberB = parseInt(prePrice.replace(/\./g, ""),10);
        const result = numberB - numberA;
        return  result.toLocaleString("vi-VN");
}

    return (
        <div className='ml-4'>
        {!dataDetail ? (
                <div>
                     <div className='flex flex-wrap gap-4 mt-4
                     '> 
                {dataBtn.map((item) => (
                    <div 
                   
                        className="cursor-pointer border-cyan-300"
                        onClick={() => setIndexProduct(item.id)}
                    >
                        <h1 className={`p-2 rounded-lg border border-red-600  ${item.id === indexProduct ? 'bg-orange-300' : ""}`}>   {item.content}   </h1>
                    </div>
                ))}
            </div>
             <div className=' bg-white-200 shadow-2xl p-2 mt-[0rem]
             lg:p-10
             '>
            <h1 className='font-bold text-[18px] mb-2'> Lịch sử mua hàng </h1>
                {product?.data?.[1]?.dataProduct !== null ? (
                        <div className=''>   
                            {product?.data[1]?.dataProduct?.map((item,key) => (
                                
                                <div  
                                    className='flex gap-10 relative mb-4 p-6 rounded-2xl shadow-2xl cursor-pointer'
                                   onClick={() => setDataDetail(item)}
                                >
                               
                                    <img src={item.imgCart} alt="" className='w-[6rem] h-[6rem] lg:w-[8rem]' />
                                    <div className='w-[100%]'>
                                        <div className='flex gap-2 justify-between flex-col lg:flex-row '>  
                                                <h1 className='font-bold text-[14px]
                                                lg:text-[18px]
                                                '>  {item.title}   </h1>  
                                                <p className=' font-bold text-[12px]
                                                        lg:text-[14px]
                                                '>Ngày đặt:{product.data.date} </p> 
                                        </div>
                                            

                                            <p>  Giá: {item.price }  <span>  {item.total_original}   </span> </p>
                                            <p className='mt-2 mb-4 bg-green-300 inline-block pt-1 pb-1 pl-2 pr-2 text-[12px] font-bold rounded-xl'> Đã xuất VAT </p>
                                    </div>
                                    <p className='absolute bottom-0 right-0 p-2 bg-yellow-300 rounded-lg text-black  font-bold'> Xem chi tiết </p>
                                </div>
                            ))}


                        </div>
                ) : (
                    <h1> Rất tiếc, không tìm thấy đơn hàng nào phù hợp</h1>
                )}

            </div>

                </div>
        ) : (
            <div className='bg-white shadow-2xl p-8 rounded-3xl lg:w-[53em]'> 
                    <div 
                        onClick={() => setDataDetail(null) }
                        className='block bg-red-600 inline-block pt-1 pb-1 pl-4 pr-4 rounded-xl shadow-2xl text-white cursor-pointer'
                    >
                        <FontAwesomeIcon icon={faBackward} className='mr-4'/>
                         Quay lại 
                    
                    </div>
                    <div className='mt-2'>
                         <h1 className='font-bold text-[18px]'> Tổng quan </h1>
                       <div className="shadow-2xl p-4 relative">   
                      
                             <div className='flex flex-col justify-between 
                             lg:flex-row
                             
                             '>                    
                                <span> Ngày đặt hàng : {product.data[1].date}  </span>   
                                 <span className='bg-green-300 text-[12px] font-bold p-1 rounded-2xl '>  Đã đặt hàng  </span>
                             </div>    
                             <div className='flex flex-col
                             lg:flex-row
                             '>
                                <img src={dataDetail.imgCart} alt="" className='w-[8em]'/>

                                <div className=''>
                                        <h1 className='font-bold text-[18px]'> {dataDetail.title}</h1>
                                        <p> {dataDetail.price}  <span> {dataDetail.total_original}  </span> </p>
                                </div>
                                <div className='flex items-center relative bottom-0 right-0
                                lg:absolute
                                '>
                                        Số lượng: 
                                        <span > 1 </span>
                                        <div className='ml-4 border border-red p-2 rounded-xl bg-red-500'> Mua lại </div>
                                </div>
                             </div>
                       </div>
                       <div className='mt-[1rem] text-[14px] lg:flex'>
                            <div className=' lg:w-[27em]'>
                                <div className='bg-white shadow-2xl rounded-2xl p-4 mb-10 flex flex-col gap-2'>
                                    <h1 className='font-bold text-[14px] '> Thông tin khách hàng </h1>
                                    <p className={`${flex}`}> Họ và tên : <span className='font-bold'> {product.data[1].fullname}</span>  </p>
                                    <p  className={`${flex}`}> Số điện thoại : <span className='font-bold'> {product.data[1].phoneNumber}</span></p>
                                    <p  className={`${flex}`}> Địa chỉ : <span className='font-bold'> {product.data[1].province} </span></p>
                                    <p  className={`${flex}`}> Ghi chú : <span className='font-bold'>  {product.data[1].note} </span></p>
                                </div>
                                <hr />
                                <div className='bg-white shadow-2xl p-4 rounded-xl '>
                                      <h1 className='mb-[1rem] font-bold '> Thông tin hỗ trợ </h1>
                                     <div className='grid grid-cols-2 mt-3 rounded-3xl mb-3 '>  
                                             <div>   
                                                 <p>
                                                       <FontAwesomeIcon icon={faLocationDot} className='text-red-500 text-[12px]' />
                                                      <span className='text-black-500 font-bold text-[12px] lg:text-[14px]'> Địa chỉ cửa hàng </span>
                                                </p>
                                                <h1 className='w-[15rem] text-[12px] lg:text-[14px]'> 96/50/1/ Phạm đặng giảng Bình hưng hòa Quận Bình tân </h1>
                                            </div>
                                            <div className='bg-red-200 inline-block rounded-2xl h-[2rem] p-1 mt-16'>
                                                  <FontAwesomeIcon icon={faLocationDot} className='text-red-500'  />
                                                  <span className='text-[12px] lg:text-[14px]'> Chỉ đường </span>
                                             </div>
                                     </div>
                                     <hr />
                                     <div className='mt-3 grid grid-cols-2'>
                                    <div>   
                                        <p>
                                              <FontAwesomeIcon icon={faPhone} className='text-red-500' />
                                               <span className='font-bold text-[12px] lg:text-[14px]'> Số điện thoại  </span>
                                        </p>
                                                <h1 className='w-[15rem] text-[12px] lg:text-[14px]'> 03895542313</h1>
                                    </div>
                                    <div className='bg-red-200 inline-block rounded-2xl h-[2rem] p-1 mt-10'>
                                    <FontAwesomeIcon icon={faPhone}  className='text-red-500'/>
                                                  <span className='text-[12px]'> Liên hệ  </span>
                                    </div>
                                     </div>
                                </div>
                            </div>  
                            <div className='p-4 rounded-2xl flex flex-col gap-3 lg:w-[30em] shadow-2xl'>
                                <h1 className='text-[18px] font-bold'> Thông tin thanh toán </h1>
                                <h1 className='bg-slate-400 p-2'> Sản phẩm </h1>
                                <h1 className={`${flex}`}> Tên sản phẩm: <span  className='font-bold'>  {dataDetail.title} </span> </h1>
                                <p className={`${flex}`}> Số lượng :  <span className='font-bold'> 1 </span> </p>
                                <p className={`${flex}`}> giảm giá : <span className='font-bold'> 
                                        {resultMoney(dataDetail.price,dataDetail.total_original)}
                                </span></p>
                                <p className={`${flex}`}> Phí vân chuyển : <span className='font-bold'> Miễn phí </span></p>
                                <h2 className='bg-slate-400 p-2'> Thanh toán </h2>
                                <p className={`${flex}`}> Tổng số tiền : <span className='text-red-500 font-bold'> {dataDetail.price}</span>  </p>

                            
                                <p className={`${flex}`}> Tổng số tiền đã thanh toán  :  <br></br>   (đã bao gồm VAT và được làm tròn ) <span className='font-bold'> {dataDetail.price} </span></p>
                                <p className={`${flex}`}> Tổng số tiền còn lại :  <br /> (Cần phải thanh toán thêm )  <span className='text-red-500 font-bold'> 0đ </span>  </p>
                                

                            </div>
                       </div>
                    </div>
                

            </div>
        )}
           
           
        </div>
    );
}

export default InforOrder;