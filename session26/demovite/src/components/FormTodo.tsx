import React, { Component } from 'react'

export default class FormTodo extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center gap-3 mb-3">
        <input
          type="text"
          id=""
          className="rounded-2 p-1"
          placeholder="add todo here ..."
        />
        <button type="button" className="btn btn-success">
          Submit
        </button>
      </div>
    )
  }
}
