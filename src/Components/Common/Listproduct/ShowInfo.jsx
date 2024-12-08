import React, { useEffect, useState } from 'react';
import useHandledetailApi from '../../../Api/useHandledetailPhone';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';
import useHandleApi from '../../../Api/useHandleApi';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet-async';
import { set } from 'nprogress';
function ShowInfo(props) {
                let namephone = props.namephone;
                let enpoints = props.enpoint;
                const [link,setLink] = useState("");
            

    if (!namephone.data) {
         <Loading/>; // Kiểm tra namephone.data nếu namephone có dữ liệu
    } else {
        console.log('Dữ liệu không có hoặc chưa tải xong');
    }
const [loading, setLoading] = useState(true);
useEffect(() => {
            if(namephone){
                        setLoading(false);
            }
},[namephone])
const [enpoint, setEnpoint] = useState('');
   useEffect(() => {
            switch(enpoints){
                    case "samsung":
                             setEnpoint('datasamsung');
                             break;
                     case"vivo":
                            setEnpoint('datavivo');
                
                     default:{
                            setEnpoint('dataPhone');
                            break;
                     }         
            }
   },[enpoints])

   if (  !namephone.data) {
    return <Loading />;
}
    return (
        <Wrapper>
                     <Helmet>
                         {enpoints && ( <title> {`Điện thoại ${enpoints} - Hùng Store`}   </title>)} 
                            
                     </Helmet>
        <ShowPhone>
         {/* ở đây mình tiến hành kt trước vì khi hook gọi api thì data chưa trả về ngay nếu k kiểm tra dẫn đến giá trị null   */}
        
            {namephone && namephone.data && namephone.data.length > 0 ? (
                namephone.data.map((List) => (
                 
                    <div key={List.id} className='Showphone__Info'>
                        <Link to={`/Detail/${enpoint}/${List.id}`}>
                            <Negotiate>
                                <span> Giảm giá: {List.discount} </span>
                                <span> Trả góp: {List.installment} </span>
                            </Negotiate>
                            <Image>
                                <img src={List.image} alt={List.titles} />
                            </Image>
                            <h2 className='Showphone__title'> {List.titles} </h2>
                         
                        <div className='price_up_down'>
                            <h3 className='price '>{List.price}</h3>
                            <h3 className='pricedown'> {List.priceDown} </h3>
                        </div>
                            <h3 className='title text'> {List.title}</h3>
                            <p 
                                className='text'>  Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng                                     
                            </p>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </ShowPhone>
    </Wrapper>

)
}
const Wrapper = styled.div`
padding-top:30px;
          margin: 0% 7% 0% 7%;
          background-color:white;
`
const ShowPhone = styled.div `
        display: grid;
        grid-template-columns: 20% repeat(4, 20%);
        /* margin: 0px 7% 0% 7%; */
        grid-row-gap: 1rem;
       padding-left:16px;

// =================================phần chung ======================================
.text {
   
    background-color: #f3f4f6;
    border-radius: 1rem;
    font-weight: 500;
    font-size: 13px;
}
.title {
        color: black;
        font-size: 16px;
    
}
.price {
    font-size: 17px;
    color: red;
    font-weight: 700;

}
.pricedown {
      text-decoration: line-through;
}
.price_up_down{
        display: flex;
        justify-content: space-around;
}


//===================================================================================

.Showphone__Info {
      padding: 1rem 1rem;
      width: 90%;
      cursor: pointer;
      background-color: white;
      border-radius: 2rem;
      box-shadow: 0 2px 3px black;
                  /* 1px 0px 2px black; */
      
}

.Showphone__Info:hover {
     transform: translateY(-5px);
     transition: all ease 0.5s;
}
.Showphone__Info span {

    border: 1px solid black;
    font-weight:600;
    background:#ed6040;
    color: white;
    height:1.4rem;
    width: 5rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    font-size:0.7rem;
    text-align: center;

}
.Showphone__Info a {
text-decoration: none;
color: black;
display: grid;
gap: 12px;
}
.Showphone__title {
    font-size:1.1rem;
    font-weight:700;

}

img {
        width:100%;
}
`
const Negotiate  = styled.div `
        display: flex;
        grid-column-gap: 2.5em;

`
const Image = styled.div `
    width: 75%;
    margin-left: 1.5em;
    display: flex;
    justify-content:center;

`
export default ShowInfo;


