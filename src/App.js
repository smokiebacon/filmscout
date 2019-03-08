import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import { auth } from './Firebase/Firebase'
import { doGetUser } from './Firebase/User'
import { Switch, Route, withRouter } from 'react-router-dom'
import  Navigation from './components/Landing/Navigation'
import  Footer from './components/Landing/Footer'
import AddProperty from './components/Admin/AddProperty';
import Dashboard from './components/Admin/Dashboard';
import AllAdminProperties from './components/Admin/AllAdminProperties';
import EditProperty from './components/Admin/EditProperty';
import PropertyType from './components/FlowProperty/PropertyType/PropertyType';

class App extends Component {
  state = {
    currentUser : {}
  }
  componentDidMount() {
    auth.onAuthStateChanged(authUser => 
      authUser &&
        doGetUser(authUser.uid)
          .then(currentUser => this.setState({currentUser: currentUser.data()}))
    )
  }
  render() {
    console.log(this.state)
    return (
      <Switch>
      <div className="App">
      <Navigation />
      <Route exact path="/" component = { Landing } />
      <Route exact path="/dashboard" component = { Dashboard } />
      <Route exact path="/flowproperty" component = { PropertyType } />
      <Route exact path="/addproperty" component = { AddProperty } />
      <Route exact path="/allproperties" component = { AllAdminProperties } />
      <Route exact path="/:id/editproperty" component = { EditProperty } />

      <Route exact path="/register" component = { Register } />
      <Route path="/login" component={() => <Login doSetCurrentUser={(user) => this.setState({currentUser: user})}/>}/>
      <Footer />

      </div>
      </Switch>

    );
  }
}

export default withRouter(App);
