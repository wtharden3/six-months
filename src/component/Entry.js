import React,{useState} from 'react';

function Entry(props){
  const [keywords, setKeywords] = useState(props.entry.keywords);
  
  const displayKewords = keywords.map( (word,index) => {
    return(
      <li key={index}>{word}</li>
    )
  });
  const {title, author} = props.entry;
  return(
    <React.Fragment>
      <h3>This is the Entry song title: {title}</h3>
      <p>This is the author of the song: {author}</p>
      <h3>Song keywords: </h3>
      <ul>{displayKewords}</ul>
      <h4>{title}</h4>
    </React.Fragment>
  )
}

export default Entry;