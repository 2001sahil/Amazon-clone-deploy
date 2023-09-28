import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

import Store from "./Componets/store/store"
if(process.env.Node_ENV === 'production') disableReactDevTools()  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
    <App />
    </Provider>
  
);
reportWebVitals();
