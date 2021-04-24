import './App.css';

import React, { Component, useState, useMemo, useEffect, } from 'react'
import { useTodo } from './hook/use-todo'

function App() {
  const [textTodo, setTextTodo] = useState('')
  const {
    todoList,
    handleAddTodo,
    handleCompleteTodo,
    handleOnRemove
  } = useTodo()
  const handleOnChange = (e) => {
    const text = e.target.value
    setTextTodo(text)
    console.log({ textTodo })
  }
  const handleOnAdd = (e) => {
    /// post api and return data
    const lastId = todoList[todoList.length - 1]?.id ?? 0

    console.log({ lastId })
    const todo = {
      id: lastId + 1,
      text: textTodo,
      isCompleted: false
    }
    
    handleAddTodo(todo)
  }
  
  console.log({ todoList })
  return (
    <div className="App">
      <input type="text" onChange={handleOnChange} />
      <button onClick={handleOnAdd}>add</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                Todo
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              todoList.map((item, index) => <tr key={index}>
                <td style={{ color: item.isCompleted ? 'red' : 'black' }}>
                  {item.text}
                </td>
                <td>
                  <button onClick={() => handleCompleteTodo(item.id)}>complete</button>
                </td>
                <td>
                  <button onClick={() => handleOnRemove(item.id)}>remove</button>

                </td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
