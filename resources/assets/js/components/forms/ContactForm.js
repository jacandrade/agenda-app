import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editContact, createContact } from '../../actions';

let ContactForm = (props) => {
  const { handleSubmit, load, pristine, reset, submitting } = props;
  const onSubmit = props.type === 'edit' ? props.onEditSubmit : props.onCreateSubmit;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label>First Name</label>
				<div>
					<Field
						name="name"
						component="input"
						type="text"
						placeholder="John"
						className="form-control"
					/>
				</div>
			</div>
			<div className="form-group">
				<label>Surname</label>
				<div>
					<Field
						name="surname"
						component="input"
						type="text"
						placeholder="Doe"
						className="form-control"
					/>
				</div>
			</div>
			<div className="form-group">
				<label>Email</label>
				<div>
					<Field
						name="email"
						component="input"
						type="email"
						placeholder="johndoe@example.com"
						className="form-control"
					/>
				</div>
			</div>
			<div className="form-group">
				<label>Phone</label>
				<div>
					<Field
						name="phone"
						component="input"
						type="text"
						placeholder="9999-9999"
						className="form-control"
					/>
				</div>
			</div>
			<Field name="id" component="input" type="hidden" />
			<div className="form-group">
				<button
					type="submit"
					className="btn btn-primary btn-form"
					disabled={pristine || submitting}
				>
					Save Contact
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

ContactForm = reduxForm({
	form: 'contactForm'
})(ContactForm);

export default connect(null, {
  onEditSubmit: editContact,
  onCreateSubmit: createContact
})(ContactForm);
