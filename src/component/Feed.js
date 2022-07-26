import React from 'react';
import Entry from './Entry';

function Feed(props){
  return(
    <React.Fragment>
      <Entry 
        title={props.title}
        entry1={props.entry1}
      />
    </React.Fragment>
  )
}

export default Feed;