import React, { useEffect, useState } from 'react';
import useHandledetailApi from '../../../Api/useHandledetailPhone';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';
import useHandleApi from '../../../Api/useHandleApi';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet-async';
import { useValue } from '../../../Context/Settings/Theme/ThemeContext';
function ShowInfo(props) {
     const { theme } = useValue();

    
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
        <Wrapper className={`Wrapper ${!theme ? 'Dark' : ''}`}>
                     <Helmet>
                         {enpoints && ( <title> {`Điện thoại ${enpoints} - Hùng Store`}   </title>)} 
                            
                     </Helmet>
        <ShowPhone className={theme ? 'Bright_1' : "Dark_1" }>
            {namephone && namephone.data && namephone.data.length > 0 ? (
                namephone.data.map((List) => (
                 
                    <div key={List.id} className={`Showphone__Info ${theme ? 'Color__Bright' : 'Color__Dark'}`}>
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
                        <div className='text'>  
                            <h3 className='text title '> {List.title}</h3>
                            <p 
                                className='text'>  Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng                                     
                            </p>
                        </div>
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
        //  ===================== phần thiết lập đổi màu nền ======================
        .Bright_1{
                    background-color:#EEEEEE;
        }
        .Dark_1{
                    background-color:#999999;
        }

        .Color__Bright{
                background-color: #FFFFFF
        }
        .Color__Dark {
                        background-color:black;
                        
        }


        //===========================================================




padding-top:30px;
          margin: 0% 7% 0% 7%;
         
`
const ShowPhone = styled.div `
        display: grid;
        grid-template-columns: 20% repeat(4, 20%);
        grid-row-gap: 1rem;
       padding-left:16px;

// =================================phần chung ======================================
.text {
    padding:5px 5px;
   margin-bottom:5px;
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


