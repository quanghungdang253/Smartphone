// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import HobbyList from '../component/HobbyList';
// // đây là component nằm trong thư mục pages dùng để xử lý logic để truyền dữ liệu cho các component con khác 
// import { setActiveHobby } from '../actions/hobby';

// import { addNewHobby } from '../actions/hobby';

// HomePages.prototype = {

// }
// const randomNumber = () => {

//     return 1000 + Math.trunc(Math.random() * 9000);

// }


// function HomePages(props) {
//     const hobbyList = useSelector(state => state.hobby.list); // xủ lý lấy dữ liệu từ redux store 
//     const activeId = useSelector(state => state.hobby.activeId); // xủ lý lấy dữ liệu từ redux store 
// const dispatch = useDispatch();

//     const handleAddHobbyClick = () => {  // xử lý khi người dùng click 
//         let newId = randomNumber();
//                 const newHobby = {
//                         id: newId,
//                         title: "Hobby 1"
//                 }

//                 const action = addNewHobby(newHobby);
                
//                 dispatch(action); // thực hiện gửi dữ liệu lên reducer 
//     }
    
//     const handleHobbyClick = (hobbyId) => {
//             const action = setActiveHobby(hobbyId);
//             dispatch(action);
//     };
//     return (
//         <div>
//         <button onClick={handleAddHobbyClick}> Random Hobby </button>
//             <HobbyList
//                  hobbyList={hobbyList}
//                  activeId={activeId}
//                  onHobbyClick={handleHobbyClick}/>
//         </div>
//     );
  
// }

// export default HomePages;






// đây là container componet dùng để xử lý logic truyền dữ liệu để render Ui 

import { useSelector } from "react-redux";
import HobbyList from "../component/HobbyList";
import { useDispatch } from "react-redux";
import { addHooby,addColor } from "../actions/hobby";
import { useState } from "react";

const HomePages = () => {
            const getHobby = useSelector(state => state.hobby.list);
            // thực hiện lấy dữ liệu từ redux store 
            const getColor = useSelector(state => state.hobby.addColor);
            const dispatch = useDispatch();
            const [value , setValue] = useState({});
            const valueInput = (value) => {
                        setValue(value);
    }
            const addNewHobby = () => {
                    const user = {
                        id: 1,
                        name: value.fullname,
                        age: value.age,
                        email: value.email

                      
                    }
                  
                    // thực hiện xử lý logic ở đây gửi yêu cầu lên store để reducer xử lý 

                    const add = addHooby(user); 

                    dispatch(add); // thực hiện gửi action lên reducer để xử lý 
            }
            const HandleaddColor = (id) => {
 
               
                    const addColors = addColor(id);
                    dispatch(addColors); // thực hiện đẩy reducer 
            }
         
            return (
                <div>  
                 <button onClick={() => addNewHobby()}>  Thêm </button>
                 <HobbyList 
                    hobbyList={getHobby}
                    getColor={getColor} 
                    HandleaddColor={HandleaddColor} 
                    valueInput={valueInput}
                    />
                
                 </div>
            )
        


}

export default HomePages;