import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RecoilRoot } from 'recoil';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
    <RecoilRoot>
    <App />
    </RecoilRoot>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


