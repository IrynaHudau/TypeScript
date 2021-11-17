import React from "react";
import { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{onAddNewTodo: (text:string) => void}> = (props) => {

    const todoInpitTextRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const inputText = todoInpitTextRef.current!.value;
        if(inputText.trim().length == 0){
            return;
        }
        props.onAddNewTodo(inputText);
    };

    return <form className={classes.form} onSubmit={onSubmitHandler}>
        <label htmlFor='newTodo'>Todo Text</label>
        <input type='text' id='newTodo' ref={todoInpitTextRef}></input>
        <button>Add New</button>
    </form>
};
export default NewTodo;