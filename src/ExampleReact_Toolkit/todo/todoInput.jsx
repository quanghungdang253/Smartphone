import React from 'react';

function TodoInput({data,  arraySize}) {
    return (
        <div>    
            <p>     Họ và tên :   {data.fullname}   </p> 
             <p>    Tuổi   {data.age} </p> 
            <p>    Công việc:   {data.job}  </p>
   </div>
    );
}

export default TodoInput;