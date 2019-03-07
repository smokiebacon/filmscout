import React from 'react'
import { Link } from 'react-router-dom' 
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
        <Menu.Item key="mail">
          <Link to="/">Film Scouter</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link to="/register" rel="noopener noreferrer">Register</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Navigation;