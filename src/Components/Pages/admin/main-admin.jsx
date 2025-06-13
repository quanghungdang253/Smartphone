import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './main-admin.module.scss';
import HeaderAdmin from './header-admin/header-admin';
import BodyAdmin from './body-admin/body-admin';
import datas from './data.json';
import { useSelector } from 'react-redux';
function MainAdmin(props) {
    let navigate = useNavigate();
    const [dataStore , setDataStore] = useState(datas);



   useEffect(() => {
        const handleGetData = async() => {
                fetch(datas)
                .then((res) => {
                        return res.json();
                })
                .then((data) => {
                        setDataStore(data);
                })
                .catch((error) => {
                    console.log("Lỗi lấy dữ liệu "+error)
                })
        }
        handleGetData();
   },[])
if(dataStore !== null ){

    console.log(dataStore);
}

    useEffect(() => {
        let isAdmin = localStorage.getItem("isAdmin");
        if(!isAdmin){
             alert("bạn k có quyền truy cập ");
             navigate("/Login");
        }
    },[])
    
    return (
        <div className={styles.mainAdmin}>
                <div>
                        <HeaderAdmin dataStore={dataStore}/>
                </div>
                <div>
                  {
                        
                  }
                        <BodyAdmin data={dataStore} />
                </div>
             
        </div>
    );
}

export default MainAdmin;