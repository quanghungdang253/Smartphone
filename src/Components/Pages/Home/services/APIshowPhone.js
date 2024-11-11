import React from "react";
import { useEffect, useState } from "react";


const Link = "/homephone.json";

const APIshowPhone = (props) => {
    const SetValue = props.SetValue;

        useEffect(() => {
                try {
                const handleAsync = async() => {   // định nghĩa hàm bất đồng bộ 
                        const fetchAPI = await fetch(Link);
                        const data = await fetchAPI.json();
                        SetValue(data);
                }
                handleAsync();
                } catch(error) {
                        alert("Đã có lỗi");
                        }
        
          },[])
 }
      



export default APIshowPhone;