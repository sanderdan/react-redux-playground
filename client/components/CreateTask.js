import React from 'react';


const CreateTask = React.createClass ({

	handleSubmit(e){
		e.preventDefault();

	},

	render() {
		return (
			<form onSubmit={this.handleSubmit} ref="taskForm">
				<input type="text" ref="title" placeholder="Title" />
				<input type="text" ref="picture" placeholder="Image url" />
				<input type="checkbox" ref="status" />
			</form>

		);
	}
});

export default CreateTask;