import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import { Switch, Route, withRouter } from 'react-router-dom'
import  Navigation from './components/Landing/Navigation'
import  Footer from './components/Landing/Footer'
import AddProperty from './components/Admin/AddProperty';
import Dashboard from './components/Admin/Dashboard';
import AllAdminProperties from './components/Admin/AllAdminProperties';
import EditProperty from './components/Admin/EditProperty';
import PropertyType from './components/FlowProperty/PropertyType/PropertyType';
import AllProperties from './components/Properties/AllProperties/AllProperties';
import OneProperty from './components/Properties/OneProperty/OneProperty';

class App extends Component {
  state = {
    currentUser : {}
  }
  // componentDidMount() {
  //   auth.onAuthStateChanged(authUser => 
  //     authUser &&
  //       doGetUser(authUser.uid)
  //         .then(currentUser => this.setState({currentUser: currentUser.data()}))
  //   )
  // }
  render() {
    console.log(this.state.currentUser, 'CURRENT USER')
    return (
      <Switch>
      <div className="App">
      <Navigation currentUser = { this.state.currentUser } />
      <Route exact path="/" component = { Landing } />
      <Route exact path="/dashboard" component = { Dashboard } />
      <Route exact path="/flowproperty" component = { PropertyType } />
      <Route exact path="/property/:id" component = { OneProperty } />
      <Route exact path="/addproperty" component = { AddProperty } />
      <Route exact path="/allproperties" component = { AllAdminProperties } />
      <Route exact path="/properties" component = { AllProperties } />
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
