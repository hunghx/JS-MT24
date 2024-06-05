import React, { Component } from 'react'
import './index.css'
interface UserInfo {
    name: string,
    sex: boolean,
    bod: string,
    address: string,
    email: string
}

export default class Baitap3 extends Component {

    render() {
        let userInfo : UserInfo = {
            name: "tâm anh",
            sex: true,
            bod: "1999-12-12",
            address: "hà nội",
            email: "tamanh@gmail.com"
        }
        return (
            <div>
                <h2>Thông tin cá nhân</h2>
                <ul>
                    <li>Họ vàn tên : {userInfo.name}</li>
                    <li>Giới tính : {userInfo.sex?"Nam":"Nữ"}</li>
                    <li>Ngày sinh : {userInfo.bod}</li>
                    <li>Email : {userInfo.email}</li>
                    <li>Địa chỉ : {userInfo.address}</li>
                </ul>
            </div>
        )
    }
}
