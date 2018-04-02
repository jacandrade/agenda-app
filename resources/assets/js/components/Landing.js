import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, User!</h1>
                <p className="lead">This is a simple agenda app to store contacts and messages.</p>
                <hr className="my-4" />
                <p>It uses a REST backend provided by a Laravel server and the front end is done with React/Redux.</p>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contacts</h5>
                                <p className="card-text">Manage your contacts.</p>
                                <Link to="/contacts" className="btn btn-primary">Manage</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Messages</h5>
                                <p className="card-text">Manage your messages.</p>
                                <Link to="/messages" className="btn btn-primary">Manage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}