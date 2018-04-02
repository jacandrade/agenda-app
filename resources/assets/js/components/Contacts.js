import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as types from '../actions/types';
import Contact from './Contact';
import UCModal from './UCModal';
import ContactForm from './forms/ContactForm';
import DeleteModal from './DeleteModal';

class Contacts extends Component {
	constructor() {
		super();
		this.state = {
			selectedContact: false
		};

		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	componentDidMount() {
		this.props.fetchContacts();
	}

	handleEditClick(contact) {
		this.setState({
			selectedContact: contact
		});
		this.props.showEditContact();
	}

	handleDeleteClick(contact) {
		this.setState({
			selectedContact: contact
		});
		this.props.showDeleteContact();
	}

	handleClose() {
		this.setState({
			selectedContact: false
		});
		this.props.closeModal();
	}

	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-4">Contacts</h1>
				<p className="lead">Here you can manage all your contacts.</p>
				<p className="lead">Click the add button at the bottom to add new contacts.</p>
				<hr className="my-4" />
				<div className="container">
					{this.props.contacts !== null ? (
						this.props.contacts.map((c) => (
							<Contact
								onEditClick={this.handleEditClick}
								onDeleteClick={this.handleDeleteClick}
								contact={c}
								key={c.id}
							/>
						))
					) : (
						<div style={{ textAlign: 'center' }}>No contacts to show yet</div>
					)}
				</div>
				<hr className="my-4" />
				<button className="btn btn-success btn-create" onClick={this.props.showCreateContact}>
					<i className="fas fa-plus-circle fa-2x"></i>
				</button>
				<UCModal
					isOpen={this.props.modal[types.SHOW_EDIT_CONTACT]}
					closeModal={this.handleClose}
					type={'edit'}
					asset={'contact'}
				>
					<ContactForm initialValues={this.state.selectedContact} type={ 'edit' }/>
				</UCModal>
				<UCModal
					isOpen={this.props.modal[types.SHOW_CREATE_CONTACT]}
					closeModal={this.handleClose}
					type={'create'}
					asset={'contact'}
				>
					<ContactForm type={ 'create' }/>
				</UCModal>
				<DeleteModal
					isOpen={this.props.modal[types.SHOW_DELETE_CONTACT]}
					closeModal={this.handleClose}
					asset={this.state.selectedContact}
					onDelete={this.props.deleteContact}
					assetType="contact"
				/>
			</div>
		);
	}
}

function mapStateToProps({ contacts, modal }) {
	return { contacts, modal };
}
export default connect(mapStateToProps, actions)(Contacts);
