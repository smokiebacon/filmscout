import React, { Component } from 'react'
import Panel from './Panel'
import Button from 'antd/lib/button';
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  state = {

  }
  
  render() {
    return (
      <div>
          <h1>Admin Panel</h1>
          <Panel />
          <Link to="/flowproperty">
            <Button type="primary">Create New Property</Button>
          </Link>
        
      </div>
    )
  }
}

export default Dashboard;
