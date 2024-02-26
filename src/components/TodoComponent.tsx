import Todo from "../models/todo";
import { FunctionComponent } from "react";




interface TodoComponentProps {
    todo: Todo,
    removeTodo: (id: number) => void
    completeTodo: (id: number) => void
}


const TodoComponent: FunctionComponent<TodoComponentProps> = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className='todo'>
            <div className='content' style={{ textDecoration: todo.completed ? "line-through" : "" }}>
                <p className='category'>({todo.category})</p>
                <p>{todo.description}</p>
            </div>
            <div className="buttons">
                {/* <input type="checkbox" /> */}
                <button className="complete" onClick={(_) => completeTodo(todo.id)}>
                    Completar
                </button>
                <button className="remove" onClick={(_) => removeTodo(todo.id)}>
                    x
                </button>
            </div>
        </div>
    );
};

export default TodoComponent;