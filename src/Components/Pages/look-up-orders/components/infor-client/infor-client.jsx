import React from 'react';

function InforClient({data}) {
    if(!data){
        return;
    }

    return (
        <div className=" w-[50em] bg-white  shadow-2xl rounded-sm p-2">
            <h1 className='p-2 rounded-2xl  text-[20px]'> Thông tin tài khoản </h1>
            <div className=' w-[30rem] h-[10rem] p-4 rounded-2xl bg-slate-100 '>
                    <h1 className='font-bold  mb-2 font-sans'> THÔNG TIN CÁ NHÂN </h1>
                    <p className='flex justify-between mb-2 '> Họ và tên: <span className='font-bold'>  {data[1].fullname} </span></p>
                    <p  className='flex gap-20 justify-between mb-2 '> Số điện thoại:  <span className='font-bold'> {data[1].phoneNumber} </span>   </p>
                    <p  className='flex gap-20 justify-between mb-2'> Địa chỉ: <span className='font-bold'> {data[1].province}  </span>  </p>
            </div>
            <div className='h-[10rem] bg-slate-100 rounded-2xl p-4 mt-10 w-[30rem]'>
                <h1 className='font-bold font-sans'> ĐỊA CHỈ NHẬN HÀNG </h1>
                    <div>
                            <h1> {data[1].district} {data[1].province}  </h1>
                    </div>
            </div>
        </div>
    );
}

export default InforClient;