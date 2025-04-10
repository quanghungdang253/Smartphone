import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase , deletes, handleEdit } from "../counterSlice";
import HandleTodoform from "../../todo/todoform";

const useData = () => {
        const getdata = useSelector(state => state.count);
       
 
        return getdata.item;
}

const useDispatchData = () => {
        let dispatch = useDispatch();
        const handleData = (value) => {
                const increaseNumber = increase(value);
                dispatch(increaseNumber);  
        }
        return  handleData;
    
    
        
}


const useEdit = () => {
        const dispatch = useDispatch();
        const getdata = useSelector(state => state.count);
        const handleEdit = (id) => {
                    const getId = handleEdit(id);

                   return getId;  // trả về giá trị đầu tiên tìm thấy        
        }
        
        return handleEdit;
}
const useGetId = () => {
       const [index , setIndex] = useState();
  
        const handlegetId = (id) => {
              
                 setIndex(id);
                        
        }
        return [handlegetId , index];
}

// ==================================
const useOpenForm = () => {
        const [state , setState] = useState(false);
    
        const handleForm = (boolean) => {
               
                setState(boolean);
        }

        return [handleForm, state];
               
}

const useBoolean = (Valueboolean) => {      
        return Valueboolean;
}

     



export {useDispatchData , useEdit , useGetId, useOpenForm, useBoolean};
export default useData;