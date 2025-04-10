


// const initialState = {
//     list : [],
//     activeId: null

// }
// const hobbiesReducer = (state = initialState, action) => {
//         switch(action.type){
//             case 'ADD_HOBBY':  {
// let newData = [...state.list]; // thực hiện clone tránh việc lỗi tham chiếu 
// newData.push(action.payload);

//                 return {
//                     ...state,
//                     list: newData
//                 }
          
//             }
//             case 'SET_ACTIVE_HOBBY': {
//                 const newData = action.payload.id;
//                 // const newData = action.payload;

                
//                 return {
//                     ...state,
//                     activeId: newData
//                 };
            
//             }
//             default : {
//                 return state;
//             }
              
//         }
// }

// export default hobbiesReducer;





const initialState = {
    list : [],
    addColor: null
}

const reducerHooby = (state = initialState , action) => {
        switch(action.type) {
            case 'ADD_HOBBY':
             const addHobby = [...state.list]; // thực hiện clone ra mảng mới tránh lỗi tham chiếu 
                addHobby.push(action.payload);
                return {
                    ...state,
                    list: addHobby
                }
                
             case 'ADD_COLOR': 
                  const updateId = action.payload;

                  return {
                     ...state,
                     addColor: updateId
                  }
              
             default : {
                return state;
             }
        }
}


export default reducerHooby;