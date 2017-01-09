import React, { Component } from 'react';
import { DatePicker } from 'antd';
import './index.scss';

export default class Page1 extends Component {
  render() {
    return (
      <div className="page1">
        Page1
        <br/>
        <DatePicker />
      </div>
    );
  }
}
