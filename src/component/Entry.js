import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Entry(props){
  const displayKewords = props.entry.keywords.map( (word,index) => {
    return(
      <li key={index}>
        <Badge bg="info">{word}</Badge>
      </li>
    )
  });
  const {title, author} = props.entry;
  
  return(
    <React.Fragment>
      <h3>{title}</h3>
      <p>{author}</p>
      <h4>Keywords: </h4>
      <ul>{displayKewords}</ul>
    </React.Fragment>
  )
}

export default Entry;