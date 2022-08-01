import React from 'react';
import Entry from './Entry';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Feed(props){
  return(
    <Container>
      <Row>
        <Col>
          <Entry 
            data={props.data}
          />
        </Col>
        <Col>
          <Entry 
            data={props.data}
          />
        </Col>
        <Col>
          <Entry 
            data={props.data}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Feed;