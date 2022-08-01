import React from 'react';
import Entry from './Entry';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Feed(props){
  const {data} = props;
  console.log(data);
  const getEntry = i => {
    //get data
    console.log(i);
    console.log(data);
    //for each key or entry assign to a variable and return it
    console.log('constructor');
    console.log(data.constructor.entries.length);
    //should I create an array
  }
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
        <Col>
          {getEntry(1)}
        </Col>
      </Row>
    </Container>
  )
}

export default Feed;