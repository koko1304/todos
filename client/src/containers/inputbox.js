import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { createItem } from "../actions";

class InputBox extends Component {
	todoInput = ({ disable, input, meta: { invalid, touched, error } }) => {
		return (
			<div className="input-group mx-auto" style={{ width: "500px" }}>
				<input {...input} type="text" className={`form-control ${touched && invalid && "is-invalid"}`} placeholder="What need to be done?" />
				<div className="input-group-append">
					<button disabled={disable} className="btn btn-primary" type="submit">
						OK
					</button>
				</div>
				<div className="invalid-feedback">{touched && error}</div>
			</div>
		);
	};

	handleSubmit = values => {
		return this.props.createItem(values.todo);
	};

	render() {
		const { invalid, pristine, submitting } = this.props;

		return (
			<form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="form-group">
				<Field name="todo" disable={invalid || pristine || submitting} component={this.todoInput} />
			</form>
		);
	}
}

function validation(fields) {
	var errors = {};

	if (!fields.todo) {
		errors.todo = "Please write your todo!";
	}

	return errors;
}

export default reduxForm({
	form: "Input Box",
	validate: validation
})(connect(({ items }) => ({ items }), { createItem })(InputBox));
