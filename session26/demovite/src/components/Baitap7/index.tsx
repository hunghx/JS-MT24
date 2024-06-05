import React, { Component } from 'react'
import './baitap7.css'
import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'

export default class Baitap7 extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <div className="body d-flex">
            <div className='menu d-flex flex-center'>
                <Menu/>
            </div>
            <div className='content'>
                <div className='main d-flex flex-center'>
                    <Main/>  
                </div> 
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
