import {useState, lazy, Suspense} from 'react';
import Loading from './animation/Loading';
import './App.css';

const CompHeartAccepted = lazy(() => import('./animation/HeartAccepted'));
const CompHeartRefuse = lazy(() => import('./animation/HeartNotAccepted'));

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
            <button className="buttons accepted" onClick={onAccept}>
              Yes
            </button>{' '}
            <button className="buttons refuse" onClick={onRefuse}>
              No
            </button>
          </div>
        )}
        {isAccepted === 1 && (
          <Suspense fallback={<Loading />}>
            <h4>Thank you mbak Nanda</h4>
            <CompHeartAccepted />
          </Suspense>
        )}
        {isAccepted === 2 && (
          <Suspense fallback={<Loading />}>
            <h4>Thank you mbak buat pilihannya 😇</h4>
            <CompHeartRefuse />
          </Suspense>
        )}
      </main>
    </div>
  );
}

export default App;
