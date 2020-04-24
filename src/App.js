import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';

import './config/ReactotronConfig';
import { store, persistor } from './store';

import history from './services/history';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Header />
                    <Routes />
                    <GlobalStyles />
                    <ToastContainer autoClose={3000} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
