import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import Navigation from './components/Navigation/Navigation';

ReactDOM.render(
    <div>
        <Navigation />
    </div>
    , 
    document.getElementById('root')
);
registerServiceWorker();
