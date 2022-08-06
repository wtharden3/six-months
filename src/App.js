import Container from 'react-bootstrap/esm/Container';
import './App.css';
import Feed from './component/Feed';
import data from './data';

function App() {
  return (
    <div className="App text-bg-secondary w-100">
      <Container>
        <h1>Music Therapy Log</h1>
        <Feed 
          data={data}
        />
      </Container>
    </div>
  );
}

export default App;
