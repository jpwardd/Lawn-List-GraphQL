import React, { Component } from 'react'
import BackButton from "../components/BackButton"
import Nav from "../components/Nav"

export default class Weather extends Component {
  render() {
    return (
      <div>
        <Nav />
        <BackButton />
        Weather is coming soon!!
      </div>
    )
  }
}
