import React from 'react';
import './App.css';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
       <React.Suspense fallback={<p>Loading...</p>}>
            <Main/>
        </React.Suspense>
    </div>
  );
}

export default App;
