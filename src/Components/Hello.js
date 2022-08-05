import React, { Component } from 'react'
import img from '../image/sohel.jpg';
export default class Hello extends Component {
  render() {
    return (
      <div>Hello
        <img src={img} alt='' />
      </div>
    )
  }
}
