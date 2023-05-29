import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'style/index.css';
import 'style/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import * as serviceWorker from 'services/sw/serviceWorker';
import reportWebVitals from 'services/web-vital/reportWebVitals';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ToastContainer />
    <App />
  </React.Fragment>
);

//Start measuring performance, pass a function to log results (for example: reportWebVitals(console.log)) : https://bit.ly/CRA-vitals
if (process.env.REACT_APP_WEB_VITAL === 'true') {
  reportWebVitals(console.log);
}
// Change unregister() to register() to start service worker : https://bit.ly/CRA-PWA
if (process.env.REACT_APP_ENABLE_SW === 'true') {
  serviceWorker.register();
} else {
  serviceWorker.unregister();
}
