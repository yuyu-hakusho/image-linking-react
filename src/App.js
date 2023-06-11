import './App.css';
import drakeyes from "./drake-yes.jpg";

function App() {
  return (
    <div className="App">
      <img className="no" src="./image/drake-no.jpg" alt="Drake saying no meme" />
      <img className="yes" src={drakeyes} alt="Drake saying yes meme" />
    </div>
  );
}

export default App;
