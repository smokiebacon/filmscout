import React, { Component } from 'react'
import firebase from '../../Firebase/Firebase';
import { withRouter } from 'react-router-dom'
import { doGetProperty } from '../../Firebase/Properties'
import { message, Button } from 'antd';


class EditProperty extends Component {
    state = {
        property: {}
      }

    componentDidMount () {
      console.log(this.props.match.params.id)
        doGetProperty(this.props.match.params.id)
          .then(snapShot => this.setState({ property: snapShot.data()}))
          // .then(snapShot => console.log(snapShot.data()))
    }

    onChange = (e) => {
        this.setState({
          property: {...this.state.property, [e.target.name] : e.target.value}
        })
      }
    onSubmit = (e) => {
        //  
        e.preventDefault()
        // create fucntion that will make the data without this.state.file
        // 
        firebase.firestore()
          .collection("properties")
          .doc(this.props.match.params.id) //
          .update(this.state.property)
        .then(() => {
        console.log("Document successfully EDITTED!");
        })
        .catch(function(error) {
        console.error("Error writing document: ", error);
        });
        return this.props.history.push('/allproperties')
    }
    success = () => {
      message.success('Property successfully edited.');
    };

  render() {
    const { firstName, lastName, email, phone, 
        address, city, state, zip } = this.state.property

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
            <Button onClick={this.success} htmlType="submit">Edit Property</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(EditProperty);