import TodoModel from '../models/Todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{items:TodoModel[]; onDeleteTodo: (todoId:string) => void}> = (props) => {
    return <ul className={classes.todos}>
        {props.items.map(item => (
            <TodoItem key={item.id} item={item} onDeleteTodo={(todoId) => props.onDeleteTodo(todoId)}/>
        ))}
       </ul>
};

export default Todos;