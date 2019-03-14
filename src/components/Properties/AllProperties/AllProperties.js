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
    const tag = query[query.length - 1].name;
    console.log(tag)
    // const citiesRef = db.collection("properties");
    // citiesRef.where("features", "array-contains", tags)
    //   .get()
    //   .then((snapShot) => 
    //     snapShot.docs.map(d => console.log(d.data()))
    //   )
      
      let filteredProperties = [];
      let properties = this.state.filteredProperties.length > 0 ? [...this.state.filteredProperties] : [...this.state.properties];
      console.log('searched properties', properties, 'cleared arry', filteredProperties);
      for (let i = 0; i < properties.length; i++ ) {
        if (properties[i].features.includes(tag)) {
          filteredProperties.push(properties[i])
        }
      }
      //why client side over server side?
      // mini-app that doesn't load so many pic
      //server side for millions of search
      
      this.setState({
        filteredProperties : filteredProperties
      }, () => { console.log('this.state.filteredProperties', this.state.filteredProperties)})
      console.log('filteredProperties', filteredProperties, 'properties', properties);
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