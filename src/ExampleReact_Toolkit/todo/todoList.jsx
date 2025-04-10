import React, { useState } from 'react';
import useData from '../Counter/customsHook/customData';
import { useDelete , useEdit,useGetId } from '../Counter/customsHook/customData';
import { Link } from 'react-router-dom';
import { useOpenForm , useBoolean} from '../Counter/customsHook/customData';
import { useDispatch, useSelector } from 'react-redux';
import HandleTodoform from './todoform';
import { startEdit,cancelEdit, updateEdit , deletes } from '../Counter/counterSlice';
function TodoList() {
const selectvalue  = useSelector(state => state.count);
const dispatch  = useDispatch();
  
  const handleDel = (id) => {
            dispatch(deletes(id));
  }

const sendId = (id) => {
 
        let editId = startEdit(id);
        dispatch(editId); // thực hiện đẩy dữ liệu lên reducer 
}
    return (
        <div>
      
                {selectvalue.item.map((Item) => (
                    Item.id === selectvalue.editId ? (
                            <HandleTodoform 
                                    editId={selectvalue.editId}
                                    element={selectvalue.item}
                                    cancelEdit={cancelEdit}
                                    updateEdits={updateEdit}
                            />
                    ) : (
                        <div> 
                         <div>    
                             <p>     Họ và tên :   {Item.fullname}   </p> 
                             <p>    Tuổi   {Item.age} </p> 
                             <p>    Công việc:   {Item.job}  </p>
                        </div>
                        <div> 
                                <button onClick={() => handleDel(Item.id)}>     Xóa   </button>
                             
                                
                                       <button onClick={() => sendId(Item.id)}>    Chỉnh sữa     </button>        
                                 
                        </div>
                    </div>
                    )
                 
                ))}
        </div>
    );
}

export default TodoList;