import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RecoilRoot } from 'recoil';
import App from './App';
import { Loading } from './helpers/Loading';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
    <RecoilRoot>
    <App />
    </RecoilRoot>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


