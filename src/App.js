import Container from 'react-bootstrap/esm/Container';
import './App.css';
import Feed from './component/Feed';
import data from './data';

function App() {
  return (
    <Container className="App">
      <h1>Music Therapy Log</h1>
      <Feed 
        data={data}
      />
    </Container>
  );
}

export default App;
