import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './state/store.js'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from "primereact/api";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <PrimeReactProvider>
            <App />
            </PrimeReactProvider>
        </Provider>
    </BrowserRouter>
)
