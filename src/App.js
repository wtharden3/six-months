import './App.css';
import Feed from './component/Feed';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Music Therapy Log</h1>
      <Feed 
        data={data}
      />
    </div>
  );
}

export default App;
