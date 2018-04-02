import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class UCModal extends Component {
    componentWillMount(){
        Modal.setAppElement('#root');
    }
    render() {
        let { type, asset } = this.props;
        return (
            <Modal isOpen={this.props.isOpen}
                onRequestClose={this.props.closeModal}
                contentLabel={type + ' ' + asset }>
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">
                            {type.charAt(0).toUpperCase() + type.slice(1) + ' ' + asset}
                        </h5>
                            <button type="button" className="close" onClick={this.props.closeModal}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={this.props.closeModal}>Cancel</button>
                        </div>
                    </div>
            </Modal>
        );
    }
}

export default UCModal;