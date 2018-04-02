import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class DeleteModal extends Component {
    componentWillMount(){
        Modal.setAppElement('#root');
    }
    render() {
        return (
            <Modal isOpen={this.props.isOpen} onRequestClose={this.props.closeModal} contentLabel="Delete contact">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Delete {this.props.assetType}</h5>
                            <button type="button" className="close" onClick={this.props.closeModal}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h3>Are you sure you want to delete this {this.props.assetType}</h3>
                            <p>This action is permanent.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger"
                                onClick={() => this.props.onDelete(this.props.asset)}>Yes, delete</button>
                            <button type="button" className="btn btn-secondary" onClick={this.props.closeModal}>Cancel</button>
                        </div>
                    </div>
            </Modal>
        );
    }
}

export default DeleteModal;