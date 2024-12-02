import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  //  lấy id động 
import axiosClient from './axiosClient';
import { Link } from 'react-router-dom';
function Render(props) {
            const params = useParams();  // useParames trả về một đối tượng chức tất cả các tham số động

            const link = params.link;   // lấy tham số động từ route
        
            console.log(link);
            const [prevalue, Setvalue] = useState([]);
            useEffect(() => {
                const fetchApiAsync = async() => {
                    const   fetchapi = await axiosClient.get(`/${link}.json`);
                    console.log(fetchapi);
                    Setvalue(fetchapi);
                    }
fetchApiAsync();
            },[])
          
    return (
        <div>
                   {prevalue.map((value) => (
               
                    <Link to={`/phone/${link}/${value.id}`}> 
                            <div >
                                    <h1>Tên điện thoại : {value.name}</h1>
                                   

                            </div>
                    </Link>
                   ))} 
        </div>
    );
}

export default Render;