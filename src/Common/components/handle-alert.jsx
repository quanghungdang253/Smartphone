import React, { useState } from 'react';
import { Toast } from 'bootstrap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
function HandleAlert(props) {
    const [values , setValue] = useState([]);
 
    const handleGetData = (e, value) => {
                        if(e.target.checked){   
                                        
                                   setValue(() => {
                                 return [
                                        ...values,
                                        value
                                 ]
                                   });
                        }else {
                                setValue(null);
                        }
    }
    const data = [
        {id: 0, name: "Đặng Quang Hùng", job: "Software Engineer"},
        {id: 1, name: "Hung Ahihi", job: "Hello các bạn"}
    ]
    return (

            <div>
                    <h1> Thực hành lấy giá trị option từ select </h1>
                    {data.map((Item) => (
                        <div>  
                        <input 
                        type='checkbox' 
                       
                         placeholder=''
                         onChange={(e) => handleGetData(e , Item)}
                        />
                        </div>

                    ))}
                    <h1>Giá trị vừa lấy là : {values ? (
                                values.map((Item) => (
                                        <p>  {Item.name}</p>
                                ))
                    ): (
                        "Chưa có giá trị"
                    )} </h1>
      
                        

                 


            </div>

    )
       




   
}

export default HandleAlert;