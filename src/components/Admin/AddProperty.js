import React, { Component } from 'react';
import firebase from '../../Firebase/Firebase';
import { withRouter } from 'react-router-dom';
import { storeFile, getFile } from '../../Firebase/storage';
import Upload  from '../Upload/Upload'
import PicturesWall from '../Upload/Upload';
import PropertyType from '../FlowProperty/PropertyType/PropertyType';
import PropertyFeatures from  '../FlowProperty/PropertyFeatures/PropertyFeatures';

class AddProperty extends Component {
  state = {
    address: '',
    city: '',
    state: '',
    zip: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    fileRef: '',
    type: '',
    style: '',
    features: []
  }

clickHandler = (e) =>{
  console.log(e)
  if (e === "House" ||
      e === "Business" ||
      e === "Apartment" ||
      e === "Restaurant" ||
      e === "Shopping Center"){
        this.setState({
          ...this.state,
          type: e
        })
      } else {
        this.setState({
          ...this.state,
          style: e
        })
      }

}
updateCheckbox = (e) => {
  console.log(e, 'THIS IS CHECKBOX FROM ADDPROPERTY.JS')
  this.setState({
    ...this.state,
    features: e
  })

}
onChange = (e) => {
  this.setState({
    [e.target.name] : e.target.value
  })
}

readFile = e => {
  this.setState({ file: e.target.files[0] })
}

onSubmit = (e) => {
  //  
  e.preventDefault()
  // create fucntion that will make the data without this.state.file
  // 
  storeFile(this.state.file)
  this.state.fileRef = this.state.file.name
  delete this.state.file 
  
  firebase.firestore().collection("properties")
    .add(this.state)
    .then(() => {
  console.log("Document successfully written!");
  })
  .catch(function(error) {
  console.error("Error writing document: ", error);
  });
  return this.props.history.push('/allproperties')
}

render () {
  console.log(this.state)
  const { firstName, lastName, email, phone, 
          address, city, state, zip } = this.state
  return (
    <div>
     <PropertyType click={this.clickHandler}/>
     <PropertyFeatures updateCheckbox={this.updateCheckbox}/>
      <h1>Add Properties</h1>
      <form className="admin__addproperty__form" onSubmit={this.onSubmit}>
        <div className="admin__addproperty__contact-info">
        <h2>Contact Info</h2>
          <input type="text" name="firstName" placeholder="First Name" onChange={this.onChange} value={firstName} ></input>
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.onChange} value={lastName} ></input>
          <input type="email" name="email" placeholder="Email"onChange={this.onChange} value={email} ></input>
          <input type="text" name="phone" placeholder="Phone Number"onChange={this.onChange} value={phone} ></input>
        </div>
        <div className="admin__addproperty__property-info">
        <h2>Property Info</h2>
          <input type="text" name="address" placeholder="Address" onChange={this.onChange} value={address} ></input>
          <input type="text" name="city" placeholder="City" onChange={this.onChange} value={city} ></input>
          <input type="text" name="state" placeholder="State"onChange={this.onChange} value={state} ></input>
          <input type="number" name="zip"  placeholder="Zip" onChange={this.onChange} value={zip} ></input>
          <input id="fileupload" name="img" type="file" onChange={this.readFile} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    
  )
}

}
export default withRouter(AddProperty);
