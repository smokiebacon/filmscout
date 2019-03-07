import React, { Component } from 'react'
import { db } from '../../Firebase/Firebase'
import { getFile } from '../../Firebase/storage';
import { deleteProperty } from '../../Firebase/Properties';
import { Link } from 'react-router-dom'
import { Card, Icon, Popconfirm, message  } from 'antd';

class AllAdminProperties extends Component {
  state = {
    properties: [],
    file: ''
  }

  componentDidMount () {

    var docRef = db.collection("properties")  //
    docRef.get().then((snapShot) => { 
      snapShot.docs.map(d => { //mapping thru all docs
        getFile(d.data().fileRef) //getFile from all data. actually gets the file
          .then(file => this.setState({properties: [ //set state properties to the file and userid
            ...this.state.properties, 
            Object.assign(d.data(), {file:file}, {uid: d.id})
          ]}))
      })
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

  confirm = (e) => {
  console.log(e);
  message.success('Property Deleted');
}

  cancel = (e) =>  {
  console.log(e);
  message.error('Cancelled');
}

  editProp = (id) => {


}
  deleteProp = (id) => {
    deleteProperty(id) 
    .then(() => {
      console.log("Document successfully deleted!");
      this.confirm()
      this.setState({properties: this.state.properties.filter(p => p.uid !== id)})
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  }
  render() {
    const { Meta } = Card;


    return (
      <div className="admin__alladminproperties__cards">
        <h1>All Admin Properties</h1>
        {this.state.properties.map(p => {
          return(
            <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={p.file} />}
            actions={[<Link to="/editproperty"><Icon type="edit"/></Link> ,
            
            <Popconfirm title="Delete this property?" onConfirm={() => this.deleteProp(p.uid)} onCancel={this.cancel} okText="Yes" cancelText="No">
            <a href="#">Delete</a>
            </Popconfirm>]}>

            <Meta
            title={p.address}
            description="This is the description"/>
            </Card>
                )
          })
        }
      </div>
    )
  }
}

export default AllAdminProperties; 