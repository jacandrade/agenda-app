import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editMessage, createMessage } from '../../actions';

let MessageForm = (props) => {
  const { handleSubmit, load, pristine, reset, submitting } = props;
  const onSubmit = props.type === 'edit' ? props.onEditSubmit : props.onCreateSubmit;
  const renderOptions = () => {
    if (!props.contacts) {
      return <option>Create a contact first</option>
    }
    let options = props.contacts.map(contact =>
      <option value={contact.id} key={contact.id}>{contact.name + ' ' + contact.surname}</option>
    );

    options.unshift(<option key={'default'}>Choose contact</option>);

    return options;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Select contact</label>
        <div>
          <Field name="contact_id" component="select">
            {renderOptions()}
          </Field>
        </div>
      </div>
      <div className="form-group">
        <label>Message</label>
        <div>
          <Field name="messageBody" component="textarea" className="form-control" required />
        </div>
      </div>
			<Field name="id" component="input" type="hidden" className="form-control"/>
			<div className="form-group">
				<button
					type="submit"
					className="btn btn-primary btn-form"
					disabled={pristine || submitting}
				>
					Save Message
				</button>
				<button
					type="button"
					className="btn btn-secondary btn-form"
					disabled={pristine || submitting}
					onClick={reset}
				>
					Undo Changes
				</button>
			</div>
		</form>
	);
};

function mapStateToProps({ contacts }) {
	return { contacts };
}

MessageForm = reduxForm({
	form: 'messageForm'
})(MessageForm);

export default connect(mapStateToProps, {
  onEditSubmit: editMessage,
  onCreateSubmit: createMessage
})(MessageForm);
