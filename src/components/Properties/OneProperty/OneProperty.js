import React, { Component } from 'react'
import { Card, Affix, Tag } from 'antd';
import { doGetProperty, } from '../../../Firebase/Properties'
import { withRouter } from 'react-router-dom';
import { getFile } from '../../../Firebase/storage'

class OneProperty extends Component {
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

  render() {

    const { Meta } = Card;
    const { property, pictures } = this.state
    console.log(pictures);
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

      <h4>Features: 
      <Tag>{property.features}</Tag>
      </h4>

      <div className="EditProperty__Gallery">
        { 
          pictures.map(p =>
        
            <Card
            style={{ width: 240 }}
            cover={<img alt="example" src={p} />}
            actions={[]}>
            </Card>
          )
        }
        </div> 

        <div className="callCard">
          <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
              <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="agent profile" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.imoney.my%2Farticles%2Fwp-content%2Fuploads%2F2014%2F01%2Freal-estate-agent.jpg&f=1" />}
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
