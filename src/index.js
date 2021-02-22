import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './components/GlobalStyle';

import App from './routes/App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('app')
);
