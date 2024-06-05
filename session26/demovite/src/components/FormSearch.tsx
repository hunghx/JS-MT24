import React, { Component } from 'react'

export default class FormSearch extends Component {
  render() {
    return (
        <form className="d-flex mb-2">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    )
  }
}
