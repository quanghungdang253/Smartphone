// export const addNewHobby = (hobby) => {
//      return {
//         type: 'ADD_HOBBY',
//         payload: hobby
//      }
// }

// export const setActiveHobby = (hobbyId) => {
//     return {
//         type: 'SET_ACTIVE_HOBBY',
//         payload: hobbyId
//     }
// }

// // trên đây là phần action creator giuosp tạo và trả về 1 action object 



// thực hiện tạo create action 

 export const addHooby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        payload: hobby          // nơi chứa dữ liệu bổ sung cập nhật 
    }
       
}

 export const addColor = (hobby) => {
    return {
        type: 'ADD_COLOR',
        payload: hobby
    }
}

