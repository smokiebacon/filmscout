import React, { Component } from 'react'
import { auth } from '../../Firebase/Firebase'
import { withRouter } from 'react-router-dom';
import { doAddUser } from '../../Firebase/User';
import Button from 'antd/lib/button';


class Register extends Component {
    state = {
        email: "",
        password: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                console.log(createdUser)
                doAddUser(createdUser.user.uid, {
                    email : this.state.email
                })
                return this.props.history.push('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }

  render() {
    return (
      <div>
          <form onSubmit={this.onSubmit}>
            <input 
            type="email"
            name="email"
            placeholder="Email"
            onChange = {this.onChange}
            />
            <input 
            type="password"
            name="password"
            placeholder="Password"
            onChange = {this.onChange}
            />
            <Button type="primary" htmlType="submit">Register</Button>
          </form>
        
      </div>
    )
  }
}

export default withRouter(Register)
