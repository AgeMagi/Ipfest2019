import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import Event from './components/Event/Event';
import PreEvent from './components/Event/Pre-Event/PreEvent';
import MainEvent from './components/Event/Main-Event/MainEvent';
import Competition from './components/Competition/Competition';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';
import About from './components/About/About';
import MainPageRegistration from './components/Registration-Form/Main-Page/MainPage';
import OptionRegistration from './components/Registration-Form/Option/Option';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/registration-form/option" component={ OptionRegistration } />
                    <Route path="/registration-form" component={ MainPageRegistration } />
                    <Route path="/registration" component = { Registration } />
                    <Route path='/competition' component = { Competition} />
                    <Route path='/event/main-event' component = { MainEvent }/>
                    <Route path='/event/pre-event' component = { PreEvent }/>
                    <Route path='/event' component = {Event} />
                    <Route path='/about' component = {About} />
                    <Route path='/' component = {Home}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
