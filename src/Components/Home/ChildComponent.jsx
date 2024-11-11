import React, { useState } from "react";
import { Title } from "../phone/Header/TitleandProducts";
import TodoList from "./Todolist";


function TodoFeature(props){
    const  inittodoList = [
        {
            id: 1,
            title:'Eat',
            status: "new"
        },
        {
            id: 2,
            title:'Sleep',
            status: "completed"
        },
        {
            id: 3,
            title:'Code',
            status: "new"
        },
        {
            id: 4,
            title:'Exercise',
            status: "new"
        }
    ];
    const [todoList,setTodoList] = useState(inittodoList);

function handlClick(List,index){

    // const newArray  = [...todoList]; // tạo array clone
    const setArray = {
        ...todoList[index],
        status: List.status === "new" ? "completed":"new"

    }
   todoList[index] = setArray;
    setTodoList(todoList);
}
    return (
            <div> 
                    <TodoList   todoList={todoList}  onTodoClick={handlClick}/> 
                    {/* truyền cho component con hai thuôc tính */ }
            
            </div>

    )
}
export default TodoFeature;
      // <div>
        //         <h3> Todo List </h3>
        //         <TodoList  todoList={todoList} onTodoClick={handleTodoClick}/>      {/*   đây là component cha đang truyền một mảng các object cho component con */} 
        // </div>































//    function handleTodoClick(List,index){

    // const newtodoList = [...todoList]; // tạo bản clone từ newtodoList lúc này newtodoList là một bản sao từ todoList 
 
    // const newtodo = {
    //         ...newtodoList[index], // 
        
    //         status: newtodoList[index].status === "new" ? "completed":"new",
    // }
    // newtodoList[index] = newtodo;
    // setTodoList(newtodoList )

//    } 