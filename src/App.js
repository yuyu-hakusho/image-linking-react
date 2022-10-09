import './App.css';
import drakeYes from './drake-yes.jpg';

function App() {
  return (
    <div className="App">
      <img className="no" alt="Drake saying no meme" src="/drake-no.jpg" />
      <img className="yes" alt="Drake saying yes meme" src={drakeYes} />
    </div>
  );
}

export default App;
