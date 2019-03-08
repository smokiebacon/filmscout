import React, { Component } from 'react'
import { Select } from 'antd';


class PropertyType extends Component {

    handleChange = (value) => {
    console.log(`selected ${value}`);
    }

    handleBlur = () => {
    console.log('blur');
    }

    handleFocus = () => {
    console.log('focus');
    }

  render() {
    const Option = Select.Option;

    return (
      <div>
        <h1>What type of property are you creating?</h1>
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select Property Type"
            optionFilterProp="children"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
            <Option value="House">House</Option>
            <Option value="Business">Business</Option>
            <Option value="Apartment">Apartment</Option>
            <Option value="Restaurant">Restaurant</Option>
            <Option value="Cafe">Cafe</Option>


        </Select>
        
      </div>
    )
  }
}
export default PropertyType;