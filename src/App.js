import Container from 'react-bootstrap/esm/Container';
import './App.css';
import Feed from './component/Feed';
import Header from './component/Header/Header';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
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
