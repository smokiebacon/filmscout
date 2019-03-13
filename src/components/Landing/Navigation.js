import React from 'react'
import { Link } from 'react-router-dom' 
import { Menu } from 'antd'

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

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/">Film Scouter</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          Contact Us: (626) 555-555
        </Menu.Item>
      </Menu>
    );
  }
}
export default Navigation;