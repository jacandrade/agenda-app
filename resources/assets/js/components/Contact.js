import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Contact extends Component {
    render() {
        let { contact } = this.props;
        return (
            <div className="media contact">
                <img className="mr-3 avatar" src="/img/anonymous.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                    <h5 className="mt-0">{ contact.name + ' ' + contact.surname }</h5>
                    Email: { contact.email }
                    <br />
                    Phone: { contact.phone }
                    <button className="btn btn-primary btn-function btn-function-edit"
                        onClick={() => this.props.onEditClick(contact)}>
                        <i className="fas fa-edit fa-lg"></i>
                    </button>
                    <button className="btn btn-danger btn-function btn-function-delete"
                        onClick={() => this.props.onDeleteClick(contact)}>
                        <i className="fas fa-trash-alt fa-lg"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Contact;