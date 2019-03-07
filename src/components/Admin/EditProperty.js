import React, { Component } from 'react'
import firebase from '../../Firebase/Firebase';

class EditProperty extends Component {
    state = {
        address: '',
        city: '',
        state: '',
        zip: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        fileRef: ''
      }

    componentDidMount () {

    }
    onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
    onSubmit = (e) => {
        //  
        e.preventDefault()
        // create fucntion that will make the data without this.state.file
        // 
        firebase.firestore().collection("properties")
        .update(this.state)
        .then(() => {
        console.log("Document successfully EDITTED!");
        })
        .catch(function(error) {
        console.error("Error writing document: ", error);
        });
        return this.props.history.push('/allproperties')
    }

  render() {
    const { firstName, lastName, email, phone, 
        address, city, state, zip } = this.state

    return (
        <div>
        <h1>Edit Property Page</h1>
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
            <button type="submit">Edit Property</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditProperty;