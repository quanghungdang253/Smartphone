// import React from 'react';
// import './style.css';
// // render UI
// function HobbyList({hobbyList, activeId,onHobbyClick}) {

//     const setID = (hobbyId) => {
//         if (onHobbyClick) {
//             onHobbyClick(hobbyId);
//         }
//     };
    
    
//     return (
//         <div>
//               {hobbyList.map((Item) => (
//                     <h1 key={Item.id}
//                          onClick={() => setID(Item)}
//                          className={Item.id === activeId ? 'active' : ''}                > {Item.title}  {Item.id}</h1>
//               ))}
//         </div>
//     );
// }

// export default HobbyList;



import React, { useState } from 'react';
import './style.css';
function HobbyList({hobbyList,getColor,HandleaddColor,valueInput}) {

    const [value , setValue] = useState({
        fullname: "",
        age: "",
        email: ""
    });
    valueInput(value);
    const setId = (id) => {
            HandleaddColor(id);
        
    
    }
    const getValue = (e) => { // hàm này sẽ chạy khi người dùng nhập liệu 
        setValue((pre) => {
            return {
                ...pre,
                [e.target.name] : e.target.value

            }
        })     
    }



    return (
        <div>
        <div> ==========================MENU==============================</div>
        <div style={{display:'flex', flexDirection:'column'}}>  
            <div> 
                <label>  Nhập tên </label>
                <input
                name="fullname"
                     type='text'
                     className='input'
                     placeholder='Enter fullname' 
                     onChange={getValue}

                     />
            </div> 
            <div> 
                    <label>  Nhập tuổi </label>
                    <input
                      name="age"
                      type='number'
                      className='input'
                      placeholder='Enter age'
                      onChange={getValue}
                       /> 
            </div>
            <div>  
                  <label>  Nhập email </label>
                    <input 
                         name="email"
                        type='text' 
                        className='input' 
                        placeholder='Enter email' 
                        onChange={getValue}
                        /> 
            </div>
          
        </div>


            {hobbyList.map((Item) => (
                <div 
                  key={Item.id}>
                                   
                    <h1 className={getColor === Item.id ? 'active' : ""} style={{cursor: 'pointer'}} 
                    onClick={() => setId(Item.id)}>  {Item.name} </h1>
                    <h1> {Item.age}  </h1>
                    <h1> {Item.email}</h1>
                 
                </div>
            ))}
        </div>
    );
}

export default HobbyList;