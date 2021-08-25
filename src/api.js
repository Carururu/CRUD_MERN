import axios from 'axios'

export const getTodos = async () => {
  let result = await axios.get(`http://localhost:4000/`)
  console.log(result.data)
  return result.data
}

export const createTodo = async (todo) => {
  await axios.post(`http://localhost:4000/create`, todo)
}

export const editTodo = async (id, todo) => {
  await axios.patch(`http://localhost:4000/${id}`, todo)
}

export const getTodoById = async (id) => {
  let getId = await axios.get(`http://localhost:4000/${id}`)
  return getId.data
}

export const deleteTodo = async (id) => {
  await axios.delete(`http://localhost:4000/${id}`)
}
