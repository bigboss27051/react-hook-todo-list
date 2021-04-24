import { useState } from 'react'

export const useTodo = () => {
  const [todoList, setTodoList] = useState([])

  const handleAddTodo = (todo) => {
    setTodoList([...todoList, todo])
  }

  const handleCompleteTodo = (id) => {
    const indexTodo = todoList.findIndex(todo => todo.id === id)
    const todo = todoList[indexTodo]
    const newTodo = {
      ...todo,
      isCompleted: !todo.isCompleted
    }
    setTodoList([...todoList.slice(0, indexTodo), newTodo, ...todoList.slice(indexTodo + 1)])
  }

  const handleOnRemove = (id) => {
    const indexTodo = todoList.findIndex(todo => todo.id === id)
    console.log({ indexTodo })
    setTodoList([...todoList.slice(0, indexTodo), ...todoList.slice(indexTodo + 1)])
  }
  return {
    todoList,
    handleAddTodo,
    handleCompleteTodo,
    handleOnRemove
  }
}
