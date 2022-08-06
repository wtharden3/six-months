import React, {useState, useEffect} from 'react';
import Entry from './Entry';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Feed(props){
  const [data, setData] = useState(props.data);
  const [entryArr, setEntryArr] = useState([]);

  useEffect(() => {
    setEntryArr(getEntry(data));
  }, [data]);

  const getEntry = obj => {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }

  const displayEntries = entryArr.map( (entry, index) => {
    return(
      <Col>
        <Entry entry={data[entry]} />
      </Col>
    )
  })

  return(
    <React.Fragment>
      <Row>
        {displayEntries}
      </Row>
    </React.Fragment>
  )
}

export default Feed;