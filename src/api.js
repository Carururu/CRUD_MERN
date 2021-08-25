import axios from 'axios'

export const getTodos = async () => {
  let result = await axios.get(`http://localhost:4000/`)
  return result.data
}

export const createTodo = async (todo) => {
  await axios.post(`http://localhost:4000/create`, todo)
}
