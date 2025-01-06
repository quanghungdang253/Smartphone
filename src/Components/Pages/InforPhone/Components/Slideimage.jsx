import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Slideimage = (props) => {   //ở đây {phone} là viết tắt    const InformationPhone = (props)
         const image = props.image;
         let indexs = props.index;   
        
                                                // const {image= p
        const [preimage , setimage] = useState(image);
        const [preindex , setindex] = useState(indexs);
        
           
        useEffect(() => {
                        setindex(indexs);
        },[indexs])
       
       

        useEffect(() => {
           
                setindex((preindex) => {
                        if(preindex === preimage.length -1){
                                return 0;
                         }else{
                                return  preindex + 1;                                                  
                        }
                })
                         
                       
        },[preimage.length])
        const Left = () => {
                        setindex((preindex) =>(
                                (preindex === 0 ? preindex = preimage.length - 1 : preindex - 1) // cách 2
                        ))
                   
                }      
        const Right = () => {
                        setindex((preindex) => {
                                if(preindex === preimage.length - 1){
                                        return preindex = 0;
                                }
                                return preindex + 1;
                        })     
        }
        return(
            <Wrapper> 
                    <HandleImage>
                        <div className='HandleImage__image'>
                                <div className='HandleImage__node'>  
                                        <Button variant='outlined' onClick={() => Left()}> ⬅ </Button>
                                        <Button variant='outlined'  onClick={() => Right()}> ➡ </Button>
                                </div>
                                <div className='list__image'>  
                                <img src={process.env.PUBLIC_URL+ preimage[preindex].image} alt='' className={`main__image ${preindex == 0 ? "small__image" : ""}`}/> 
                                                {preindex === 0 ? (
                                                <ul>  
                                             
                                                       { preimage[0].content.map((item, index) => (
                                                                <li key={item.id}>   {item}     </li>
                                                        ))  }
                                                </ul>
                                                ) : ""}
                                              
                                                      
                                                      
                                                      
                                </div>   
                        </div>
                <div className='HandleImage_Slide'>
                    {preimage.map((image,index) => {   // index của map tính từ 0 
                  
                        return(    
                            <button key={index} 
                                onClick={() =>setindex(index)} 
                                className={`HandleImage__button ${index === preindex ? 'selected' : ''}`} >
                            
                                        <img  src={image.image} className='btn btn__image' alt=''/>
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
li {
        font-size:0.9rem;
        width:20em;
      padding: 5px 5px;
}
    max-width:40em;
     box-shadow: 
            0 1px 2px 0 rgba(60, 64, 67, .1),
            0 2px 6px 2px rgba(60, 64, 67, .15);
      
.contact {
        max-width:300px;
       display:grid;
       grid-row-gap:1rem;
}
.Wrapper__contact {
        display: flex;  
        justify-content:start;
       
        align-items:center;
        
}
.HandleImage__button {
                max-width: 6rem;
                height:5rem;
                flex-shrink: 0; /* Đảm bảo kích thước button không bị co */
                margin-right: 8px; /* Khoảng cách giữa các button */
}
.HandleImage__button:hover{
                        border: 1px solid red;
                }
.HandleImage__button:active{                             
                        border: 1px solid red;
                }
.HandleImage__button.selected {
                        border: 1px solid red;
                }
                

`
const HandleImage = styled.div `
padding: 2rem 0 0 0 0;
width: 800px;

margin: 0 auto;
overflow: hidden;  // nếu nhiều phần tử thì phần tử bị tràn và sẽ ẩn đi
.list__image {
                padding: 2rem;
                width:100%;
                display: flex;
                justify-content: center;

}
.main__image {
         width:60%;
         height:19rem;   
}
.small__image {
        max-width:15em;
}
.btn__image {
        width:100%;
        height:100%;
}
       
.HandleImage__image {
              max-width: 80%;
              height:350px;
              position: relative;
}
.HandleImage__image img {
     
                object-fit: contain;
                transition: opacity 0.8s ease-in-out;
}
.HandleImage__node {
           display: flex;
            grid-column-gap: 32rem;
           height:100%;
           align-items:center;
            position:absolute;
           
}
.HandleImage_Slide {
                 width: 100%;
                 display: flex;
                 grid-column-gap: 10px;
                 overflow-x: auto;                      /* Cho phép cuộn ngang */
                 overflow-y: hidden;                    /* Ẩn cuộn dọc */
                 white-space: nowrap;                   /* Ngăn xuống dòng */
                 max-width: 70%;                        /* Đặt chiều rộng tối đa cho vùng hiển thị */
                -ms-overflow-style: none;
                         
}
.HandleImage_Slide::-webkit-scrollbar {
                 display: none; /* Ẩn thanh cuộn trên Chrome, Edge và Safari */

}
`
export default Slideimage;