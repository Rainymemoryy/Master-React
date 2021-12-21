import React from 'react'
import './todoList.scss'
export default function TodoList(props) {
    return (
        <div>
            <h1>Todo</h1>
            <ul>
                {props.todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.value}</span>
                        <button onClick={() => props.handleDelete(todo.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
