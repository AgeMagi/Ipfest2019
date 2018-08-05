import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import Event from './components/Event/Event';
import PraEvent from './components/Event/Pra-Event/PraEvent';
import MainEvent from './components/Event/Main-Event/MainEvent';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/event/main-event' component = {MainEvent}/>
                    <Route path='/event/pra-event' component = {PraEvent}/>
                    <Route path='/event' component = {Event}/>
                    <Route path='/' component = {Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
    , 
    document.getElementById('root')
);
registerServiceWorker();
