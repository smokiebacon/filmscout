import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page5 } from '../../data';

const ClientTele = () => {
  const children = page5.map((img, i) => (
    <Col
      key={i.toString()}
      md={6}
      sm={8}
      xs={24}
      style={{
          height: 20,
      }}
    >
      <img width={220} src={img} alt="" />
    </Col>
  ));
  return (
    <OverPack component="section" className="page-wrapper page5 text-center">

        <h2 key="h2">Our Clients Include:</h2>
        <span className="separator" key="span" />
        <Row
          className="page text-center"
          key="a"
        >
          {children}
        </Row>
    </OverPack>
  );
}

export default ClientTele;