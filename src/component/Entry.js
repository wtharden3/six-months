import React from 'react';

function Entry(props){
  const keywords = props.entry1.keywords;
  const displayKewords = keywords.map( (word,index) => {
    return(
      <li key={index}>{word}</li>
    )
  });

  return(
    <React.Fragment>
      <h3>This is the Entry song title: {props.title}</h3>
      <p>This is the author of the song: {props.entry1.author}</p>
      <h3>Song keywords: </h3>
      <ul>{displayKewords}</ul>
      
    </React.Fragment>
  )
}

export default Entry;