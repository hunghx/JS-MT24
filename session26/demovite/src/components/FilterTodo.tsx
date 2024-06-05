import React, { Component } from 'react'

export default class FilterTodo extends Component {
  render() {
    return (
        <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          defaultChecked={false}
        />
        <label className="btn btn-outline-success" htmlFor="btnradio1">
          All
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
        />
        <label className="btn btn-outline-success" htmlFor="btnradio2">
          Active
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
        />
        <label className="btn btn-outline-success" htmlFor="btnradio3">
          Completed
        </label>
      </div>
    )
  }
}
