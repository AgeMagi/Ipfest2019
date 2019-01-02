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
import SmartCompetition from './components/Competition/Smart/Smart';
import OilRigCompetition from './components/Competition/OilRig/OilRig';
import MudInnovationCompetition from './components/Competition/MudInnovation/MudInnovation';
import BusinessCaseCompetition from './components/Competition/BusinessCase/BusinessCase';
import PaperPosterCompetition from './components/Competition/PaperPosterCompetition/PaperPoster';
import PetroDebateCompetition from './components/Competition/PetroDebate/PetroDebate';
import PodCompetition from './components/Competition/POD/Pod';
import SmartRegistration from './components/Registration-Form/Smart/Smart';
import BusinessCaseRegistration from './components/Registration-Form/BusinessCase/BusinessCase';
import MudInnovativionRegistration from './components/Registration-Form/MudInnovation/MudInnovation';
import OilRigRegistration from './components/Registration-Form/OilRig/OilRig';
import PaperPosterRegistration from './components/Registration-Form/PaperPoster/PaperPoster';
import PetroDebateRegistration from './components/Registration-Form/PetroDebate/PetroDebate';
import PODRegistration from './components/Registration-Form/POD/POD';
import SubmittedRegistration from './components/Registration-Form/Submitted/Submitted';
import Sponsor from './components/Sponsor/Sponsor';
import Faq from './components/Faq/Faq';
import ConfirmedPayment from './components/Registration-Form/ConfirmPayment/ConfirmedPayment';
import IpconvexRegistration from './components/Registration/IpconvexRegistration';
import IpconvexMainRegistration from './components/Registration-Form/IPCONVEX/IpconvexMainRegistration';
import StudentIpconvexRegistration from './components/Registration-Form/IPCONVEX/Student';
import ProfessionalIpconvexRegistration from './components/Registration-Form/IPCONVEX/Professional';
import IpconvexSubmittedRegistration from './components/Registration-Form/Submitted/IpconvexSubmitted';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/registration-form/option" component={ OptionRegistration } />
                    <Route path="/registration/confirmed-payment" component = { ConfirmedPayment } />
                    <Route path="/registration-form/ipconvex" component={ IpconvexMainRegistration } />
                    <Route path="/registration-form" component={ MainPageRegistration } />
                    <Route path='/registration/plan-of-development' component={ PODRegistration } />
                    <Route path='/registration/petrodebate' component={ PetroDebateRegistration } />
                    <Route path='/registration/smart' component={ SmartRegistration } />
                    <Route path='/registration/ipconvex/student' component={ StudentIpconvexRegistration } />
                    <Route path='/registration/ipconvex/professional' component={ ProfessionalIpconvexRegistration } />
                    <Route path="/registration/submitted/ipconvex/:id" component={ IpconvexSubmittedRegistration } />
                    <Route path='/registration/submitted/:id' component={ SubmittedRegistration } />
                    <Route path='/registration/ipconvex' component={ IpconvexRegistration } />
                    <Route path="/registration" component = { Registration } />
                    <Route path='/competition/plan-of-development-competition' component = { PodCompetition } />
                    <Route path='/competition/petrodebate-competition' component = { PetroDebateCompetition } />
                    <Route path='/competition/paper-poster-competition' component = { PaperPosterCompetition } />
                    <Route path='/competition/business-case-competition' component = { BusinessCaseCompetition } />
                    <Route path='/competition/mud-innovation-competition' component = { MudInnovationCompetition } />
                    <Route path='/competition/smart-competition' component = { SmartCompetition } />
                    <Route path='/competition/oil-rig-design-competition' component = { OilRigCompetition } />
                    <Route path='/competition' component = { Competition} />
                    <Route path='/event/main-event' component = { MainEvent }/>
                    <Route path='/event/pre-event' component = { PreEvent }/>
                    <Route path='/event' component = {Event} />
                    <Route path='/about' component = {About} />
                    <Route path='/sponsor' component={Sponsor} />
                    <Route path='/faq' component={Faq} />
                    <Route path='/' component = {Home}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
