import { useDispatch, useSelector } from "react-redux";
import {removerTodo} from './todoSlice';
function Todo() {
    const dispatch = useDispatch(); // thực hiện đẩy action lên reducer 
    // thực hiện lấy dữ liệu hiện từ redux store truyền vào component 
    const todoList = useSelector(store => store.todos);

    const handleTodoClick = (todo,idx) => {
        const action = removerTodo(idx);
        dispatch(action);
    }



    return (
        <div> 
                {todoList.map((todo, idx) => (
                    <li key={todo.id} onClick={() => handleTodoClick(todo, idx)}>
                                {todo.title}
                    </li>
                ))}

        </div>
    )
}
