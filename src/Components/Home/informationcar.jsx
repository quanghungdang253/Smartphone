import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
function Informationcar(props) {
  
    const params = useParams();
    let id = params.id;
    // const {id} = useParams(); viết tắt
    const URL = "/abc.json";
    
const [preInfor, SetInfor] = useState([]);
const [loading ,setloading] = useState(true);
    useEffect(() => {
     //  Hook useEffect này chạy một lần khi component được "mount" (tức là khi component lần đầu tiên được render). Mảng rỗng [] đảm bảo rằng useEffect chỉ được thực thi một lần, không lặp lại khi component cập nhật.
        const fetchAPI = async() => {
            const response = await fetch(URL);
            const data = await response.json();
            SetInfor(data);  
            setloading(false);   // ở đây khi state cập nhật thì component sẽ render lại 
            
            
        }
        
      fetchAPI();
    },[])
       
      
    if(loading){
            return <p>Loading............</p>
    }
//   const phone = preInfor.find((item) => item.id === parseInt(id));

      
        const phone = preInfor[id-1];
        
        console.log(phone);
    
    return (
        <div>
        
            <ul>
                   <li> Tên:  {phone.name} </li>
                 
                
            </ul>
        </div>
    );
}

export default Informationcar;


