// console.log(window.Redux);

// const {createStore} = window.Redux;
// const initialState = [
//     "Listen to Music"
// ];
// // 2. tạo reducer nhận vào hai tham số là 
// // + giá trị state ban đầu và mô tả hành động muốn thực hiện
// const hobbyReducer = (state = initialState , action) => {
//         return state;
// }


// const store = createStore(hobbyReducer); // khởi tạo store nơi lưu trữ toàn bộ state của ứng dụng 

// //render redux 

// const renderHobbyList = (hobbiesList) => {
//         if(!Array.isArray(hobbiesList)  || hobbiesList === 0) return;
//               const ulElement = document.querySelector('#hobbiesListId');
//               if(!ulElement) return;   
              
//               // reset
//               ulElement.innerHTML = '';

        
//         for (const hobby of hobbiesList) {
//                const liElement = document.createElement('li');
//                liElement.textContent = hobby ;
//                ulElement.appendChild(liElement)  
//         }
    

// }
// const initalHobbyList = store.getState();
// console.log(initalHobbyList);
// renderHobbyList(initalHobbyList);





const {createStore} = window.Redux;

// khởi tạo giá trị ban đầu
 
const initialStore = (JSON.parse(localStorage.getItem('hobbies_list')))
// khởi tạo reducer

const createReducer = (state = initialStore, action) => {
        switch(action.type) {
                case "INCREMENT": {
                        const newObject = [...state];
                        newObject.push(action.payload);
                        return newObject;
                }
                        
                        default : {
                                return state;
                        }
        }
       
               
}

const createStoreListItem = createStore(createReducer);


const handlecCreateElement = (hobbies) => {
        if(!Array.isArray(hobbies) || hobbies.length === 0) return;

        let UnoderList = document.querySelector('#hobbiesListId');
        if(!UnoderList) return;
  UnoderList.innerHTML = "";
        for (const element of hobbies) {
                        let item = document.createElement('li');
                        item.textContent = element;
                        item.className = "item";
                        UnoderList.append(item);
        }
      
}

document.querySelector('#hobbiesFormId').addEventListener('submit', (e) => {
        e.preventDefault();
        let valueInput = document.getElementById('hobbiesText').value;
        const action = {
                type: 'INCREMENT',
                payload: valueInput
        }
        createStoreListItem.dispatch(action);
      
});
createStoreListItem.subscribe(() => {
        console.log("STATE UPDATE ",createStoreListItem.getState())
      
let store = createStoreListItem.getState();
handlecCreateElement(store);
localStorage.setItem('hobbies_list', JSON.stringify(store))
})
let store = createStoreListItem.getState();

handlecCreateElement(store);
