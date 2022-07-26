import './App.css';
import Feed from './component/Feed';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Music Therapy Log</h1>
      <Feed 
        title={data.entry1.title}
        entry1={data.entry1}
      />
    </div>
  );
}

export default App;
