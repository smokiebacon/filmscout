import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'antd/lib/button';
import ClientTele from '../Clientele/Clientele';
import Featured from '../Featured/Featured';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="layout__landing">
          <div className="dark-overlay">
            <div className="intro">

              <h1 className="introh1">Filming Locations for Rent</h1>
              <div className="search">
                <Link to="/properties" ><Button type="primary">Browse Locations</Button></Link>
              </div>
            </div>
          </div>
        </div>
        <div>
        <Featured />

        <ClientTele />

        </div>
      </div>
    )
  }
}

export default Landing
