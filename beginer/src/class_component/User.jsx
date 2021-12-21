import React, { useReducer, useState } from 'react'
import TodoList from './TodoList'

const reducer = (state, action) => {
    switch (action.type) {
        case 'submit':
            return [
                ...state,
                {
                    value: action.payload,
                    id: new Date().toISOString()
                }
            ]
        case 'delete':
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}

export default function User() {
    const [value, setValue] = useState('')
    const [todos, dispatch] = useReducer(reducer, [])

    const handleChange = event => {
        setValue(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ type: 'submit', payload: value })
        setValue('')
    }

    const handleDelete = id => dispatch({ type: 'delete', payload: id })

    return (
        <div>
            <h1>Simple todo list</h1>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={handleChange} />
            </form>
            <TodoList todos={todos} handleDelete={handleDelete} />
        </div>
    )
}
