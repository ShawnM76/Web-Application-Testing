import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Display from './Components/Display';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const scoreStrike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const scoreBall = () => {
    if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const scoreFoul = () => {
    if (strikes !== 2) {
      setStrikes(strikes + 1);
    }
  };
  const scoreHit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Display strikes={strikes} balls={balls} />
        <Dashboard
          strike={scoreStrike}
          ball={scoreBall}
          foul={scoreFoul}
          hit={scoreHit}
        />
      </header>
    </div>
  );
}

export default App;
