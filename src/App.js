import {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import { Teams } from './components/Teams';
import { TeamStats } from './components/TeamStats';
import Button from '@material-ui/core/Button';
import { IPLHubTabs } from './components/IPLHubTabs';

function App() {
  return (
    <div className="App">

      <Header/>
      <Container>
        <Teams/>
      </Container>
      <IPLHubTabs/>
    </div>
  );
}

export default App;
