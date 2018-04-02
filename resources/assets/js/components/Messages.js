import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as types from '../actions/types';
import Message from './Message';
import UCModal from './UCModal';
import MessageForm from './forms/MessageForm';
import DeleteModal from './DeleteModal';



class Messages extends Component {
	constructor() {
		super();
		this.state = {
			selectedMessage: false
		};

		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.getInitialState = this.getInitialState.bind(this);
    }

    componentDidMount(){
        this.props.fetchMessages();
        this.props.fetchContacts();
    }

	handleEditClick(message) {
		this.setState({
			selectedMessage: message
		});
		this.props.showEditMessage();
	}

	handleDeleteClick(message) {
		this.setState({
			selectedMessage: message
		});
		this.props.showDeleteMessage();
	}

	handleClose() {
		this.setState({
			selectedMessage: false
		});
		this.props.closeModal();
    }

    getInitialState() {
        let { selectedMessage } = this.state;
        if (selectedMessage) {
            let initialState = {
                id: selectedMessage.id,
                contact_id: selectedMessage.contact.id,
                messageBody: selectedMessage.body
            }
            return initialState;
        }
        return undefined;
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Messages</h1>
                <p className="lead">Here you can manage all your messages.</p>
                <p className="lead">Click the add button at the bottom to add new messages.</p>
                <hr className="my-4" />
                <div className="row">
                {
                    this.props.messages ?
                            this.props.messages.map(m =>
                                <Message message={m} key={m.id}
                                    onEditClick={this.handleEditClick}
                                    onDeleteClick={this.handleDeleteClick}
                                />) :
                    <div style={{ textAlign: 'center' }}>No messages to show yet</div>
                }
                </div>
                <hr className="my-4" />
				<button className="btn btn-success btn-create" onClick={this.props.showCreateMessage}>
					<i className="fas fa-plus-circle fa-2x"></i>
				</button>
				<UCModal
					isOpen={this.props.modal[types.SHOW_EDIT_MESSAGE]}
					closeModal={this.handleClose}
					type={'edit'}
					asset={'message'}
				>
                    <MessageForm
                        initialValues={this.getInitialState()}
                        type={'edit'} />
				</UCModal>
				<UCModal
					isOpen={this.props.modal[types.SHOW_CREATE_MESSAGE]}
					closeModal={this.handleClose}
					type={'create'}
					asset={'message'}
				>
					<MessageForm type={ 'create' }/>
				</UCModal>
				<DeleteModal
					isOpen={this.props.modal[types.SHOW_DELETE_MESSAGE]}
					closeModal={this.handleClose}
					asset={this.state.selectedMessage}
					onDelete={this.props.deleteMessage}
					assetType="message"
				/>
            </div>
        );
    }
}

function mapStateToProps({ messages, modal }) {
    return { messages, modal };
}
export default connect(mapStateToProps, actions)(Messages);
