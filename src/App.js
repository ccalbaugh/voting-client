import React, { Component } from 'react';
import {List} from 'immutable';
import './App.css';

const pair = List.of('Trainspotting', '28 Days Later');

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
});