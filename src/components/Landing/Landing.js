import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'antd/lib/button';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="layout__landing">
            <h1>Rent Beautiful Filming Locations</h1>
            <input type="text" placeholder="Search for location"></input>
            <Link to="/properties" ><Button type="primary">Browse Locations</Button></Link>
        </div>
      </div>
    )
  }
}

export default Landing
