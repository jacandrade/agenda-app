import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">Agenda</NavLink>
                <button className="navbar-toggler" 
                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts" activeClassName="active">Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/messages" activeClassName="active">Messages</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}