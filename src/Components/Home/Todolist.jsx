//     import React from "react";
//     import PropTypes from "prop-types"  // thêm thư viện prop-types vào để đĩnh nghĩa và kiểm tra kiểu dữ liệu 
//     import classname from "classnames";
//  import "./app.scss";  // ở đây sẽ biên dịch mã scss thành
//     // ở đây TodoList.prototype giúp xác định thuộc tính cho component TodoList 
 

//     const TodoList = ({todoList,onTodoClick}) => { // đây là component con 
//             const handleTodoClick = (List,index) =>{
//                     if(!onTodoClick) return;
//                     onTodoClick(List,index); 
                    
//             }
//     console.log(todoList); 
//         return (
//                 <ul className="todo-list">              
//                         {todoList.map((List,index) => (  
//                             <li 
//                                       key={List.id}
//                                       className={classname({   // đây là cách sử dụng class động 
//                                                 'todo-item': true,              // thiết lập thành true để hiển thị 
//                                                 complete: List.status === "completed" // thêm complete nếu List.status === "completed"
//                                     })}
//                                     onClick={() => handleTodoClick(List,index)}
//                             >
//                                     {List.title}
//                             </li>  
                            
//                         ))}
                       
//                 </ul>

//         )
//     }
//     TodoList.propTypes = {  
//         todoList:PropTypes.array,       
//         onTodoClick:PropTypes.func
// }
// TodoList.defaultProps = {                      
// todoList:[],  
// onTodoClick:null,                             
// }
//     export default TodoList;


// import React from "react";
// import classname from "classnames";
// import "./app.scss";
// function TodoList({todoList,onTodoClick}){ 

//         function handleClick(List,index){
//                         if(!List) return;

//                         onTodoClick(List,index);
//         }



//         return (
//                 <ul className="todo-list">
//                         {todoList.map((List,index) => (
//                          <li 
//                                 key={List.id}
//                               className={classname({
//                                 'TodoList': true,
//                                  complete: List.status === "completed" // thêm thuộc tính completed vào nếu List.status === "completed" 


//                               })}  
//                               onClick={() => handleClick(List,index)}  
                                
//                         > {List.title} </li>
//                         ))}
                
//                  </ul>

//         )
// }


// export default TodoList;
import React from 'react';

function Todolist(props) {
    return (
        <div>
                    
        </div>
    );
}

export default Todolist;
