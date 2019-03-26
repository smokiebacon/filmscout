import React from 'react'
import { Link, withRouter } from 'react-router-dom' 
import { Menu } from 'antd'
import { auth } from '../../Firebase/Firebase'


class Navigation extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  logOut = (e) => {
    auth.signOut();
    return this.props.history.push('/login')
  }

  render() {
    const authLinks = (
      <Menu
      onClick={this.handleClick}
      selectedKeys={[this.state.current]}
      mode="horizontal"
    >
      <Menu.Item key="film">
        <Link to="/">Film Scouter</Link>
      </Menu.Item>
      <Menu.Item key="Admin Page">
      <Link to="/dashboard">Admin Panel</Link>
      </Menu.Item>
      <Menu.Item key="Add Property">
      <Link to="/addproperty">Add Property</Link>
      </Menu.Item>
      <Menu.Item key="View All Properties">
      <Link to="/allproperties">View All Properties</Link>
      </Menu.Item>
      <Menu.Item key="Log Out" onClick={this.logOut}>
      <Link to="/allproperties">Log Out</Link>
      </Menu.Item>
    </Menu>
    )

    const guestLinks = (
      <Menu
      onClick={this.handleClick}
      selectedKeys={[this.state.current]}
      mode="horizontal"
    >
      <Menu.Item key="home">
        <Link to="/">Film Scouter</Link>
      </Menu.Item>
      <Menu.Item key="properties">
        <Link to="/properties">View All Properties</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact Us</Link>
      </Menu.Item>
    </Menu>
    )
    return (
      <div>
      {this.props.currentUser.email ? authLinks : guestLinks  }
      </div>
    );
  }
}
export default withRouter(Navigation);