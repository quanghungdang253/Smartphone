import React from 'react';
import styles from '../styles/components/list-child-components.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
function ListChildComponents(props) {
    const Static_data = props.Static_data;

    const Data = props.Data;
    let iconstar = [
        {id: 0 , class: "icon__star", name: faStar},
        {id: 1 , class: "icon__star", name: faStar},
        {id: 2 , class: "icon__star", name: faStar},
        {id: 3 , class: "icon__star", name: faStar},
        {id: 4 , class: "icon__star", name: faStar}
        // <FontAwesomeIcon icon={faStar} />,
        // <FontAwesomeIcon icon={faStar} />,
        // <FontAwesomeIcon icon={faStar} />,
        // <FontAwesomeIcon icon={faStar} />,
      
    ]
    return (
        <div className={styles.nameProduct}>
            <div className={styles.nameProduct__box1}>  
                <h1 className={styles.namephone}> {Data.title} </h1> 
                <div className={styles.Wrapper__icon}> 
                    {iconstar.map((Item) => (
                         <FontAwesomeIcon key={Item.id}  icon={Item.name} className={styles.icon__star} />
                    ))}
                      
                </div>
                <h1> 170 Đánh giá </h1>
              </div>              
              <aside className={styles.Wrapper__row__top}> 
                  <div className={styles.Wrapper__left}>                                                                          
                                </div>
                        <section className={styles.Wrapper__Address}>
                                <select className={styles.Wrapper__call}>
                                          {Static_data.address.map((Item) => (
                                                <option key={Item.id}> {Item.content} </option>
                                          ))}
                                </select>
                        </section>                             
                </aside>             
        </div>
    );
}

export default ListChildComponents;