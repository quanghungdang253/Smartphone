import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { handleEdit } from '../Counter/counterSlice';
import { useDispatchData } from '../Counter/customsHook/customData';
import { useEdit, useGetId } from '../Counter/customsHook/customData';
import { useParams } from 'react-router-dom';
import { useOpenForm } from '../Counter/customsHook/customData';
function HandleTodoform({editId, element, cancelEdit, updateEdits}) {

  const arrayStore = useSelector(state => state.count.item);

  const dispatch = useDispatch();
    const [valueUser , setValueUser] = useState({
            id: "",
            fullname: "",
            age: "",
            job: ""
    })
  
    
    useEffect(() => { 
    
        if (editId != null && element.length > 0) {
          const foundItem = element.find((item) => item.id === editId);
          if (foundItem) {
            setValueUser(foundItem);
          }
        }
      }, [editId, element]);



    let senData = useDispatchData();
    const getData = (e) => {
      
        const {name , value} = e.target;
          setValueUser((pre) => {
                return {
                    ...pre,
                 
                    [name]: value
                }

          }) 
          
    }
    const handleSubmit = () => {
             senData(valueUser);
    }
   
   const cancelEdits = () => {

           dispatch(cancelEdit()); // thực hiện gửi action createor lên reducer 
   }

  // component
const updateEdit = () => {
    dispatch(updateEdits({
      id: valueUser.id,
      fullname: valueUser.fullname,
      age: valueUser.age,
      job: valueUser.job
    }));
    cancelEdits();
  };
  
    return (
        <Container> 
                 <h1> Nhập các thông tin cần thêm  </h1>
                 <div>
                 <div>    
                                <label className='label'>  Nhập tên </label>
                                <input 
                                    type='text' 
                                    name='fullname' 
                                    value={valueUser.fullname}
                                    onChange={getData}
                                    
                                    />
                 </div>  
                  <div> 
                                <label> Nhập tuổi </label>
                                <input 
                                    type='text' 
                                    name='age' 
                                    value={valueUser.age}
                                    onChange={getData}
                                    />
                    </div>
                    <div>  
                                <label> Nghành nghề </label>
                                <input 
                                 type='text' 
                                 name='job'
                                 value={valueUser.job} 

                                 onChange={getData}
                                 />  
                    </div>
{!editId ? (
            <button onClick={() => handleSubmit()}> Submit </button>
) : (
  <div> 
       <button onClick={() =>cancelEdits() }> Hủy </button>
        <button onClick={() => updateEdit()}> Update </button>
  </div>
)}

</div>
                  
        
        </Container>
    );
}


const Container = styled.div`

  

`
export default HandleTodoform;