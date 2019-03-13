import React, { Component } from 'react'
import { db } from '../../../Firebase/Firebase'
import { getFile } from '../../../Firebase/storage';
import { Link } from 'react-router-dom'
import Searchbar from '../../SearchBar/Searchbar'
import { Card, Select } from 'antd';



class AllProperties extends Component {
  state = {
    properties: [],
    filteredProperties: [],
    file: ''
  }

  componentDidMount () {
    var docRef = db.collection("properties")  //
    docRef.get().then((snapShot) => { 
      snapShot.docs.map(d => { //mapping thru all docs
        getFile(d.data().fileRef[0]) //getFile from all data. actually gets the file
          .then(file => this.setState({properties: [ //set state properties to the file and userid
            ...this.state.properties, 
            Object.assign(d.data(), {file:file}, {uid: d.id})
          ],
          filteredProperties: [ //set state properties to the file and userid
            ...this.state.properties, 
            Object.assign(d.data(), {file:file}, {uid: d.id})
          ]
        }))
      })
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
   query = (query) => {
   
    const tags = [...query].map(q => q.name)
    console.log(tags)
    // const citiesRef = db.collection("properties");
    // citiesRef.where("features", "array-contains", tags)
    //   .get()
    //   .then((snapShot) => 
    //     snapShot.docs.map(d => console.log(d.data()))
    //   )

      let filteredProperties = [];
      let properties = [...this.state.properties];
      for (let i = 0; i < properties.length; i++ ) {
        for (let j = 0; j < tags.length; j++) {
          if (properties[i].features.includes(tags[j])) {
            filteredProperties.push(properties[i])
            properties.splice(i, 1)
          }
        }
      }

      //why client side over server side?
      // mini-app that doesn't load so many pic
      //server side for millions of search
      // Start: filteredProperties
      // Find tags within Properties
      // Remove all Properties without Tags
      // let filteredProperties = [...this.state.filteredProperties];
      // let properties = [...this.state.properties];
      // for (let i = 0; i < filteredProperties.length; i++ ) {
      //   for (let j = 0; j < tags.length; j++) {
      //     if (filteredProperties[i].features.includes(tags[j])) {
      //       // Found tags
      //     } else {
      //       // All properties without tags
      //       // Remove here
      //       // filteredProperties.splice(i, 1)
      //     }
      //   }
      // }
      console.log('filteredProperties', filteredProperties, 'properties' ,properties);
      
      this.setState({
        filteredProperties : filteredProperties
      })

  }

  render() {
    const { Meta } = Card;
    const Option = Select.Option;
    return (
    <div>
        <h1>All Locations for Filming</h1>
        <Select
            defaultValue={this.props.type}
            showSearch
            style={{ width: 200 }}
            placeholder="Select Location"
            optionFilterProp="children"
            onChange={this.props.click}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
            <Option value="Burbank">Burbank</Option>
            <Option value="Los Angeles">Los Angeles</Option>
            <Option value="Rowland Heights">Rowland Heights</Option>
            <Option value="Hollywood">Hollywood</Option>
            <Option value="Glendale">Glendale</Option>
        </Select>
        
        <Searchbar query={this.query} />
        <div className="cardGrid">
            <div className="admin__alladminproperties__cards">
        {this.state.filteredProperties.map(p => {
          return (
            <Card
            style={{ width: 300 }}
            cover={<Link to={`/property/${p.uid}`}>
            <img alt="example" src={p.file} /></Link>}
            >
            <Meta
            title={p.address}
            description="This is the description"/>
            </Card>
            )
          })
          
        }
          </div>
      </div>
         
    </div>
        
    )
  }
}

export default AllProperties;