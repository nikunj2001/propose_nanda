import {useState} from 'react';
import './App.css';
import {
  HeartNotAccepted as HeartBreak,
  HeartAccepted as Heart,
} from './animation';

function App() {
  const [isAccepted, setIsAccepted] = useState(0);

  const onAccept = () => {
    const value = 1;
    setIsAccepted(value);
  };

  const onRefuse = () => {
    const value = 2;
    setIsAccepted(value);
  };

  return (
    <div className="App">
      <main className="App-header">
        {isAccepted === 0 && (
          <div>
            <h2>Would you like to be mine?</h2>
            <button className="buttons accepted" onClick={onAccept}>Yes</button>{' '}
            <button className="buttons refuse" onClick={onRefuse}>No</button>
          </div>
        )}
        {isAccepted === 1 && (
          <div>
            <h4>Thank you mbak Nanda ☺️</h4>
            <Heart />
          </div>
        )}
        {isAccepted === 2 && (
          <div>
            <h4>Thank you mbak buat pilihannya 😇</h4>
            <HeartBreak />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
