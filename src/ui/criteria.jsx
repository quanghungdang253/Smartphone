import React, { useState, useEffect } from 'react';
import styles from './style/criteria.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Criteria({ data, sendResult }) {

    // lưu dữ liệu gốc
    const [originalData, setOriginalData] = useState(data.data);

    const [index, setIndex] = useState(0);

  

    function sortAscending() {

        const sorted = data?.data?.sort((a, b) => {

            const priceA = Number(a.price.replace(/\./g, "").replace("đ", ""));
            const priceB = Number(b.price.replace(/\./g, "").replace("đ", ""));

            return priceA - priceB;
        });

        sendResult(sorted);
    }

    function sortDescending() {
         const sortsDes = data?.data?.sort((a,b) => {
              const priceA = Number(a.price.replace(/\./g, "").replace("đ", ""));
            const priceB = Number(b.price.replace(/\./g, "").replace("đ", ""));

            return priceB - priceB;
         })

         sendResult(sortsDes);
    }

    function defaultData() {
                sendResult(originalData);
    }

    let nameBtn = [
        { id: 0, icon: faFilter, text: "Bộ lọc" },
        { id: 1, icon: "", text: "Giá tăng dần" },
        { id: 2, icon: "", text: "Giá giảm dần" },
        { id: 3, icon: "", text: "Chọn theo tiêu chí" },
        { id: 4, icon: "", text: "Bộ nhớ trong" },
        { id: 5, icon: "", text: "Dung lượng RAM" },
        { id: 6, icon: "", text: "Kích thước màn hình" },
        { id: 7, icon: "", text: "Nhu cầu sử dụng" },
        { id: 8, icon: "", text: "Kiểu màn hình" },
        { id: 9, icon: "", text: "Tính năng camera" },
        { id: 10, icon: "", text: "Tần số quét" },
        { id: 11, icon: "", text: "Tính năng đặc biệt" }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.container__title}>Chọn Theo tiêu chí</h1>

            <div className={styles.container__rowOne}>

                {nameBtn.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles.container__rowOne_item} ${index === item.id ? styles.addColor : ""}`}
                        onClick={() => {

                            setIndex(item.id);

                            if (item.id === 0) {
                                defaultData();
                            }

                            else if (item.id === 1) {
                                sortAscending();
                            } else if(item.id === 2) {
                                 sortDescending();
                            }

                        }}
                    >

                        {
                            item.icon !== ""
                                ? <FontAwesomeIcon icon={item.icon} />
                                : <FontAwesomeIcon icon={faCaretDown} />
                        }

                        <Link className={styles.item}>
                            {item.text}
                        </Link>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Criteria;