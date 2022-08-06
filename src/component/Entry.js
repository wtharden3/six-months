import React from 'react';

function Entry(props){
  const displayKewords = props.entry.keywords.map( (word,index) => {
    return(
      <li key={index}>{word}</li>
    )
  });
  const {title, author} = props.entry;
  
  return(
    <React.Fragment>
      <h3>{title}</h3>
      <p>{author}</p>
      <h3>Keywords: </h3>
      <ul>{displayKewords}</ul>
    </React.Fragment>
  )
}

export default Entry;