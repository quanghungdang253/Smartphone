import React, { useEffect, useState } from 'react';
import axiosClient from './axiosClient';
import { Link } from 'react-router-dom';

function Home(props) {
  
    const [prevalue, Setvalue] = useState([]);
    const [loading, setLoading] = useState(false); // thể hiện trang thái trang đang tải 
    const [error, setError] = useState(null);
    useEffect(() => {  
        const fetchAPiasync = async() => {
            const url = '/listphone.json';
                     // ở đây sẽ tự động gán url vào đường dẫn gốc baseURL và đợi axiosClient xử lý trả về kết quả 
                   
                    try{
                        const fetch = await axiosClient.get(url);                  
                        Setvalue(fetch)
                        
                    }
                    catch{
                        setError("Lỗi trong quá trình tải data ");
                    }
                    finally{  // ở đây finally luôn chạy 
                            setLoading(true);
                    }
                          
                   console.log(fetch);
                 
                    

        }
        fetchAPiasync();

    },[]) // useEffect chỉ chạy đúng 1 lần khi component Mount được gắn vào DOM 
   
    return (
        
        <div>
                    <div>
                            <nav>
                                    <Link to={'/phone/samsung'}> Samsung </Link>  {/* khi nhấn thì điều hướng đến Route */ }
                                    <Link to={'/phone/oppo'}>   Oppo  </Link>
                                    <Link to={'/phone/Reddmi'}> Redmi 12C  </Link>
                                    <Link to={'/phone/vivo'}>  Vivo v9  </Link>
                                    <Link to={'/phone/iphone'}>  iphone  </Link>
                                    <Link to={'/phone/Ipab'}> Ipab  </Link>
                            </nav>
                    </div>  
             {!loading && (<p> đang tải dữ liệu </p>)}
             {console.log(loading)}
             {loading ? ( <ul> 
                    {prevalue.map((list,index) => (
           
                    <li key={index}> {list.name}  </li>

                  
                                ))}
            </ul>
             ): (
                null
             )
             }
                              

        </div>
    );
   
}

export default Home;