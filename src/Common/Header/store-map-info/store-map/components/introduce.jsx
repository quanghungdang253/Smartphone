
import React from 'react';
import styled from '../styles/introduce.module.scss';
import Getdata from '../../assets/data/getdata';
import imageStore from '../images/imagestores.jpg';
function Introduce(props) {
    let [staticData , text] = Getdata();
    return (
        <div>
                 
  
        <header className={styled.boxContainer}>
            <div className={styled.imageStore}> 
                  
                    <img src={imageStore} alt='' className={styled.imgChild}/>
            </div>
            <div className={styled.boxText}>
            <h1 className={styled.title}> 1 triệu thành viên </h1>
                <div className={styled.box_1}>
                        {staticData.map((Item) => (
                                <div key={Item.id} className={styled.item}>  
                                        <img src={Item.image} alt='' className={styled.imgItem}/>
                                        <p className={styled.paragrap}> {Item.text}</p>
                                </div>
                        ))}
                </div>
                <div className={styled.boxParagrap}>
                        <p className={styled.paragrap}> {text}  </p>
                </div>
            </div>
        </header>
    
        </div>
    );
}

export default Introduce;



