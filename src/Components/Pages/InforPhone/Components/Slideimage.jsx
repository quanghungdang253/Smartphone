import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Slideimage = ({image}) => {   //ở đây {phone} là viết tắt    const InformationPhone = (props)
                                                                        // const {image} = props;
      // ({image}) nghĩa là image = props.image
   // cú description const {image} = phone;

        const [preimage , setimage] = useState(image);
        console.log(preimage);
        const [preindex , setindex] = useState(0);
        useEffect(() => {
           const Time = setInterval(() => {
                setindex((preindex) => {
                        if(preindex === preimage.length -1){
                                return 0;
                         }else{
                                return  preindex + 1;                                                  
                        }
                })
                         },3000)
                        return(() => clearInterval(Time));
        },[preimage.length])
        const Left = () => {
                        setindex((preindex) =>(
                                // if(preindex  ===  0){
                                //         return preindex = preimage.length - 1;
                                // }
                                //         return preindex - 1; cách 1
                                (preindex === 0 ? preindex = preimage.length - 1 : preindex - 1) // cách 2
                        ))
                   
                }      
        const Right = () => {
                        setindex((preindex) => {
                                if(preindex === preimage.length - 1){
                                        return preindex = 0;
                                }
                                return preindex + 1;
// transition: property duration  timing-function delay;
                        })     
        }
        return(
            <Wrapper> 
                    <HandleImage>
                        <ul className='HandleImage__image'>
                                <div className='HandleImage__node'>  
                                        <Button variant='outlined' onClick={() => Left()}> ⬅ </Button>
                                        <Button variant='outlined'  onClick={() => Right()}> ➡ </Button>
                                </div>
                                <li style={{width: '300'}}>  
                                                <img src={process.env.PUBLIC_URL+ preimage[preindex]} alt=''  /> 
                                               
                                               
                                </li>   
                        </ul>
                <div className='HandleImage_Slide'>
                    {preimage.map((image,index) => {   // index của map tính từ 0 
                    {console.log(image)}
                        return(    
                            <button key={index} 
                            onClick={() =>setindex(index)} 
                            className={`HandleImage__button ${index === preindex ? 'selected' : ''}`} >
                            
                             <img src={image} alt=''/>
                             </button>   
                        )
                })}             
                 </div> 
                 <div>  
                               {/* Truyền dữ liệu vào component InformationPhone */}
                                <div className="Wrapper__contact">
                                        <div className="Wrapper__contact1 contact">
                                                  <p>                                              
                                                      <img src="https://24hstore.vn/upload_images/images/2023/02/28/may-moi_(1)(1).png" alt="" />
                                                      Máy được thu lại từ khách, nguồn gốc rõ ràng, xuất VAT (+10%)
                                                      
                                                   </p>
                                                   <p>
                                                        <img src="https://24hstore.vn/upload_images/images/2023/02/28/vat.jpg" alt="" />
                                                        Máy trần không hộp, đã qua sử dụng, được tuyển chọn kỹ lưỡng
                                                   </p>
                                                   <p>
                                                        <img src="https://24hstore.vn/upload_images/images/2023/02/27/icon-gh.png" alt="" />
                                                        Giao hàng toàn quốc - Miễn phí giao hàng nội thành 
                                                   </p>
                                        </div>
                                        <div className="Wrapper__contact2 contact">
                                                <p>
                                                    <img src="https://24hstore.vn/upload_images/images/2023/02/27/icon-gh.png" alt="" />
                                                    Dùng thử 7 ngày miễn phí - Đổi mới trong 34 ngày đầu nếu lỗi
                                                </p>
                                                <p>
                                                  <img src="https://24hstore.vn/upload_images/images/2023/05/31/cs-pin.jpeg" alt="" />
                                                  Miễn phí đến 12 tháng Bảo hành Pin 1 đổi
                                                </p>
                                                <p>
                                                    <img src="https://24hstore.vn/upload_images/images/2023/06/01/ic-bh.jpg" alt="" />
                                                    Bảo hành đến 24 tháng lỗi NFC
                                                </p>
                                        </div>

                                </div>
                            </div>
                    </HandleImage>
          </Wrapper>     
)

}
const Wrapper = styled.div `
        /* background-color: #1d1d1f; */
        width: 600px;
      .HandleImage__button:hover{
                        border: 4px solid red;
                }
      .HandleImage__button:active{                              // border chuyển màu đỏ khi nhấn chuột
                        border: 4px solid red;
                }
      .HandleImage__button.selected {
                        border: 4px solid red;
                }

`
const HandleImage = styled.div `
width: 1300px;  
margin: 0 auto;
overflow: hidden;  // nếu nhiều phần tử thì phần tử bị tràn và sẽ ẩn đi

       
        
.HandleImage__image {
                display: flex;
                align-items:center;
                justify-content: start;
                padding: 0 0 0 4rem;
}
.HandleImage__image img {
     
                width: 300px;
                height:300px;
                object-fit: contain;
                transition: opacity 0.8s ease-in-out;
}
.HandleImage__node {
            position:absolute;
            display: flex;
            grid-column-gap: 15rem;
}
.HandleImage_Slide {
       
                 display: flex;
                 grid-column-gap: 10px;
              
                img {
                        width:5rem;
                }
}

`
export default Slideimage;