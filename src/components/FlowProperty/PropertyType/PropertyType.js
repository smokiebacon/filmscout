import React, { Component } from 'react'
import { Select } from 'antd';


class PropertyType extends Component {


    handleChange = (value) => {
    console.log(`selected ${value}`);
    console.log(this)
    }

  render() {
    const Option = Select.Option;
    console.log(this.props.style)
    return (
      <div>
        <h1>What type of property are you creating?</h1>
        <Select
            defaultValue={this.props.type}
            showSearch
            style={{ width: 200 }}
            placeholder="Select Property Type"
            optionFilterProp="children"
            onChange={this.props.click}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
            <Option value="House">House</Option>
            <Option value="Business">Business</Option>
            <Option value="Apartment">Apartment</Option>
            <Option value="Restaurant">Restaurant</Option>
            <Option value="Shopping Center">Shopping Center</Option>
        </Select>
        <h1>What kind of style does this property have?</h1>
        <Select
            defaultValue={this.props.style}
            showSearch
            style={{ width: 200 }}
            placeholder="Select Property Style"
            optionFilterProp="children"
            onChange={this.props.click}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
            <Option value="Victorian">Victorian</Option>
            <Option value="Artsy">Artsy</Option>
            <Option value="Dive">Dive</Option>
            <Option value="Traditional">Traditional</Option>
            <Option value="Asian">Asian</Option>
            <Option value="Cabin">Cabin</Option>
            <Option value="Retro">Retro</Option>
            <Option value="Campground">Campground</Option>
        </Select>
        
      </div>
    )
  }
}
export default PropertyType;