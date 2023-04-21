import { useState } from 'react';
import { Todo } from '../models/Todo';

interface TodoItemProps{
    todo: Todo,
    onDone: Function
}

export function TodoItem(props:TodoItemProps){
    
    let isDoneClass =  "TodoItem " + (props.todo.isDone ? "Done" : "");

    return(
    <div className = {isDoneClass}>
        <ul>
            <li>{props.todo.name}</li>
            <li>{props.todo.isDone.toString()}</li>
        </ul>
        <button onClick={() => props.onDone(true)}>Done</button>
    </div>)
}