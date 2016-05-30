import React from 'react';


const CreateTask = React.createClass ({

	handleSubmit(e){
		e.preventDefault();
		const title = this.refs.title.value;
		const picture = this.refs.picture.value;
		console.log("title: " + title + " picture: " + picture);
		this.refs.taskForm.reset();
	},

	render() {
		return (
			<form onSubmit={this.handleSubmit} ref="taskForm">
				<input type="text" ref="title" placeholder="Title" />
				<input type="text" ref="picture" placeholder="Image url" />
				<input type="submit" hidden />
			</form>

		);
	}
});

export default CreateTask;