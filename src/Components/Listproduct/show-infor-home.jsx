import React from 'react';
import ShowInfo from './ShowInfo';
import { useState } from 'react';
import data from './data-show-infor';
function ShowInfoHome(props) {
    const enpoint = props.enpoint;
    const [listData , useListData] = useState(data);
   const [index ,setIndex] = useState(0);
    return (
        <div>
            {listData.map((Item) => (    
                <div key={Item.id} >  
                    <ShowInfo 
                         index_2={Item.id}
                         namephone={Item.data}
                         enpoint={enpoint} 
                         dataChoose={Item.dataChoose}
                         title={Item.title}
                        showimg={Item.imageSale}
                        handleImg={Item.handleImg}
                        idElement={Item.id}
                                        />
                </div>
            ))}

        </div>
    );
}

export default ShowInfoHome;

