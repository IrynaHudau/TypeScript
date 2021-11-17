import TodoModel from '../models/Todo';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{item: TodoModel; onDeleteTodo : (todoId:string) => void}> = (props) => {
    return (
        <li className={classes.item} key={props.item.id} onClick={() => props.onDeleteTodo(props.item.id)}>{props.item.text}</li>
    );
};

export default TodoItem;