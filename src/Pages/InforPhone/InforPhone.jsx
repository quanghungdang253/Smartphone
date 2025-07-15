import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slideimage from './Components/contact-map';
import PhoneAPI from './services/PhoneAPI';
import InformationPhones from './Components/informationPhone';
import { Circles} from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import useHandledetailApi from '../../Api/use-handle-detail-phone';
import Loading from '../../Common/components/Loading';
import { Helmet } from 'react-helmet-async';
import Category_Name from './data/Category-Name';
import Breadcrumb from '../../Common/location/location';

function InforPhone(props) {
    const params = useParams();  // lấy id và link từ app.jsx
    const link = params.link;
    
    const id = params.id;
    const [datas,loadings]  = useHandledetailApi(link,id); // nhận dữ liệu và gọi để truyền link và id để xử lý 
    return (
                <Wrapper>
                       <div className='mainss'>                 
                            {loadings ? ( <Loading/>) : (                 
                                <>             
                                      
                                        <InformationPhones 
                                            Data={datas}
                                            id={id}
                                            nameEnpoint={link}
                                            nameNavigation={link}
                                        />
                                </> 
                                                    
                            )}                                        
                       </div>
                </Wrapper>
    );
}
const Wrapper = styled.div`
        .main {
            
        }

    `
const Main = styled.div `
           display:flex;
           justify-content:center;
          
           
          
`

export default InforPhone;


// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import Slideimage from './Components/Slideimage';
// import InformationPhones from './Components/informationPhone';
// import { Circles } from 'react-loader-spinner';
// import { useParams } from 'react-router-dom';
// import useHandledetailApi from '../../../Api/useHandledetailPhone';

// function InforPhone() {
//     const params = useParams();  // Lấy id và link từ URL
//     const link = params.link;
//     const id = params.id;

//     const [data, loading] = useHandledetailApi(link, id); // Sử dụng custom hook để lấy dữ liệu chi tiết

//     // Nếu dữ liệu chưa tải xong, hiển thị loader, nếu không hiển thị dữ liệu
//     return (
//         <Wrapper>
//             <div className='main'>
//                 {loading ? (
//                     <ProgressBar>
//                         <Circles
//                             height="400"
//                             width="80"
//                             color='blue'
//                             ariaLabel='loading'
//                         />
//                     </ProgressBar>
//                 ) : (
//                     <Main>
//                         <Slideimage image={data?.image} /> {/* Hiển thị hình ảnh */}
//                         <InformationPhones Data={data} /> {/* Hiển thị chi tiết thông tin điện thoại */}
//                     </Main>
//                 )}
//             </div>
//         </Wrapper>
//     );
// }

// const Wrapper = styled.div`
//     /* Style cho Wrapper */
// `;

// const ProgressBar = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const Main = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-left: 7%;
// `;

// export default InforPhone;
