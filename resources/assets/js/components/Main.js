import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Landing from './Landing';
import Contacts from './Contacts';
import Messages from './Messages';


class Main extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
            <div>
                <Navbar />
                <Route exact path='/' component={ Landing } />
                <Route exact path='/contacts' component={ Contacts } />
                <Route exact path='/messages' component={ Messages } />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;