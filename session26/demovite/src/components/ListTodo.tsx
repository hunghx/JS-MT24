import React, { Component } from 'react'
import Todo from './Todo'

export default class ListTodo extends Component {
  render() {
    return (
        <div>
        <ul className="list-group my-2">
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>
        </ul>
      </div>
    )
  }
}
