import React from 'react';
import { Button } from 'antd';
import './App.scss';
import InfoModal from './components/infoModal';
import { useDispatch } from 'react-redux';
import "antd/dist/antd.css";
function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <InfoModal />
        <Button onClick={{}}>Open info modal</Button>
      </header>
    </div>
  );
}

export default App;
