import React, { Component } from 'react'
import { Card, Affix } from 'antd';
import { doGetProperty, } from '../../../Firebase/Properties'
import { withRouter } from 'react-router-dom';
import { getFile } from '../../../Firebase/storage'

class OneProperty extends Component {
  state = {
    property: {}
  }

  componentDidMount () {
    doGetProperty(this.props.match.params.id)
      .then(snapShot => this.setState({
        property: snapShot.data()}
        ))
      .catch(err => console.log(err))
    }

  render() {
    const { Meta } = Card;
    const { property } = this.state
    // console.log(property);
    // const pic = getFile(property.fileRef)
    // console.log(pic);
    return (
      <div>
      <h2>Property Show Page</h2>
      {property.address}
      <br/>
      {property.city}
      <br/>
      {property.zip}
      <br/>
      {property.country}

      <h4>Features: {property.features + ' '}</h4>
      <img src={property.fileRef} alt="property" />


        <div className="callCard">
          <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
              <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="agent profile" src="" />}
              >
              <Meta
              title="Call Agent"
              description="(626) 555-555"
              />
              </Card>
          </Affix>
        </div>
      </div>
    )
  }
}
export default withRouter(OneProperty);
