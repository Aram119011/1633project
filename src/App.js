import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css';
import Auth from './Auth/auth';
import AboutUs from './Auth/AboutUs/AboutUs';
import Contact from './Auth/Contact/Contact';
import HowItWorks from './Auth/HowItWorks/HowItWorks';
// import Profile from './Profile/profile';
import Contacts from './Profile/Contacts/contacts';
import Calls from "./Profile/Calls/calls";
import Chats from "./Profile/Chat/chat";

import {Provider} from "react-redux";
import store from './Redux/Store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path='/' component={Auth}/>
                    <Route exact path='/aboutus' component={AboutUs}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/howitworks' component={HowItWorks}/>
                    {/*<Route exact path='/forgottenpassword' component={ForgottenPassword}/>*/}
                    {/*<Route exact path='/profile' component={Profile}/>*/}

                    {/*Profile*/}
                    <Route exact path='/profile/contacts' component={Contacts}/>
                    <Route exact path='/profile/calls' component={Calls}/>
                    <Route exact path='/profile/chats' component={Chats}/>

                </Router>
            </Provider>
        );
    }
}


export default App;
