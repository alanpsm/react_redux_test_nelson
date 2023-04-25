import React, { useState } from 'react';
import { Button } from 'antd';
import './App.scss';
import InfoModal from './components/infoModal';
import { useDispatch } from 'react-redux';
import "antd/dist/antd.css";
import { openModal } from 'redux/actions/infoActions';
function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <InfoModal />
        <Button onClick={() => dispatch(openModal())} >Open info modal</Button>
      </header>
    </div>
  );
}

export default App;
