import Todos from './components/Todos';
import TodoModel from './models/Todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  //const listTodos = [new TodoModel("Buy Milk"), new TodoModel("Fix Window")];
  const [listTodos, setTodo] = useState<TodoModel[]>([]);

  const addTodoHandler = (todoText:string) => {
    const newTodo = new TodoModel(todoText);
    setTodo((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId:string) => {
    setTodo((prevState) => {
      return prevState.filter(todo => todo.id !== todoId);
    });
  };

  return ( 
    <div>
       <NewTodo onAddNewTodo={addTodoHandler}/>
       <Todos items={listTodos} onDeleteTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
