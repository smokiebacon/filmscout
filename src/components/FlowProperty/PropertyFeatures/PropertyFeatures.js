import React, { Component } from 'react'
import { Checkbox, Row, Col } from 'antd';

class PropertyFeatures extends Component {
    onChange = (checkedValues) => {
        this.props.updateCheckbox(checkedValues);
      }
  render() {
    return (
      <div>
        <h1>What features does this place have?</h1>
        <Checkbox.Group style={{ width: '100%' }} 
        defaultValue={this.props.features}
        onChange={this.onChange}>
        <Row>
        <Col span={4}><Checkbox value="Pool">Pool</Checkbox></Col>
        <Col span={4}><Checkbox value="Playground">Playground</Checkbox></Col>
        <Col span={4}><Checkbox value="Fireplace">Fireplace</Checkbox></Col>
        <Col span={4}><Checkbox value="Chandelier">Chandelier</Checkbox></Col>
        <Col span={4}><Checkbox value="Billiards">Billiards</Checkbox></Col>
        <Col span={4}><Checkbox value="Elevator">Elevator</Checkbox></Col>
        <Col span={4}><Checkbox value="Escalator">Escalator</Checkbox></Col>
        <Col span={4}><Checkbox value="Gym">Gym</Checkbox></Col>
        <Col span={4}><Checkbox value="Spa">Spa</Checkbox></Col>
        <Col span={4}><Checkbox value="Sauna">Sauna</Checkbox></Col>
        <Col span={4}><Checkbox value="Garden">Garden</Checkbox></Col>
        <Col span={4}><Checkbox value="Cafeteria">Cafeteria</Checkbox></Col>
        <Col span={4}><Checkbox value="Wine Cellar">Wine Cellar</Checkbox></Col>
        </Row>
        </Checkbox.Group>
      </div>
    )
  }
}
export default PropertyFeatures;