import React, { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm'
import { getTodoById, editTodo } from './api'
import { useParams } from 'react-router-dom'

export const EditTodo = () => {
  const { id } = useParams()

  const [todo, setTodo] = useState()

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodoById(id)
      setTodo(todo)
    }
    fetchTodo()
  }, [id])

  const onSubmit = (data) => {
    editTodo(id, data)
  }

  return todo ? (
    <div className='container'>
      <div className='mt-3'>
        <h3>Edit Todo Item</h3> <TodoForm todo={todo} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}
