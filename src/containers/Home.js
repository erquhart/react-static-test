import React from 'react'
import { RouteData } from 'react-static'
//
import logoImg from '../logo.png'

export default () =>
  <RouteData render={({ test }) =>
    <h1 style={{ textAlign: 'center' }}>Welcome to {test}</h1>
  }/>
