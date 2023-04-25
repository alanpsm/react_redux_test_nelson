import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initializeStore, {history} from './redux/createStore'
import App from './App';
import './index.scss';

const container = document.getElementById('root')!;
const store = initializeStore({}, history);

function MainComponent() {
  return (<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  )
};
ReactDOM.render(<MainComponent/>, document.getElementById('root'));
