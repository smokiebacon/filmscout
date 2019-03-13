import React, { Component } from 'react'
import { auth } from '../../Firebase/Firebase'
import { doGetUser } from '../../Firebase/User'
import { withRouter } from 'react-router-dom'
import Button from 'antd/lib/button';

class Login extends Component {
    state = {
        email: "",
        password: ""
      };
    onChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
    }

    
  onSubmit = e => {
    e.preventDefault();
      auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
          console.log(signedInUser.user.uid)
          doGetUser(signedInUser.user.uid)
            .then(snapShot => {
              console.log(snapShot.data())
              //if one use .data
              //if multiple docs.map(d => d.data())
              // snapShot.docs.map(d => console.log(Object.assign(d.data(),{id:d.id})))
              this.props.doSetCurrentUser(snapShot.data())
              return this.props.history.push('/dashboard')
            })
        })
        .catch(err => {
          console.error(err);
        });
    }

  render() {
    return (
    <div className="loginImage">
      <div className="loginContainer">
        <form onSubmit={this.onSubmit}>
        <input className="loginInput" 
        type="email"
        name="email"
        placeholder="Email"
        onChange = {this.onChange}
        />
        <input className="loginInput" 
        type="password"
        name="password"
        placeholder="Password"
        onChange = {this.onChange}
        />
        <Button type="primary" htmlType="submit">Login</Button>
        </form>
      </div>
    </div>
    )
  }
}
export default withRouter(Login)

