import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between">
                <span>item 1</span>
                <i className="bi bi-x-square text-danger" />
            </li>
        )
    }
}
