import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import { HashRouter as Router, Route, Switch } from  'react-router-dom'; //for github page BrowserRouter wont work

import Contacts from './components/contacts/Contacts';
//import AddContact from './components/contacts/AddContact_ref';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

/*Test of life cycle*/
import Test from './components/test/Test';

import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Header branding="Content Manager"/>
                    </header>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Contacts}></Route>
                            <Route exact path="/contact/add" component={AddContact}></Route>
                            <Route exact path="/contact/edit/:id" component={EditContact}></Route>
                            <Route exact path="/about/:id" component={About}></Route>
                            <Route exact path="/test" component={Test}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </div>
                </div>
            </Router>

        </Provider>
    );
  }
}

export default App;
