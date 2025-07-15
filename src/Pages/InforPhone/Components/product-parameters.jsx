import React, { useState } from 'react';
import styles from '../styles/product-parameters.module.scss';
function ProductParameters(props) {
    const Data = props.Data;
  
    let Information = [
        {id: 0, title: "Màn hình", content: Data.screen_size, },
        {id: 1, title: "Công nghệ màn hình", content: Data.screen_technology},
        {id: 2, title: "Camera Sau", content: Data.rear_camera},
        {id: 3, title: "Camera trước", content: Data.Front_camera},
        {id: 4, title: "Chipset", content: Data.Chipset},
        {id: 5, title: "Công Nghệ NFC ",content: Data.NFC_technology},
        {id: 6, title: "Bộ nhớ trong", content: Data.internal_memory},
        {id: 7, title: "Thẻ sim", content: Data.SIM_card},
        {id: 8, title: "Hệ điều hành ",content: Data.OperatingSystem},
        {id: 9, title: "Độ phân giải màn hình", content: Data.Screen_resolution},
        {id: 10, title: "Tính năng màn hình", content: Data.Screen_features},
        {id: 11, title: "Loại CPU", content: Data.CPU_Type},
        {id: 12, title: "Cân năng", content: Data.Weight},
        {id: 13, title: "Cổng sạc", content: Data.Charging_port}
      ]
    return (
        <div>
            <section className={styles.Wrapper}>                          
                     <div> 
                        <h1 className={styles.Wrapper__Title}> Thông số kĩ thuật </h1>
                           <table className={styles.Wrapper__table}>                      
                              {Information.map((Item, id) => (
                                  <div className={`${styles.table_row} ${styles.table_row__color} ${id % 2 === 1 ? styles.addcolor : ""}`} key={Item.id}>
                                      <p td className={styles.table__row__title}>{Item.title}</p>
                                      <p className={styles.table__row__content}> {Item.content}</p>
                                  </div>
                                ))}                                            
                            </table>
                        </div>                    
            </section>
        </div>
    );
}

export default ProductParameters;