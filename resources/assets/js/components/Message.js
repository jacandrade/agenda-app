import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Contact extends Component {
    render() {
        let { message } = this.props;
        return (
            <div className="card text-white bg-dark mb-3 message-card">
                <div className="card-header">{ message.contact.name + ' ' + message.contact.surname }</div>
                <div className="card-body">
                    <h5 className="card-title">Message:</h5>
                    <p className="card-text">{ message.body }</p>
                    <button className="btn btn-primary btn-function btn-function-message-edit"
                        onClick={() => this.props.onEditClick(message)}>
                        <i className="fas fa-edit fa-lg"></i>
                    </button>
                    <button className="btn btn-danger btn-function btn-function-message-delete"
                        onClick={() => this.props.onDeleteClick(message)}>
                        <i className="fas fa-trash-alt fa-lg"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Contact;