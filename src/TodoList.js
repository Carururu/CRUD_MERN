import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTodos, deleteTodo } from './api'

export const TodoList = () => {
  const [items, setItems] = useState([])

  const handleDelete = async (id) => {
    await deleteTodo(id)

    const fetchItems = async () => {
      const todos = await getTodos()
      setItems(todos)
    }
    fetchItems()
  }

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos()
      setItems(todos)
    }
    fetchItems()
  }, [])

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>TodoList</h3>
        <table className='table table-striped mt-3'>
          <thead>
            <tr>
              <th>Text</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((todo) => (
                <tr key={todo._id}>
                  <td>{todo.text}</td>
                  <td>{todo.description}</td>
                  <td>
                    <Link to={`/edit/${todo._id}`}>Edit</Link>
                    <button onClick={() => handleDelete(todo._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
