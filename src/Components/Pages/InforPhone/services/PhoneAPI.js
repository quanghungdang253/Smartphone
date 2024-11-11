import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import  {Circles}  from 'react-loader-spinner';



// component FetchAPI dùng để lấy dữ liệu và truyền cho component 
function PhoneAPI ({fetchData}) {
    const parames = useParams();
   
    const id = parames.id; // lấy id động từ Route
    const URL = "/dataPhone.json";
    const [loading, Setloading] = useState(true);
useEffect(() => {
    const FetchAPI = async() => {
        try {
                const Request = await fetch(URL);
                const data = await Request.json();  // trả về mảng dữ liệu object 
               
                fetchData(data[id - 1]); // truyền dữ liệu component information 
        } catch {
             console.log("Loi");
             Setloading(false);
        }
               
    }
    FetchAPI();
},[])
    



    
}


export default PhoneAPI;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function PhoneAPI({ onDataFetch }) {
//   const { id } = useParams(); // Lấy id từ URL
  
//   const URL = "/dataPhone.json";
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAPI = async () => {
//       try {
//         const response = await fetch(URL);
//         const data = await response.json();
//         setLoading(false);
        
//         // Gửi dữ liệu về component cha (InformationPhones)
//         onDataFetch(data[id - 1]); // Đảm bảo chỉ gửi đúng dữ liệu theo id
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };
//     fetchAPI();
//   }, [id, URL, onDataFetch]);

//   return loading;
// }

// export default PhoneAPI;
