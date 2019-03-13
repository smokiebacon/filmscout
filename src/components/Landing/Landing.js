import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'antd/lib/button';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="layout__landing">
          <div class="dark-overlay">
            <div className="intro">
              <h1 className="introh1">Filming Locations for Rent</h1>
              <div className="search">
                <input type="text" placeholder="Search for location" ></input>
                <Link to="/properties" ><Button type="primary">Browse Locations</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Landing
