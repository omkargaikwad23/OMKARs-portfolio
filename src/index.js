import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "./assets/styles/GlobalStyle"
import Typography from "./assets/styles/Typography"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Typography/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
