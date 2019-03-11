import React, { Component } from 'react'
import { db } from '../../../Firebase/Firebase'
import { getFile } from '../../../Firebase/storage';
import { Link } from 'react-router-dom'
import Searchbar from '../../SearchBar/Searchbar'
import { Card, Icon  } from 'antd';



class AllProperties extends Component {
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
  render() {
    const { Meta } = Card;

    return (
      <div>
        <h1>All Locations for Filming</h1>
        <Searchbar />
        <div className="admin__alladminproperties__cards">
        {this.state.properties.map(p => {
          return(
            <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={p.file} />}

            actions={<Link to={`/property/${p.uid}`}></Link>}>

            <Meta
            title={p.address}
            description="This is the description"/>
            </Card>
                )
          })
        }
      </div>
      </div>
    )
  }
}

export default AllProperties;