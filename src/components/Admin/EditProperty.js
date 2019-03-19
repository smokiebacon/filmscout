import React, { Component } from 'react'
import firebase from '../../Firebase/Firebase';
import { withRouter, Link } from 'react-router-dom'
import { doGetProperty } from '../../Firebase/Properties'
import { message, Card, Popconfirm, Button, Icon } from 'antd';
import PropertyType from '../FlowProperty/PropertyType/PropertyType';
import PropertyFeatures from  '../FlowProperty/PropertyFeatures/PropertyFeatures';
import { getFile } from '../../Firebase/storage'


class EditProperty extends Component {
    state = {
        property: {},
        pictures: []
      }

    componentDidMount () {
      console.log(this.props.match.params.id)
        doGetProperty(this.props.match.params.id)
          .then(snapShot => {
            snapShot.data().fileRef.forEach(f => {
              getFile(f)
                .then(ref => 
                  this.setState({pictures: [...this.state.pictures, ref]})
                  )
            })
            this.setState({ property: snapShot.data()})
          })
    }

    clickHandler = (e) =>{
      console.log(e)
      if (e === "House" ||
          e === "Business" ||
          e === "Apartment" ||
          e === "Restaurant" ||
          e === "Shopping Center"){
            this.setState({
              property:{
                ...this.state.property,
                type: e
              }
            })
          } else {
            this.setState({
              property:{
                ...this.state.property,
                style: e
              }
            })
          }
    }

    updateCheckbox = (e) => {
      console.log(e, 'THIS IS CHECKBOX FROM ADDPROPERTY.JS')
      this.setState({
        property:{
          ...this.state.property,
          features: e
        }
      })
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
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      address, 
      city,
      features,
      style,
      type, 
      zip, 
      state } = this.state.property
      const { Meta } = Card;
    return (
    <div>
     <h1>Edit Property Page</h1>
     {
       (style && type) && <PropertyType style={style} type={type} click={this.clickHandler}/>
     }
     {
       features && <PropertyFeatures features={features} updateCheckbox={this.updateCheckbox}/> 

     }
        <div className="EditProperty__Gallery">
        { 
          this.state.pictures.map(p =>
        
            <Card
            style={{ width: 240 }}
            cover={<img alt="example" src={p} />}
            actions={[
            <Popconfirm title="Delete this picture?" onConfirm={() => this.deleteProp(p)} onCancel={this.cancel} okText="Yes" cancelText="No">
              <a href="#">Delete</a>
            </Popconfirm>]}>
            </Card>
          // <Card
          //   style={{ width: 300 }}
          //   cover={<img alt="house picture" src={p} />}
          
          // </Card>
          )
        }
        </div>   
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