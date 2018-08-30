import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

ReactDOM.render(
    <div>
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
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
    </div>
    , 
    document.getElementById('root')
);
registerServiceWorker();
