import React from 'react';

function Entry(props){
  const keywords = props.data.entry1.keywords;
  const displayKewords = keywords.map( (word,index) => {
    return(
      <li key={index}>{word}</li>
    )
  });

  return(
    <React.Fragment>
      <h3>This is the Entry song title: {props.data.entry1.title}</h3>
      <p>This is the author of the song: {props.data.entry1.author}</p>
      <h3>Song keywords: </h3>
      <ul>{displayKewords}</ul>
      <h4>{props.data.entry1.title}</h4>
      <h4>{`returnEntryId: ${props.data.entry1.returnEntryId()}`}</h4>
    </React.Fragment>
  )
}

export default Entry;